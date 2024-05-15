const mongoose = require('../conexion');

const schemaData = mongoose.Schema({
    nombre: String,
    apellido_pa: String,
    apellido_ma: String,
    celular: Number,
    direccion: String,
});

const userModel = mongoose.model("propietario", schemaData, "propietario");
module.exports = userModel;