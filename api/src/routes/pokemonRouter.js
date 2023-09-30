const { Router } = require("express");
const pokemonRouter = Router();
//Handlers
const {
  getPokemonHandler,
  pokemonByIdHandler,
  pokemonByNameHandler,
  postPokemonHandler,
} = require("../handlers/pokemonHandler");

//Routes
//Ruta de buscador de conductor por nombre ✅
pokemonRouter.get("/name", pokemonByNameHandler);
//Ruta de buscador de pokemon por Id ✅
pokemonRouter.get("/:pokemonId", pokemonByIdHandler);
//Ruta de objeto de conductors
pokemonRouter.get("/", getPokemonHandler);
//Ruta de posteo de conductor
pokemonRouter.post("/", postPokemonHandler);

module.exports = pokemonRouter;
