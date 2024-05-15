const mongoose = require('../conexion');
const schemaData = mongoose.Schema({
    nombre_per: String,
    apellidop_per: String,
    apellidom_per: String,
    celular_per: Number,
    direccion_per: String,
    cargo_per: String,
});

const userModel = mongoose.model("personal", schemaData, "personal");
module.exports = userModel;