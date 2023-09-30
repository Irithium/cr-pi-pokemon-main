const { getTypes } = require("../controllers/typeController");

const getTypesHandler = async (req, res) => {
  try {
    const response = await getTypes();

    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getTypesHandler,
};
