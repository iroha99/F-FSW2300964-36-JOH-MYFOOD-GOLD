const db = require('../db/db')
const foodModel = require('../models/foodModel')

module.exports = {

    index: async (req,res) => {
        try
        {
            const data = await foodModel.getAllFood();
            return res.json({
                status: 200,
                data:data
            })
        }
        catch (error)
        {
            return res.json({
                status: 500,
                message: error.message
            })
        }
    },

    show: async (req,res) => {
        try
        {
            const id = req.params.id
            const data = await foodModel.getFoodById(id)
    
            if(!data)
            {
                return res.json({
                    status:404,
                    message:"Data tidak ditemukan"
                })
            }
            return res.json({
                status:200,
                data:data
            })
        }
        catch (error)
        {
            return res.json({
                status:500,
                message: error.message
            })
        }
    },

    create: async (req,res) => {
        try
        {
            const {nama,harga,stok,tipe} = req.body
            await db('food').insert({
                nama:nama,
                harga:harga,
                stok:stok,
                tipe:tipe
            })
    
            return res.status(201).json({
                status:201,
                message:'Data makanan berhasil di tambahkan'
            })
        }
        catch (error)
        {
            return res.json({
                status:500,
                message: error.message
            })
        }
    },

    update: async (req,res) => {
        try
        {
            const id = req.params.id
            const {nama,harga,stok,tipe} = req.body
            
            const data = await foodModel.getFoodById(id)
    
            if(data)
            {
                await db('food').where('id', req.params.id).update({
                    nama: nama,
                    harga:harga,
                    stok:stok,
                    tipe:tipe
                })
        
                return res.json({
                    status:201,
                    message: "Berhasil di edit!"
                })
            }
    
            return res.json({
                status:404,
                message: "Data tidak di temukan"
            })
        }
        catch (error)
        {
            return res.json({
                status:500,
                message: error.message
            })
        }
    },

    delete: async (req,res) => {
        try
        {
            const id = req.params.id
            const data = await foodModel.getFoodById(id)
    
            if(data)
            {
                await db('food').where('id',id).delete().returning('id')
                return res.json({
                    status:201,
                    message: "Berhasil menghapus data!"
                })
            }
    
            return res.json({
                status : 404 ,
                message: "Data tidak di temukan"
            })
        }
        catch (error)
        {
            return res.json({
                status : 500 ,
                message: error.message
            })
        }
    }

}