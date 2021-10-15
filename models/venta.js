// import mongoose from "mongoose";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ventaSchema = new Schema({

    codigoVenta:{type:String, default:Date.now()},
    fechaVenta:{type:Date, default:Date.now},
    codigoStock:String,
    precio:String,
    cantidad:String,
    precioTotalVenta:String,
    descuento:String
});

// convertir a modelo
const Venta = mongoose.model('Venta', ventaSchema);
module.exports = Venta;