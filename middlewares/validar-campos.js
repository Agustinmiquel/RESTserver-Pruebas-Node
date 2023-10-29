const expressvalidator = require('express-validator');

const validarCampos = (req, res, next) => {

    const errors = expressvalidator.validationResult(req)
    if (!errors.isEmpty){
        return res.status(400).json({errors});
    }

    next();
}

module.exports = validarCampos;