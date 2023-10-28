const models = require('../models');

const consultarProyecto = async function(req,res){
    try{
        const proyectos = await models.Proyecto.findAll();
        res.json(proyectos);
    }catch(error){
        res.status(500).json({error:error.message});
    }
}

const add = async function(req,res){
    try{
        const newPro = await Proyecto.create(req.body);
        res.staus(201).json(newPro);
    }catch{
        res.status(500).json({error:error.message});
    }
}


exports.consultarProyecto = consultarProyecto;
exports.add = add;
