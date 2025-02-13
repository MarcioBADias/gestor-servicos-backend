const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique:true },
    senha: { type: String, require: true },
    title: { type: String, enum: ['Comercial', 'Tecnico', 'administrador'], require: true }
})

module.exports = mongoose.model('User', userSchema)