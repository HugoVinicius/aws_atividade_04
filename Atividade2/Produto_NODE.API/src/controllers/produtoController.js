const express = require('express');
const router = express.Router();

bodyParser = require("body-parser"),


//body parser for parsing request body
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
//temperary store for `item` in memory


let produto = { itens : [] };

exports.get = (req, res, next) => {
    res.status(200).json(produto.itens);
};

exports.post = (req, res, next) => {
    produto.itens.push(req.body);
    res.status(200).json(req.body);
};

exports.getById = (req, res, next) => {
    res.status(200).json(produto.itens[req.params.id]);
};

exports.delete = (req, res, next) => {

    for (var i = 0; i < produto.itens.length; i++) {
        if (produto.itens[i].id == req.params.id) {
            produto.itens.splice(i, 1)  
            i--          
            res.status(200).json('Voce deletou o Item: ');
        }
    }
};


exports.put = (req, res, next) => {
    for (var i = 0; i < produto.itens.length; i++) {
        if (produto.itens[i].id == req.params.id) {
            produto.itens[i] = req.body
            res.status(200).json('Produto alterado com sucesso')
            
        }
    }
};




