const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const personasRouter = require("./routers/personas");
const proyectosRouter = require("./routers/proyectos");
const sequelize = require("./config/databases");
const app = express();
const fs = require("fs");
const https = require("https");

process.env.port = 4001

const llavePrivada = fs.readFileSync("private.key");
const certificado = fs.readFileSync("certificate.crt");
const credenciales = {
    key: llavePrivada,
    cert: certificado,
    passphrase: "desarrolloweb"
};

app.use(cors());
app.use(express.json());
app.use("/persona",personasRouter);
app.use("/proyecto",proyectosRouter);

const httpsServer = https.createServer(credenciales,app);

httpsServer.listen(process.env.port,()=>{
    console.log("server en puerto 4001");
}).on('error',err =>{
    console.log("Error al iniciarel servidor: ",err);
})