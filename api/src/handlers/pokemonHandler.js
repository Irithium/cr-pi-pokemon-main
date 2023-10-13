// Controllers
const {
  postPokemon,
  getPokemon,
  pokemonById,
  pokemonByName,
  updatePokemon,
  deletePokemon,
} = require("../controllers/pokemonController");

//Handlers
const postPokemonHandler = async (req, res) => {
  const {
    name,
    image,
    hp,
    attack,
    defense,
    spAttack,
    spDefense,
    speed,
    weight,
    height,
    Types,
  } = req.body;
  if (
    !name ||
    !image ||
    !hp ||
    !attack ||
    !defense ||
    !spAttack ||
    !spDefense ||
    !speed ||
    !weight ||
    !height ||
    !Types
  )
    res.status(400).send("Missing Data");
  try {
    const response = await postPokemon(
      name,
      image,
      hp,
      attack,
      defense,
      spAttack,
      spDefense,
      speed,
      weight,
      height,
      Types
    );

    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: error.message });
  }
};

const getPokemonHandler = async (req, res) => {
  try {
    const response = await getPokemon();

    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const pokemonByIdHandler = async (req, res) => {
  let { pokemonId } = req.params;
  try {
    const response = await pokemonById(pokemonId);

    res.status(202).send(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const pokemonByNameHandler = async (req, res) => {
  let { name } = req.query;

  try {
    //Pedimos una respuesta del controlador con un await
    const response = await pokemonByName(name);

    res.status(202).send(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const updatePokemonHandler = async (req, res) => {
  let {
    id,
    name,
    image,
    health,
    attack,
    defense,
    spAttack,
    spDefense,
    speed,
    height,
    weight,
  } = req.body;
  try {
    const response = await updatePokemon(
      id,
      name,
      image,
      health,
      attack,
      defense,
      spAttack,
      spDefense,
      speed,
      height,
      weight
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePokemonHandler = async (req, res) => {
  const { id } = req.params;
  console.log("estoy en handler", id);
  try {
    const response = await deletePokemon(id);

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.messagge });
  }
};

module.exports = {
  postPokemonHandler,
  getPokemonHandler,
  pokemonByIdHandler,
  pokemonByNameHandler,
  updatePokemonHandler,
  deletePokemonHandler,
};
