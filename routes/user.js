const { Router} = require('express');
const { usuariosGet, usuariosPost, usuariosDelete, usuariosPut} = require('../controllers/usuariosController');
const { check } = require('express-validator');
const validarCampos = require('../middlewares/validar-campos');
const validarJWT = require('../middlewares/validarJWT');

const router = Router();


router.get('/',usuariosGet);

router.post('/', check('correo', 'El correo no es valido').isEmail(),
check('nombre', 'El nombre es obligatorio').not().isEmpty(),
check('password', 'El password tiene que ser de mas letras').isLength({min:6}),
validarCampos,
usuariosPost);

router.put('/:id', usuariosPut);

router.delete('/:id',
validarJWT,
check('id', 'No es un ID valido').isMongoId(),
validarCampos,
usuariosDelete);


module.exports=router;