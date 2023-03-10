const mongoose = require('mongoose');
const connect = () => {
  const DB_URI = process.env.DB_URI;
  mongoose.set('strictQuery', true);
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, res) => {
    if (!err) {
      console.log("Conexion correcta!!!")
    }
    else {
      console.log("**** ERROR DE CONEXION ****")
    }
  })
}
module.exports = connect;