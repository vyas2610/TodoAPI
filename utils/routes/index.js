const ToDoController = require('./../../app/controllers/ToDoController')
function routes(app) {
    app.get('/todos', ToDoController.index) //get method for get data from server
    app.post('/todos', ToDoController.create) //post method for add new data into DB from server
    app.put("/todos/:id", ToDoController.update) // put for update
    app.delete("/todos/:id", ToDoController.destory) // delete for delete
    app.get("/todos/:id", ToDoController.details) // get for details Id Wise...!
}

module.exports = routes;