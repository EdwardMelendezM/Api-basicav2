const express = require('express');
const connect = require('./config/mongo');
const router = require('./routes/users');
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
app.use(express.json())
/**
 * Uso de rutas
 */
app.use(router)





app.listen(PORT, () => {
  console.log("El servidor esta en el puerto ", PORT)
})
connect();