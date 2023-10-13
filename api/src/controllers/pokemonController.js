const axios = require("axios");
const { Op } = require("sequelize");
const { Pokemon, Type } = require("../db");
const { getTypes } = require("./typeController");
const { POKEAPI, IMG } = process.env;

// Función Post de Pokemon
const postPokemon = async (
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
) => {
  // Creamos un Pokemon

  const pokemon = await Pokemon.create({
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
  });

  await getTypes();

  Types.forEach(async (type) => {
    let typesDb = await Type.findAll({
      where: { typeName: type },
    });
    pokemon.addType(typesDb);
  });

  return pokemon;
};

// Función GET para buscar los pokemon de la Db
const getPokemonDb = async () => {
  //Buscamos todos los pokemons
  const pokemonArr = await Pokemon.findAll({
    include: [
      {
        model: Type,
        attributes: ["typeName"],
      },
    ],
    exclude: "Pokemon_Types",
  });

  //Retornamos
  return pokemonArr;
};

// Función GET para buscar los pokemon de la Api
const getPokemonApi = async () => {
  const { data } = await axios(`${POKEAPI}?offset=151&limit=100`);

  const pokemonArr = await Promise.all(
    data.results.map(async (pokemon) => {
      const { data } = await axios.get(`${pokemon.url}`);
      const imgObj = Object.values(data.sprites.other);

      const createdPokemon = {
        id: data.id,
        name: data.name,
        image: imgObj[2].front_default === null ? IMG : imgObj[2].front_default,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        spAttack: data.stats[3].base_stat,
        spDefense: data.stats[4].base_stat,
        speed: data.stats[5].base_stat,
        weight: data.weight,
        height: data.height,
        Types:
          data.types.length === 1
            ? [data.types[0].type.name]
            : [data.types[0].type.name, data.types[1].type.name],
      };

      return createdPokemon;
    })
  );

  return pokemonArr;
};

const pokemonById = async (id) => {
  if (isNaN(id)) {
    const pokemonId = await Pokemon.findByPk(id);
    return pokemonId;
  }
  const { data } = await axios(`${POKEAPI}/${id}`);
  console.log(data);
  const imgObj = Object.values(data.sprites.other);
  const pokemon = {
    id: data.id,
    name: data.name,
    image: imgObj[2].front_default === null ? IMG : imgObj[2].front_default,
    hp: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    spAttack: data.stats[3].base_stat,
    spDefense: data.stats[4].base_stat,
    speed: data.stats[5].base_stat,
    weight: data.weight,
    height: data.height,
    Types:
      data.types.length === 1
        ? [data.types[0].type.name]
        : [data.types[0].type.name, data.types[1].type.name],
  };

  return pokemon;
};

const pokemonByName = async (name) => {
  //  Función para reconocimiento de nombre
  name = name.toLowerCase();
  const recogCase = {
    [Op.or]: [
      {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
      {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    ],
  };

  // Busqueda de todos los corredores que coincidan con el nombre
  const pokemonDb = await Pokemon.findAll({
    where: recogCase,
    include: Type,
  });

  const { data } = await axios.get(`${POKEAPI}/${name}`);

  const imgObj = Object.values(data.sprites.other);
  const pokemonApi = {
    id: data.id,
    name: data.name,
    image: imgObj[2].front_default === null ? IMG : imgObj[2].front_default,
    hp: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    spAttack: data.stats[3].base_stat,
    spDefense: data.stats[4].base_stat,
    speed: data.stats[5].base_stat,
    weight: data.weight,
    height: data.height,
    Types:
      data.types.length === 1
        ? [data.types[0].type.name]
        : [data.types[0].type.name, data.types[1].type.name],
  };

  const allPokemon = [...pokemonDb, pokemonApi];

  if (!allPokemon.length) {
    throw new Error("No se encontraron los conductores en la base de datos");
  }

  if (allPokemon.length >= 15) {
    const maxPokemon = pokemon.slice(0, 14);
    return maxPokemon;
  }

  return allPokemon;
};

const getPokemon = async () => {
  const pokemonDb = await getPokemonDb(); //Todos los pilotos de la base de datos.
  const pokemonApi = await getPokemonApi(); //Todos los pilotos de la API.
  if (!pokemonDb.length && !pokemonApi.length)
    throw new Error("No se encontraron Pokemon");
  const allPokemon = [...pokemonDb, ...pokemonApi];
  return allPokemon;
};

const updatePokemon = async (
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
) => {
  let pokemonToUpdate = await Pokemon.findOne({ where: { id: id } });
  let updates = {};
  if (name !== undefined) updates.name = name;
  if (image !== undefined) updates.image = image;
  if (health !== undefined) updates.health = health;
  if (attack !== undefined) updates.attack = attack;
  if (defense !== undefined) updates.defense = defense;
  if (spAttack !== undefined) updates.spAttack = spAttack;
  if (spDefense !== undefined) updates.spDefense = spDefense;
  if (speed !== undefined) updates.speed = speed;
  if (height !== undefined) updates.height = height;
  if (weight !== undefined) updates.weight = weight;
  console.log(updates.name);
  console.log(name);
  await pokemonToUpdate.update({
    name: name,
    image: image ? image : IMG,
    health: health,
    attack: attack,
    defense: defense,
    speed: speed,
    height: height,
    weight: weight,
  });

  return pokemonToUpdate;
};

let deletePokemon = async (id) => {
  let toDelete = await Pokemon.findOne({ where: { id: id } });
  if (!toDelete) {
    throw new Error("Pokemon not found");
  }
  await toDelete.destroy();
  return `Pokemon ${toDelete.name} successfully removed`;
};

module.exports = {
  postPokemon,
  getPokemon,
  pokemonById,
  pokemonByName,
  updatePokemon,
  deletePokemon,
};
