const express = require("express")
const helmet = require("helmet");
const cors = require("cors");
const todoRoutes = require("./routes/todo")
const dbConnectTest = require("./utils/dbConnectTest")
require('dotenv').config()



const app = express();

dbConnectTest()


app.use(cors());
app.use(helmet())
app.use(express.json())


app.use("/v1/todos", todoRoutes)


const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`Listening on port ${port}`))
