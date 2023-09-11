const foodController = require('../controllers/foodController')
const foodModel = require('../models/foodModel')
const router = require('express').Router()

router.get('/api/foods', foodController.index)
router.get('/api/foods/:id', foodController.show)
router.post('/api/foods', foodController.create)
router.put('/api/foods/:id', foodController.update)
router.delete('/api/foods/:id', foodController.delete)

router.get('/', async (req,res) => {
    const data = await foodModel.getAllFood();
    res.render('./pages/index', {
        data:data
    })
})

router.get('/add', (req,res) => {
    res.render('./pages/add')
})


module.exports = router