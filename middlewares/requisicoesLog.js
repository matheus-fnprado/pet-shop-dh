const fs = require('fs');

module.exports = (req, res, next) => {
    let dataHora = new Date().toISOString();

    fs.appendFileSync('requisicoesLog.txt', `O usuário IP: ${req.ip} acessou a rota ${req.method} ${req.url} cod status htp: ${res.statusCode} as ${dataHora}\n`)

    return next()
}