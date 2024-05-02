const ToDoController = require('./../../app/controllers/ToDoController')
function routes(app) {
    app.get('/todos', ToDoController.index) //get method for get data from server
    app.post('/todos', ToDoController.create) //post method for add new data into DB from server

}

module.exports = routes;