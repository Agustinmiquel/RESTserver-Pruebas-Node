const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const usuarios = require('../models/usuarios');

const validarJWT = async (req = request, res = response, next) => {

    const token = req.header('token')

    // console.log(token)

    if(!token){
        return res.status(400).json({msg: 'Token is missing'})
    }

    try {
        const { _id } = jwt.verify(token, process.env.SECRETJWT);

         // leer el usuario que corresponde al uid
         const usuario = await usuarios.findById( _id );

         if( !usuario ) {
             return res.status(401).json({
                 msg: 'Token no válido - usuario no existe DB'
             })
         }
 
         // Verificar si el uid tiene estado true
         if ( !usuario.estado ) {
             return res.status(401).json({
                 msg: 'Token no válido - usuario con estado: false'
             })
         }

        req.usuario = usuario;
        console.log(_id);
        next();

    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: "Invalid Token"
        })
    }

    

}


module.exports = validarJWT;