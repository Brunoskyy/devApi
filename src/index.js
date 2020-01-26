const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')
const routes = require('./routes')

const app = express();
const server = http.Server(app)

mongoose.connect('mongodb+srv://artur:artur@cluster0-vnqoz.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)
// get, post put, delete

// Tipos de parâmetros: 

// Query Params: request.query (filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

server.listen(process.env.PORT || 3333);