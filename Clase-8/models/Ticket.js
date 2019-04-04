const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
    subtotal: {
        type: Number,
        default: 0
    },
    iva: {
        type: Number,
        default: 0
    },
    total: {
        type: Number,
        default: 0
    },
    is_active: {
        type: Boolean,
        default: true
    },
    articles: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Article',
            require: true
        }
    ]
},{ timestamps: true })

const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = {
    Ticket
}