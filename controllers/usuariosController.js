const {response, request} = require('express');
const Usuarios = require('../models/usuarios');
const bcrypt = require('bcrypt')
const expressvalidator = require('express-validator');

const usuariosGet = (req = request, res = response)=>{

    const {nombre, edad, q } = req.query; 
    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    res.json({
        msg:'get API - controllador',
        q,
        nombre,
        edad
    })
}; 

const usuariosPost = async (req,res = response)=>{

    const {nombre, correo, contraseña, rol } = req.body;
    const user = new Usuarios({nombre, correo, contraseña, rol}); 

    // Verificar si el correo Sirve:
    const existeMail = await user.findOne({correo});
    if(!existeMail){
        return res.status(400).json({
            msg:'Ese correo ya esta registrado'
        });
    }

    // Encriptar la contraseña:
    const Encriptar = bcrypt.genSaltSync(10)
    user.contraseña = bcrypt.hashSync(contraseña, Encriptar);

    // Guardar usuario
    await user.save(); //para guardar en la base de datos

    res.json({
        msg:'Post API - controllador',
        user
    })
}; 

const usuariosDelete = async (req,res = response)=>{

    const {id} = req.params

    const user = await Usuarios.findById(id)

    res.json({
        msg:'Delete API - controllador',
        user
    })
}; 

const usuariosPut = (req,res = response)=>{

    const { id } = req.params;

    res.json({
        msg:'Put API - controllador',
    })
}; 

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosDelete ,
    usuariosPut,
}