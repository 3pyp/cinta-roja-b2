const mongoose = require('mongoose')
const DB_URL = "mongodb+srv://root:root@cluster0-07urh.mongodb.net/supermarket?retryWrites=true"

const { Article } = require("./Article")
const { Ticket } = require("./Ticket")
const { User} = require("./User")

const dbConnection = mongoose.connect(DB_URL, { useNewUrlParser: true }, (err) => {
    !err
        ? console.log('DB Connexion success')
        : console.log(err)
})

module.exports = {
    Article,
    Ticket,
    User,
    dbConnection
}

