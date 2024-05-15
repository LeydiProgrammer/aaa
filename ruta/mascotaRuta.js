const express = require('express');
const userModel = require('../modelo/Mascota');
const router = express.Router();


const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './fotos/mascota'); 
    },
    filename: (req, file, cb) => {
      const fileName = `${file.originalname}`;
      cb(null, fileName);
    },
  });
  
  const upload = multer({ storage });
  
//mostrar
  router.use('/verfoto', express.static(path.join(__dirname, '../fotos/mascota')));



 // router.use('/verfotousuario', express.static(path.join(__dirname, '../uploads/usuario')));
// Crear
router.post("/create",upload.single('file'), async (req, res) => {
console.log(req.body);
req.body.mascota_nom = req.body.mascota_nom .toUpperCase();
req.body.especie = req.body.especie.toUpperCase();
req.body.raza = req.body.raza.toUpperCase();
req.body.color = req.body.color.toUpperCase();
const currentDate = new Date();
const codigoGenerado = currentDate.getFullYear().toString() +
    ('0' + (currentDate.getMonth() + 1)).slice(-2) +
    ('0' + currentDate.getDate()).slice(-2) +
    ('0' + currentDate.getHours()).slice(-2) +
    ('0' + currentDate.getMinutes()).slice(-2) +
    ('0' + currentDate.getSeconds()).slice(-2) +
    req.body.mascota_nom.toUpperCase().replace(/\s+/g, '');

// Asignar el código generado a req.body.codigo
req.body.codigo_historial = codigoGenerado;
const data = new userModel(req.body);
await data.save();
res.send({ success: true, message: "dato registrado" });
});




// Listar
router.get("/", async (req, res) => {
    try {
        const data = await userModel.find({}).populate('idpropietario', 'nombre apellido_pa apellido_ma celular direccion');
        res.json({ success: true, data: data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});



// Actualizar
router.put("/update",upload.single('file'), async (req, res) => {
  
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
