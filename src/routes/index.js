const express = require('express')
const user_routes = require('./user.routes')

const app_routes = (app) => {
    app.use('/api/v1', user_routes)
    app.get('/test', (req, res)=>{res.json('Running test')})
}

module.exports = app_routes