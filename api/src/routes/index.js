const { Router } = require("express");
const morgan = require("morgan");
const cors = require("cors");
const pokemonRouter = require("./pokemonRouter");
const typesRouter = require("./typesRouter");

const router = Router();

router.use(morgan("dev"));
router.use(cors());

// Ruta solo de pilotos
router.use("/pokemon", pokemonRouter);
// Ruta solo de Equipos
router.use("/types", typesRouter);

module.exports = router;
