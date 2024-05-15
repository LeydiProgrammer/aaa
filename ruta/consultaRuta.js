const express = require('express');
const userModel = require('../modelo/Consulta');
const router = express.Router();



 
// Listar

router.get("/", async (req, res) => {
    try {
        const data = await userModel.find({}).populate({
            path: 'idasignacion',
            select: 'fecha estado_asig',
            populate: [
                {path: 'idpersonal',select: 'nombre_per apellidop_per apellidom_per'},
                {path: 'idmascota',
                    select: 'mascota_nom especie raza color sexo foto_mascota codigo_historial',
                    populate: [
                        {path: 'idpropietario',select: 'nombre apellido_pa apellido_ma'},
                    ]
                }
            ]
        });
        res.json({ success: true, data: data });
        console.log(data);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});


// Crear
router.post("/create", async (req, res) => {

    const data = new userModel(req.body);
    await data.save();
    res.send({ success: true, message: "dato registrado" });
});

// Actualizar
router.put("/update", async (req, res) => {   
    const { _id, ...rest } = req.body;
    const data = await userModel.updateOne({ _id: _id }, rest);
    res.send({ success: true, message: "actualizado", data: data });
});

// Eliminar
router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    const data = await userModel.deleteOne({ _id: id });
    res.send({ success: true, message: "eliminado", data: data });
});

module.exports = router;
