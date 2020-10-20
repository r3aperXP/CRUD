const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let cadsocioSchema = new Schema({
    nome: {type: String, required: true, max: 100},
    tipo: {type: String, required: true},
    email: {type: String, required: true}, 
    telefone: {type: Number, required: true, max: 11}, 
    data_nascimento: {type: String, required: true},
    estado_civil: {type: String, required: true},
    cpf: {type: Number, required: true, max: 11},
    cep: {type: Number, required: true, max: 8}
 
});
// Exportar o modelo
module.exports = mongoose.model('cadsocio', cadsocioSchema);