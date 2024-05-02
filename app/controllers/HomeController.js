function index(req, res) {
    res.send({
        msg: "Hello....!",
        date: [
            {
                title: 'Home Page',
                des: 'This is Home Page Response'
            }
        ]
    })
}


module.exports = {
    index
}