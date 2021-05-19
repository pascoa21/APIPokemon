'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/pokemon-controller')

router.get('/pokemons', controller.get)
router.get('/pokemons/:abilites', controller.getByAbilities)
router.get('/pokemons/:type1', controller.getByType1)
router.get('/pokemons/:type2', controller.getByType2)
router.get('/pokemons/:is_legendary', controller.getByLegendary)
router.post('/pokemons', controller.post);
router.put('/pokemons/:name', controller.put);
router.delete('/pokemons/:name', controller.delete);

module.exports = router;