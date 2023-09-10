const foodController = require('../controllers/foodController')
const router = require('express').Router()

router.get('/api/foods', foodController.index)
router.get('/api/foods/:id', foodController.show)
router.post('/api/foods', foodController.create)
router.put('/api/foods/:id', foodController.update)
router.delete('/api/foods/:id', foodController.delete)


module.exports = router