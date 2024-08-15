const mongoose = require('mongoose');

const {Schema} = mongoose

const orderSchema = new Schema({
    email: {
        type: 'string',
        required: true,
        unique: true
    },
    order_data: {
        type: 'array',
        required: true,
    }
})

module.exports = mongoose.model('order', orderSchema);