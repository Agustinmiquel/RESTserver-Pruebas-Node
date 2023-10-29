const express = require('express');
const cors = require('cors');
const DBconexion = require('../db/config');

class Server {

    constructor() {
        this.app  = express(); //inicio servidor
        this.port = process.env.PORT; //llamado al puerto
        this.usuariosPath = '/api/usuarios'; //creacion de ruta
        this.authPath = '/api/auth'; 

        //Conectar a DB: 
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    //Conectar a BD: 
    async conectarDB(){
        await DBconexion();
    }

    middlewares() {

        // CORS
        this.app.use( cors() );
        
        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

    }

    routes() {
        this.app.use( this.authPath, require('../routes/auth'));
        this.app.use( this.usuariosPath, require('../routes/user'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}

module.exports = Server;