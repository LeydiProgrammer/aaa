const express = require('express');
const cors = require('cors');
const mongoose = require('./conexion');
const propietarioRutas = require('./ruta/propietarioRuta');
const mascotaRutas = require('./ruta/mascotaRuta');
const personalRutas = require('./ruta/personalRuta');
const usuarioRutas = require('./ruta/usuariologinRuta');
const usuariocrudRutas = require('./ruta/usuarioRuta');
const servicioRutas = require('./ruta/servicioRuta');
const asignacionRutas = require('./ruta/asignacionRuta');
const vacunaRutas = require('./ruta/vacunaRuta');
const consultaRutas = require('./ruta/consultaRuta');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Servidor en ejecución en el puerto", PORT);
});

app.use('/propietario', propietarioRutas);
app.use('/mascota', mascotaRutas);
app.use('/personal', personalRutas);
app.use('/usuario', usuarioRutas);
app.use('/usuarioc', usuariocrudRutas);
app.use('/servicio', servicioRutas);
app.use('/asignacion', asignacionRutas);
app.use('/vacuna', vacunaRutas);
app.use('/consulta', consultaRutas);
