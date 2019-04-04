const mongoose = require("mongoose")
const DB_URL = "mongodb+srv://root:root@cluster0-07urh.mongodb.net/cinta-roja-b2?retryWrites=true"

mongoose.connect(DB_URL, {useNewUrlParser:true}, (err) =>{
    !err
        ? console.log('Conexion a la base de datos exitosa')
        : console.log(err)
})

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
    is_active: {
        type: Boolean,
        default: true
    }
})

const Users = mongoose.model("Users", userSchema)

module.exports = {
    Users
}