require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conectado ao banco'))
    .catch((err) => console.log('erro ao conectar com mongoose: ', err))

app.get('/', (req, res) => {
    res.send('API rodando!')
})

const PORT = process.env.PORT || 30000

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))