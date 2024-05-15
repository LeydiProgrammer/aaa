const mongoose = require('../conexion');

const schemaData = mongoose.Schema({
    fecha_consulta: Date,
    edad: Number,
    peso: Number,
    fr: Number,
    fc: Number,
    temperatura_rectal: Number,
    deshidratacion: String,
    reflejo_pupilar: String,
    otros: String,
    diagnostico: String,
    examen_complementario: String,
    tratamiento: String,
    idasignacion: { type: mongoose.Schema.Types.ObjectId, ref: 'asignacion' }
});

const userModel = mongoose.model("consulta", schemaData, "consulta");
module.exports = userModel;