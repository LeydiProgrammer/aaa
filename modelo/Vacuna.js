const mongoose = require('../conexion');
const schemaData = mongoose.Schema({
    vacuna: String,
   fecha_vacuna:Date,
    idasignacion: { type: mongoose.Schema.Types.ObjectId, ref: 'asignacion' }
});
const userModel = mongoose.model("vacuna", schemaData, "vacuna");
module.exports = userModel;