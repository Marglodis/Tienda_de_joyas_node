const express = require('express');
const router = express.Router();

const indexControllers = require ("../Controllers/indexControllers");

router.get("/joyas", indexControllers.getJoyas)
router.get("/joyas/filtros", indexControllers.getFiltros)

module.exports = router;