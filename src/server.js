const express = require("express")
const helmet = require("helmet");
const cors = require("cors");
const todoRoutes = require("./routes/todo")
const { sequelize } = require("./db/models")
require('dotenv').config()


const app = express();


app.use(cors());
app.use(helmet())
app.use(express.json())


app.use("/v1/todos", todoRoutes)



const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true }); 
    
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Listening on port ${port}`))
  
  } catch (err) {
    console.error(err);
  }
}


start();
