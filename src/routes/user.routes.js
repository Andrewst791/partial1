const express = require('express')
const user_model = require('../models/user.model')
const user_routes = express.Router()

user_routes.post('/user', (req, res)=>{
    const user_new = user_model(req.body)
    user_new
        .save()
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
})
user_routes.get('/', (req, res)=>{
    user_model
        .find()
        .then(data=>res.json(data))
        .catch(error=>res.json({mensaje:error}))
})
user_routes.get('/:user_id', (req, res)=>{
    const {user_id} = req.params
    user_model
        .findById(user_id)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))
})
user_routes.put('/:user_id', (req, res)=>{
    const {user_id} = req.params
    const{user_name, last_name, age, document, email, address, pets} = req.body
    user_model
        .updateOne({ _id: user_id },{$set:{user_name, last_name, age, document, email, address, pets}})
        .then(data=>res.json(data))
        .catch(error=>res.json({message:error}))
})
user_routes.delete('/:user_id', (req, res)=>{
    const {user_id} = req.params
    user_model
        .deleteOne({ _id: user_id })
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))
})

module.exports = user_routes