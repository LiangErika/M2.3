const express = require("express");
const router = express.Router();
const proyectoController = require("../controladores/proyectoController");
router.get("/",proyectoController.consultarProyecto);
router.post("/",proyectoController.add);

module.exports = router;