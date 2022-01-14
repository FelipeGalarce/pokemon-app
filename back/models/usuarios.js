const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    pokemon1: [{}],
    pokemon2: [],
    pokemon3: [],
    pokemon4: [],
    pokemon5: [],
    pokemon6: []

})
module.exports = mongoose.model('usuarios', usersSchema)


