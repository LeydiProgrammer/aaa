const mongoose = require('../conexion');

const schemaData = mongoose.Schema({
    nombre_ser: String,
    descripcion_ser: String,
    costo: Number,
   
});
const userModel = mongoose.model("servicio", schemaData, "servicio");
module.exports = userModel;