const { Router} = require('express');
const { usuariosGet, usuariosPost, usuariosDelete, usuariosPut} = require('../controllers/usuariosController');

const router = Router();


router.get('/',usuariosGet);
router.post('/',usuariosPost);
router.put('/:id', usuariosPut);
router.delete('/', usuariosDelete);


module.exports=router;