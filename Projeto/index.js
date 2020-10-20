const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

const cadsocio = require('./routes/cadsocio.route') // Importa rota
const app = express()

const mongoose = require('mongoose')
let url = 'mongodb+srv://dbUser:teste123@cluster0.riscz.mongodb.net/CadSocio?retryWrites=true&w=majority'
let mongoDB = url
mongoose.connect(mongoDB)
let db = mongoose.connection
db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'))
let porto = 3000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use((req, response, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    response.setHeader("Access-Control-Allow-Origin", "*");
response.setHeader("Access-Control-Allow-Credentials", "true");
response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    app.use(cors());
    next();
});
app.use(cadsocio)

app.listen(porto, () => {
    console.log('Servidor em execução no porto' + porto)
});



// Configurar acesso à BD.



//Body Parser



