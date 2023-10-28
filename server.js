const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const personasRouter = require("./routers/personas");
const proyectosRouter = require("./routers/proyectos");
const sequelize = require("./config/databases");
const app = express();
//const fs = require("fs");
//const https = require("https");

//process.env.port = 4001

app.use(cors());
app.use(express.json());
app.use("/persona",personasRouter);
app.use("/proyecto",proyectosRouter);

sequelize.sync().then(()=> {
    app.listen(3000,()=>{
        console.log("server en puerto 3000");
    })
})