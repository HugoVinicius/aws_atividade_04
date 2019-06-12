const express = require('express');
const router = express.Router();
const controller = require('../controllers/produtoController')

router.get('/', controller.get);
router.post('/', controller.post);
router.get('/:id', controller.getById);
router.delete('/:id', controller.delete);
router.put('/:id', controller.put);


module.exports = router;