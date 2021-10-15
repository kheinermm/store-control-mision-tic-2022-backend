const express = require('express');
const router = express.Router();

const Venta = require('../models/venta');

// Registrar Venta
router.post('/venta-nueva', async (req, res) => {
    const body = req.body;
    try {
        const ventaDB = await Venta.create(body)
        res.status(200).json(ventaDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'ocurrio un error',
            error
        });
    }

});

router.get('/venta', async (req, res) => {
try {
    const ventaDB = await Venta.find()
    res.json(ventaDB);
} catch (error) {
    return res.status(500).json({
        mensaje: 'ocurrio un error',
        error
    });
}
});
// exportar configuracion express
module.exports = router;

