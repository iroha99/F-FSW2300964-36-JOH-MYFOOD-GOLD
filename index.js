const express = require('express')
const app = express()
const db = require('./db/db')
const foodModel = require('./models/foodModel')
const foodController = require('./controllers/foodController')

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded())

const router = require('./routers/router')
app.use(router)


app.get('/', async (req,res) => {
    const data = await foodModel.getAllFood();
    res.render('./pages/index', {
        data:data
    })
})

app.get('/add', (req,res) => {
    res.render('./pages/add')
})

app.listen(4000, () => 
{
    console.log("Server is running on port 4000")
})