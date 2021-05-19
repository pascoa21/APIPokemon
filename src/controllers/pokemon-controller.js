'use strict';
const mongoose = require('mongoose');
const { schema } = require('../models/pokemon-models');
const Pokemon = mongoose.model('Pokemon')
const repository = require('../repositories/pokemon-repository')

exports.get = async(req,res,next)=>{
   try{
    var data = await repository.get();
        res.status(200).send(data);
    }catch(e){
        res.status(500).send({
            message: 'Falha ao processar requisição'
        });
    };
}    

exports.getByAbilities = async(req, res, next) => {
    try {
        var data = await repository.getBygetByAbilities(req.params.abilities);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.getByType1 = async (req,res,next)=>{
    try {
        var data = await repository.getById(req.params.type1);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.getByType2 = async (req,res,next)=>{
    try {
        var data = await repository.getById(req.params.type2);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.getByLegendary = async (req,res,next)=>{
    try {
        var data = await repository.getById(req.params.is_legendary);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.post = async (req,res,next) => {
         
   try { await repository.create({
    name: req.body.name,
    abilities: req.body.abilities,
    type1: req.body.type1,
    type2: req.body.type2,
    is_legendary: req.body.is_legendary,
    });
        res.status(201).send({
            message: 'Pokemon adicionado com sucesso!'
    });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};


exports.put = async(req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Produto atualizado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.delete = async (req, res, next) => {Pokemon
    try {
        await repository.delete(req.body.id)
        res.status(200).send({
            message: 'Produto removido com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};