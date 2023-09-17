const {response, request} = require('express');
const Usuarios = require('../models/usuarios');

const usuariosGet = (req = request, res = response)=>{

    const {nombre, edad, q } = req.query; 
    res.json({
        msg:'get API - controllador',
        q,
        nombre,
        edad
    })
}; 

const usuariosPost = async (req,res = response)=>{

    const body = req.body;
    const user = new Usuarios(body); 

    await user.save(); //para guardar en la base de datos

    res.json({
        msg:'Post API - controllador',
        user
    })
}; 

const usuariosDelete = (req,res = response)=>{
    res.json({
        msg:'Delete API - controllador'
    })
}; 

const usuariosPut = (req,res = response)=>{

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