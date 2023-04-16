const { Router } = require('express')
const { createTipoEquipo, getTipoEquipos, updateTipoEquipoByID} = require('../controllers/TipoEquipos')

const router = Router()

// crear
router.post('/', createTipoEquipo)

// editar
router.put('/:id', updateTipoEquipoByID)

// listar
router.get('/', getTipoEquipos)

module.exports = router