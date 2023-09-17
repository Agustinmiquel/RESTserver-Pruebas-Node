const mongoose = require('mongoose');
require('dotenv').config(); 

const DBconexion = async() => {

    try{
        await mongoose.connect(process.env.MONGO_DB);
        console.log('Base de datos conectada'); 
    } catch(error){
        console.log(error);
        throw new Error('Error en la base de datos') 
    }
}

module.exports = DBconexion; 