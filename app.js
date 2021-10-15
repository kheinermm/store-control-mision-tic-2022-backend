const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require ('./routes');
const path = require('path');
const mongoose = require("mongoose");

// import express from 'express';
// import morgan from 'morgan';
// import cors from 'cors';
// import router from './routes';
// import path from 'path';

const bodyParser = require("body-parser");
const history = require("connect-history-api-fallback");

const app = express();

// INICIO CONEXION A BASE DE DATOS

const options = { useNewUrlParser: true, useUnifiedTopology: true };
// const uri = "mongodb://localhost:27017/storecontroldb";
const uri = "mongodb+srv://misiontikc2022:xdKk82aY7dMmqs2s@store-control-mintic202.bmurp.mongodb.net/storecontroldb?retryWrites=true&w=majority";

mongoose.connect(uri, options).then(
    () => { console.log('Conectado to DB') },
    err => { console.log(err) }
);
// FIN CONEXION A BASE DE DATOS

// middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(history());

// app.get("/", function (req, res) {
//     res.send("mensaje");
// });

app.use('/api', router);


// LEVANTAMIENTO DE SERVIDOR EN PUERTO 3000
app.set("puerto", process.env.PORT || 3000);

if (process.env.NODE_ENV !== 'test') {
    app.listen(app.get("puerto"), function () {
        console.log("puerto de escucha: " + app.get("puerto"));
    });
}




// app.use('/api', router);

// app.set('port', process.env.PORT || 3000);

// if (process.env.NODE_ENV !== 'test') {
//     app.listen(app.get('port'), () => {
//         console.log('Server on port ' + app.get('port') + ' on dev');
//     });
// }

// module.exports = app;
