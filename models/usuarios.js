const { Schema, model  } = require('mongoose'); 

const UsuarioSchema = Schema({

    nombre: {
        type: String,
        required: true
    },

    correo: {
        type:String,
        required:true,
        unique: true,
    },

    contraseña: {
        type : String ,
        required : [true,'La contraseña es requerida'],
        unique:true,
    },
    estado: {
        type: Boolean,
        default:true
    },

    rol: {
        type:String,
        required: true,
        enum:['ADMIN_ROLE','USER_ROLE'],
    },

    img:{
        img:String
    }
})

module.exports = model('Usuarios', UsuarioSchema); 