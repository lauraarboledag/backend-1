const TipoEquipo = require("../models/TipoEquipos")
const {request, response} = require('express')

/**
 * Creación
 */
const createTipoEquipo = async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
        ? req.body.nombre.toUpperCase()
        : ''
        const tipoEquipoBD = await TipoEquipo.findOne({nombre})
        if(tipoEquipoBD){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre
        }
        const tipoEquipo = new TipoEquipo(data)
        //console.log(tipoEquipo)
        await tipoEquipo.save()
        return res.status(201).json(tipoEquipo)
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
const getTipoEquipos = async (req = request, 
    res = response) => {
    try{
        const { estado } = req.query;

        const tipoEquiposDB = await TipoEquipo.find({estado})
        //select * from tipoequipo where estado = ?;
        return res.json(tipoEquiposDB)
    }catch(e){
        return res.status(500).json({
            msg: e
        }) 
    }
}

const updateTipoEquipoByID = async (req = request,
    res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        /*const tipoequipoDB = await TipoEquipo.findById(id)
        if(!tipoequipoDB){
            return res.json({msg: 'No existe el tipo equipo'})
        }*/
        data.fechaActualizacion = new Date()
        console.log(data)
        const tipoEquipo = await TipoEquipo.findByIdAndUpdate(id, data, {new: true})
        return res.json(tipoEquipo)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})}}

module.exports = {createTipoEquipo, getTipoEquipos, updateTipoEquipoByID}