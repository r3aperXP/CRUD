//Adicionar cadsocio à BD
exports.create = function (req, res) {
    let cadsocio = new cadsocio(
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
     cadsocio.save(function (err) {
    if (err) {
    return next(err);
     }
     res.send('Registo de socio criado com sucesso')
     })
    }