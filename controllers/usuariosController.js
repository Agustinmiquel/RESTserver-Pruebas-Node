const {response, request} = require('express');


const usuariosGet = (req = request, res = response)=>{

    const {nombre, edad, q } = req.query; 
    res.json({
        msg:'get API - controllador',
        q,
        nombre,
        edad
    })
}; 

const usuariosPost = (req,res = response)=>{
    res.json({
        msg:'Post API - controllador'
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