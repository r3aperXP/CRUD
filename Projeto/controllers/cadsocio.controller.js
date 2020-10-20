var cadsocio = require('../models/cadsocio.model');
exports.test = function (req, res) {
    res.send('Olá! Teste ao Controller');
};

exports.create = function (req, res) {
    let socio = new cadsocio(
     {
     nome: req.body.nome,
     tipo: req.body.tipo,
     email: req.body.email,
     telefone: req.body.telefone,
     data_nascimento: req.body.data_nascimento,
     estado_civil: req.body.estado_civil,
     cpf: req.body.cpf,
     cep: req.body.cep
     }
     )
     console.log ('Passei por aqui')
     socio.save(function (err) {
    if (err) {
        console.log ('Passei por aqui')
     }
     res.send('Registo de socio criado com sucesso')
     })
    }