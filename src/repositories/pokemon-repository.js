'use strict';

const mongoose = require('mongoose');
const Pokemon = mongoose.model('Pokemon');

exports.get = async() => {
    const res = await Pokemon.find();
    return res;
}

exports.getByAbilities= async(abilities) => {
    const res = await Pokemon
        .find();
    return res;
}

exports.getByType1= async(type1) => {
    const res = await Pokemon
        .find();
    return res;
}

exports.getByType1= async(type2) => {
    const res = await Pokemon
        .find();
    return res;
}

exports.getByType1= async(is_legendary) => {
    const res = await Pokemon
        .find();
    return res;
}

exports.create = async(data) => {
    var pokemon = new Pokemon(data);
    await pokemon.save();
}

exports.update = async(id, data) => {
    await Pokemon
        .findByIdAndUpdate(id, {
            $set: {
                name: data.name,
                abilities: data.abilities,
                type1: data.type1,
                type2: data.type2,
                is_legendary: data.is_legendary,
            }
        });
}

exports.delete = async(id) => {
    await Pokemon
        .findOneAndRemove(id);
}
