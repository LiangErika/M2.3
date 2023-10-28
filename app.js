const models = require('./models');

const consultarPersona = async () => {
    const personas = await models.Persona.findAll();
    personas.forEach(persona => {
        console.log(persona.dataValues);
    });
    models.sequelize.close();
}

const consultarProyecto = async () => {
    const proyectos = await models.Proyecto.findAll();
    proyectos.forEach(proyecto => {
        console.log(proyecto.dataValues);
    });
    models.sequelize.close();
}

const agregarDonadorProyecto = async () => {
    const proyecto = await models.Proyecto.findByPk(1);

    const donador1 = await models.Persona.findByPk(1);
    const donador2 = await models.Persona.findByPk(3);

    console.log(donador1);
    console.log(donador2);

    await proyecto.addDonadores([donador1,donador2]);

    const donadoresProyecto = await proyecto.getDonadores();

    donadoresProyecto.forEach(donador=> {
        console.log(donador.nombre);
    });

    models.sequelize.close();
}

agregarDonadorProyecto();