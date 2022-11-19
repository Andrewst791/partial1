// const express = require('express')
const user_routes = require('./user.routes')
// const project_routes = express.Router()

const app_routes = (app) => {
    app.use('/api/v1/users', user_routes)
    // project_routes.use('/users', user_routes)
}

module.exports = app_routes