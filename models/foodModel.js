const db = require('../db/db')

const getAllFood = () => {
    return db.select('*').from('food')
}

const getFoodById = (id) => {
    return db.select('*').from('food').where('id',id).first()
}

module.exports = {
    getAllFood,getFoodById  
}