const routerx = require('express-promise-router');
// const categoriaRouter = require('./categoria');
// const articuloRouter = require('./stock');
// const usuarioRouter = require('./usuario');
// const ingresoRouter = require('./pedido');
const ventaRouter = require('./venta');



const router = routerx();

// router.use('/categoria', categoriaRouter);
// router.use('/stock', stockRouter);
// router.use('/usuario', usuarioRouter);
// router.use('/pedido', pedidoRouter);
router.use('/venta', ventaRouter);

module.exports = router;