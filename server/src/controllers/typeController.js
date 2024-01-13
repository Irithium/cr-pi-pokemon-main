const axios = require("axios");

const { Type } = require("../db");
const { TYPEAPI } = process.env;

const getTypes = async () => {
  const typesDb = await Type.findAll(); // Traemos los datos de la tabla Team

  if (!typesDb.length) {
    const { data } = await axios(`${TYPEAPI}`);
    const typesArr = data.results.map((type) => ({ typeName: type.name }));

    await Type.bulkCreate(typesArr);
    const typesDb1 = await Type.findAll();

    return typesDb1;
  }

  return typesDb;
};

module.exports = {
  getTypes,
};
