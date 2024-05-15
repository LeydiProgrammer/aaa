const mongoose = require('../conexion');
const schemaData = mongoose.Schema({
    mascota_nom: String,
    especie: String,
    raza: String,
    color:String,
    sexo: String,
    foto_mascota: String,
    codigo_historial:String,
    idpropietario: { type: mongoose.Schema.Types.ObjectId, ref: 'propietario' }
});

const userModel = mongoose.model("mascota", schemaData, "mascota");
module.exports = userModel;