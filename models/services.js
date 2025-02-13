const mongoose = require('mongoose')

const servicesSchema = new mongoose.Schema({
    serviceType: { 
        type:String,
        enum: ['Implementação', 'suporte'],
        require: true
    },
    description: { type: String, require: true },
    status: {
        type: String,
        enum: ['Pendente', 'Em Progresso', 'Concluido'],
        default: 'Pendente'
    },
    initialDate: { type: Date, default: Date.now},
    activeUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true }
})

module.exports = mongoose.model('services', servicesSchema)