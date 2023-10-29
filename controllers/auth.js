const { response } = require("express");
const usuarios = require("../models/usuarios");
const bcrypt = require('bcrypt');
const generarJWT = require('../helpers/generar-jwt')


const login = async (req, res = response) => {

    const {correo, contraseña} = req.body;


    try {
        // Verificar si el email existe
        const usuario = await usuarios.findOne({correo});
        if (!usuario){
            return res.status(400).json({
                msg:'Usuario no es correcto'
            })
        }

        // Verificar el estado del Usuario:
        if(!usuario.estado){
            return res.status(400).json({
                msg:"El usuario se encuentra inactivo"
            })
        }

        // Verificar la contraseña 
        const validar = bcrypt.compareSync(contraseña, usuario.contraseña);
        if(!validar){
            return res.status(400).json({
                msg:'El password salio mal'
            })
        }

        // Generar el Json Web Token

        const token = await generarJWT(usuario._id);

        res.json({
            msg: 'Login OK',
            correo, 
            contraseña,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({
            msg:'No se puede ingresar al sistema'
        })
    }
   
}

module.exports = {login};