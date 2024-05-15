const mongoose = require('../conexion');

const schemaData = mongoose.Schema({ 
fecha:Date,
estado_asig:String,
    idpersonal: { type: mongoose.Schema.Types.ObjectId, ref: 'personal' },
    idservicio: { type: mongoose.Schema.Types.ObjectId, ref: 'servicio' },
    idmascota: { type: mongoose.Schema.Types.ObjectId, ref: 'mascota' }
    
});
const userModel = mongoose.model("asignacion", schemaData, "asignacion");
module.exports = userModel;