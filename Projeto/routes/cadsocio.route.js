const express = require('express')

const router = express.Router()

const cadsocio_controller = require('../controllers/cadsocio.controller')
// teste simples
router.get('/testar', cadsocio_controller.test)
router.post('/create', cadsocio_controller.create)
module.exports = router

// routes/cadsocio.route.js

