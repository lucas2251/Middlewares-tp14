const express = require('express');
const router = express.Router();


const {list,editar,crear,eliminar} = require ('../controllers/adminController');
const adminLogs= require('../middlewares/adminLogs')

router.get('/crearProducto',adminLogs,crear);
router.get('/editarProducto',adminLogs,editar);
router.get('/',adminLogs,list);
router.get('/eliminarProducto',adminLogs,eliminar);

module.exports = router;