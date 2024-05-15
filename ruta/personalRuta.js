const express = require('express');
const userModel = require('../modelo/Personal');
const router = express.Router();



 
// Listar

router.get("/", async (req, res) => {
    const data = await userModel.find({});
    res.json({ success: true, data: data });
    console.log(data);
});


// Crear
router.post("/create", async (req, res) => {
  req.body.nombre_per = req.body.nombre_per.toUpperCase();
  req.body.apellidop_per = req.body.apellidop_per.toUpperCase();
  req.body.apellidom_per= req.body.apellidom_per.toUpperCase();
  req.body.direccion_per = req.body.direccion_per.toUpperCase();
    const data = new userModel(req.body);
    await data.save();
    res.send({ success: true, message: "dato registrado" });
});

// Actualizar
router.put("/update", async (req, res) => {   
    req.body.nombre_per = req.body.nombre_per.toUpperCase();
    req.body.apellidop_per = req.body.apellidop_per.toUpperCase();
    req.body.apellidom_per= req.body.apellidom_per.toUpperCase();
    req.body.direccion_per = req.body.direccion_per.toUpperCase();
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
