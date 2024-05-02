//index function for get data 

function index(req, res) {
    res.send({
        msg: 'TodoController for Get Data'
    })
}

// create function for add data 
function create(req, res) {
    res.send({
        msg: 'TodoController for Add Data',
        body: req.body
    })
}


module.exports = {
    index,
    create
}