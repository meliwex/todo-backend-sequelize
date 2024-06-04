const db = require("../db/models")


module.exports = async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Connection to database is successful.');
    
    await db.sequelize.sync();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } 
}