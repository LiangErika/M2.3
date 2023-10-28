const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('proyecto', 'root', 'contrasena', {
  host: '127.0.0.1',
  dialect: 'mysql', 
});

sequelize.authenticate()
  .then(() => {
    console.log('Conexión exitosa');
  })
  .catch(err => {
    console.error('Error de conexión:', err);
  });

module.exports = sequelize;