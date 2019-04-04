const express = require('express')
const bodyParser = require('body-parser')
const PORT = 4000

const { Users } = require("./Users")

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send({ message: 'Server on' })
})

app.post('/api/v1/user/create', (req, res) => {
    const { name, last_name, email, age } = req.body
    const newUser = Users({
        name,
        last_name,
        email,
        age
    })

    newUser.save((err, user) => {
        !err
            ? res.status(201).send(user)
            : res.status(409).send(err)
    })

})

app.get('/api/v1/users/get', (req, res) => {
    Users.find().exec()
        .then(users => {
            res.status(200).send(users)
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

app.get('/api/v1/user/get/:userid', (req, res) => {
    const { userid } = req.params
    Users.findById(userid).exec()
        .then(user => {
            res.status(200).send(user)
        })
        .catch(err => {
            res.status(404).send(err)
        })
})

app.put('/api/v1/user/update/:userid', (req, res) => {
    const { userid } = req.params
    Users.findByIdAndUpdate(userid, { $set: req.body }, { new: true }).exec()
        .then(user => {
            res.status(200).send(user)
        })
        .catch(err => {
            res.status(409).send(err)
        })
})

app.patch('/api/v1/user/partialUpdate/:userid', (req, res) => {
    const { userid } = req.params
    Users.findByIdAndUpdate(userid, { $set: { name: req.body.name } }, { new: true }).exec()
        .then(user => {
            res.status(200).send(user)
        })
        .catch(err => {
            res.status(409).send(err)
        })
})

app.delete('/api/v1/user/delete/:userid', (req, res) => {
    const { userid } = req.params
    Users.findByIdAndUpdate(userid, { $set: { is_active: false } }, { new: true }).exec()
        .then(user => {
            res.status(200).send({ message: `El usario ${userid} ha sido eliminado` })
        })
        .catch(err => {
            res.status(409).send(err)
        })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})