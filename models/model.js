const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    CardNumber: {
        type: String,
        required: true
    },
    ExpDate: {
        type: String,
        required: true
    },
    Cvv: {
        type: String,
        required: true
    },
    Amount: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Data', dataSchema)
