const express = require('express')
const app = express()

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

const router = require('./routers/router')
app.use(router)

app.listen(4000, () => 
{
    console.log("Server is running on port 4000")
})