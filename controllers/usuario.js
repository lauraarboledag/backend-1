const Usuario = require('../models/usuario')
const {request, response} = require('express')

/**
 * Creación
 */
const createUsuario = async (req = request, 
    res = response) => {
    try{
        const data = req.body
        const email = data.email
        console.log(data)
        const usuarioBD = await Usuario.findOne({email})
        if(usuarioBD){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const usuario1 = new Usuario(data)
        //console.log(tipoEquipo)
        await usuario1.save()
        return res.status(201).json(usuario1)
    }catch(e){
        return console.log(e)
        //return res.status(500).json({
         //   msg: e
       // })
    }

}

/**
 * Edición
 */

/**
 * Listar todos
 */
const getUsuario = async (req = request, 
    res = response) => {
    try{
        const { estado } = req.query;

        const usuarioDB = await Usuario.find({estado})
        //select * from tipoequipo where estado = ?;
        return res.json(usuarioDB)
    }catch(e){
        return res.status(500).json({
            msg: e
        }) 
    }
}

module.exports = {createUsuario, getUsuario}