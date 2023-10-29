const jwt = require ('jsonwebtoken');

const generarJWT = ( _id = '') => {

    return new Promise((resolve, reject) => {

        const payload = { _id }; 
        jwt.sign(payload, process.env.SECRETJWT, {
            expiresIn: '4h' // Expira en una hora
        }, (err, token) => {
            if(err){
                console.log(err);
                reject('No se pudo crear el JWT')
            } else{
                resolve(token);
            }
        })

    })
}

module.exports = generarJWT;