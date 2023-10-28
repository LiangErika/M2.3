const express = require("express");
const router = express.Router();
const personasController = require("../controladores/personaController");
router.get("/",personasController.consultarPersona);
//router.post("/",personasController.add);

module.exports = router;