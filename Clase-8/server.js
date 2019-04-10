const express = require('express')
const { dbConnection, Ticket, Article, User } = require('./models')
const PORT = process.env.PORT || 4000
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send({ message: "Server on" })
})

// ------------ ARTICLE CRUD -----------//

app.post('/api/v1/create/article', (req, res) => {
    const { name, price, stock } = req.body
    const newArticle = Article({
        name,
        price,
        stock
    })
    newArticle.save((err, article) => {
        !err
            ? res.status(201).send(article)
            : res.status(409).send(err)
    })
})

app.get('/api/v1/get/articles', (req, res) => {
    Article.find().exec()
        .then((articles) => {
            res.status(200).send(articles)
        }).catch((err) => {
            res.status(404).send(err)
        });
})

app.get('/api/v1/get/article/:articleid', (req, res) => {
    const { articleid } = req.params
    Article.findById(articleid).exec()
        .then((article) => {
            res.status(200).send(article)
        }).catch((err) => {
            res.status(404).send(err)
        });
})

app.put('/api/v1/update/article/:articleid', (req, res) => {
    const { articleid } = req.params
    Article.findByIdAndUpdate(articleid, { $set: req.body }, { new: true }).exec()
        .then((article) => {
            res.status(200).send(article)
        }).catch((err) => {
            res.status(404).send(err)
        });
})

app.delete('/api/v1/delete/article/:articleid', (req, res) => {
    const { articleid } = req.params
    Article.findByIdAndUpdate(articleid, { $set: { is_active: false } }, { new: true }).exec()
        .then((article) => {
            res.status(200).send(`The article ${articleid} has been removed `)
        }).catch((err) => {
            res.status(409).send(err)
        });
})

// ------------ TICKET CRUD -----------//

app.post('/api/v1/create/ticket', (req, res) => {
    const { subtotal, total, iva, articles } = req.body
    const newTicket = Ticket({
        subtotal,
        total,
        iva,
        articles
    })
    newTicket.save((err, ticket) => {
        !err
            ? res.status(201).send(ticket)
            : res.status(409).send(err)
    })
})

app.get('/api/v1/get/tickets', (req, res) => {
    Ticket.find().exec()
        .then((tickets) => {
            res.status(200).send(tickets)
        }).catch((err) => {
            res.status(409).send(err)
        });
})
app.get('/api/v1/get/ticket/:ticketid', (req, res) => {
    const { ticketid } = req.params
    Ticket.findById(ticketid).exec()
        .then((ticket) => {
            res.status(200).send(ticket)
        }).catch((err) => {
            res.status(409).send(err)
        });
})
app.put('/api/v1/update/ticket/:ticketid', (req, res) => {
    const { ticketid } = req.params
    Ticket.findByIdAndUpdate(ticketid, { $set: req.body }, { new: true }).exec()
        .then((ticket) => {
            res.status(200).send(ticket)
        }).catch((err) => {
            res.status(409).send(err)
        });
})
app.delete('/api/v1/delete/ticket/:ticketid', (req, res) => {
    const { ticketid } = req.params
    Ticket.findByIdAndUpdate(ticketid, { $set: { is_active: false } }, { new: true }).exec()
        .then((ticket) => {
            res.status(200).send(`The ticket ${ticketid} has been removed `)
        }).catch((err) => {
            res.status(409).send(err)
        });
})
app.get('/api/v1/tickets', (req, res) => {
    Ticket.find().populate('articles').exec()
        .then((tickets) => {
            res.status(200).send(tickets)
        }).catch((err) => {
            res.status(404).send(err)
        });
})

// --------- USER CRUD -------// 

app.post('/api/v1/create/user', (req, res) => {
    const { name, last_name, email, password } = req.body
    const newUser = User({
        name,
        last_name,
        email,
        password
    })
    newUser.save((err, user) => {
        !err
            ? res.status(201).send(user)
            : res.status(409).send(err)
    })
})

app.post('/api/v1/login/user', (req, res) => {
    const { email, password } = req.body
    User.findOne({email: email}).exec()
        .then((user) => {
            user.comparePassword(password, (err, isMatch) => {
                !err
                    ? res.send(isMatch)
                    : res.send(err)
            })
        }).catch((err) => {
            res.send(err)
        });
})

//------  CONNECTION   -----/

dbConnection
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server runnig on port: ${PORT}`)
        })
    })
    .catch(() => {
        console.log('Error connecting to DB')
    })

