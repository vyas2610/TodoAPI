//index function for get data 

function index(req, res) {
    res.send({
        msg: 'TodoController for Get Data'
    })
}

// create function for add data 
function create(req, res) {
    try {
        res.send({
            msg: 'TodoController for Add Data',
            body: req.body
        })

    } catch (error) {
        res.status(500).send({
            error
        })
    }
}

// update function...!
function update(req, res) {
    res.send({
        msg: "Update is Calling...!",
    })
}

function destory(req, res) {
    res.send({
        msg: "Delete is calling..!"
    })

}
function details(req, res) {
    res.send({
        msg: "Details is calling...!"
    })
}
module.exports = {
    index,
    create,
    update,
    destory,
    details,
}