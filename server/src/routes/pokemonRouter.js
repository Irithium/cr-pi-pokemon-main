const { Router } = require("express");
const pokemonRouter = Router();
//Handlers
const {
  getPokemonHandler,
  pokemonByIdHandler,
  getPokemonByGenHandler,
  pokemonByNameHandler,
  postPokemonHandler,
  updatePokemonHandler,
  deletePokemonHandler,
} = require("../handlers/pokemonHandler");

//Routes
//Ruta de buscador de pokemon por nombre ✅
pokemonRouter.get("/gen", getPokemonByGenHandler);
//Ruta de buscador de pokemon por nombre ✅
pokemonRouter.get("/name", pokemonByNameHandler);
//Ruta de buscador de pokemon por Id ✅
pokemonRouter.get("/:pokemonId", pokemonByIdHandler);
//Ruta de objeto de pokemon ✅
pokemonRouter.get("/", getPokemonHandler);
//Ruta de posteo de pokemon ✅
pokemonRouter.post("/", postPokemonHandler);
//Ruta put de pokemons ✅
pokemonRouter.put("/", updatePokemonHandler);
//Ruta delete pokemons
pokemonRouter.delete("/delete/:id", deletePokemonHandler);

module.exports = pokemonRouter;
