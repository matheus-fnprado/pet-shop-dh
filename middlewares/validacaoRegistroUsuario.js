const { body } = require('express-validator');

const validacaoRegistroUsuario = [
    body('email').isEmail(),
    body('nome').notEmpty().withMessage('O nome é obrigatorio').bail(),
    body('senha').isLength({min: 6}),
]

module.exports = validacaoRegistroUsuario