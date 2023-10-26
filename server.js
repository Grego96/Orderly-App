require("dotenv").config();

const express = require("express");
const app = express();

const dbInitialSetup = require("./dbInitialSetup");

const APP_PORT = 8080 || process.env.APP_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require("./routes");

routes(app);

dbInitialSetup();

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
