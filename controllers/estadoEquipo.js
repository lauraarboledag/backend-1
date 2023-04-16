const Estado = require('../models/estadoEquipo')
const {request, response} = require('express')

/**
 * Creación
 */
const createEstadoEquipo = async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
        console.log(req.body)
        ? req.body.nombre.toUpperCase()
        : ''
        const estadoEquipoBD = await Estado.findOne({nombre})
        if(estadoEquipoBD){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre
        }
        const estado = new Estado(data)
        //console.log(tipoEquipo)
        await estado.save()
        return res.status(201).json(estado)
    }catch(e){
        return res.status(500).json({
            msg: e
        })
    }

}

/**
 * Edición
 */

/**
 * Listar todos
 */
const getEstadoEquipo = async (req = request, 
    res = response) => {
    try{
        const { estado } = req.query;

        const estadoEquiposDB = await Estado.find({estado})
        //select * from tipoequipo where estado = ?;
        return res.json(estadoEquiposDB)
    }catch(e){
        return res.status(500).json({
            msg: e
        }) 
    }
}

module.exports = {createEstadoEquipo, getEstadoEquipo}