const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    is_active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

const Article = mongoose.model('Article', articleSchema)

module.exports = {
    Article
}