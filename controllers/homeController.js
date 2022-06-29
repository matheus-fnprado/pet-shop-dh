const Servico = require('../models/servico');
const fs = require('fs');
const { v4: geradorDeId } = require('uuid');

const homeController = {
    index: (req, res) => {
        const title = 'Minha primeira aplicação com ejs';
        res.render('home', { title });
    },
    sobre: (req, res) => {
        res.render('home/sobre');
    },
    servicos: (req, res) => {
        const servicos = Servico.findAll();
        res.render('home/servicos', { servicos });  
    },
    login: (req, res) => {
        res.send('Login');
    },
    create: (req, res) => {
        res.render('home/registro')
    },
    store: (req, res) => {
        let content = fs.readFileSync('./db.json', 'utf8');
        const db = JSON.parse(content);
        const { email, senha, nome } = req.body;
        const usuario = {
            id: geradorDeId(),
            nome,
            email,
            senha,
        };

        db.usuarios.push(usuario);
        content = JSON.stringify(db);

        fs.writeFileSync('./db.json', content)

        res.redirect('/adm/servicos');
    }
}

module.exports = homeController;
