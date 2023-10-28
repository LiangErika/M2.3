const models = require('../models');

const consultarPersona = async function(req,res){
    try{
        const personas = await models.Persona.findAll();
        res.json(personas);
    }catch(error){
        res.status(500).json({error:error.message});
    }
}

const add = async function(req,res){
    try{
        const newPer = await Persona.create(req.body);
        res.staus(201).json(newPer);
    }catch{
        res.status(500).json({error:error.message});
    }
}


exports.consultarPersona = consultarPersona;
exports.add = add;

/*const Persona = require("../models/persona");

const getAll = async function(req,res){
    try{
        const personas = await Persona.findAll();
        res.json(personas);
    }catch(error){
        res.status(500).json({error:error.message});
    }
}

const add = async function(req,res){
    try{
        const newPer = await Persona.create(req.body);
        res.staus(201).json(newPer);
    }catch{
        res.status(500).json({error:error.message});
    }
}

module.exports = {
    getAll,
    add
};
//exports.getAll = getAll;
//exports.add = add;*/