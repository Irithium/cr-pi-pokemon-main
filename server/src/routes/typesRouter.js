const { Router } = require("express");
const typesRouter = Router();
//Handler
const { getTypesHandler } = require("../handlers/typeHandler");

//Route
//Ruta de arreglo de tipos ✅
typesRouter.get("/", getTypesHandler);

module.exports = typesRouter;
