const mongoose = require('mongoose')
const user_schema = mongoose.Schema({
    user_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    document: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: Object,
        required: true,
        city: {
            type: String,
            required: true
        },
        code_zip: {
            type: String,
            required: true
        }
    },
    pets: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('User', user_schema)