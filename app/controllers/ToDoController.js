const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

BigInt.prototype.toJSON = function () {
    const int = Number.parseInt(this.toString());
    return int ?? this.toString();
};

//index function for get data 

async function index(req, res) {
    try {
        let response = await prisma.tasks.findMany()

        res.send({
            response
        })
    } catch (error) {
        res.status(500).send({
            error
        })
    }
}

// create function for add data 
async function create(req, res) {
    try {
        let body = req.body;
        await prisma.tasks.create({
            data: {

                "task_name": body.task_name,
                "task_desc": body.task_desc,
            }

        })
        res.send({
            msg: 'Data Added Successfully...!',
        })

    } catch (error) {
        res.status(500).send({
            error
        })
    }
}

// update function...!
async function update(req, res) {
    try {
        await prisma.tasks.update({
            data: req.body,
            where: {
                id: req.params.id
            }
        })
        res.send({
            msg: "Update is Calling...!",
        })

    } catch (error) {
        res.status(500).send({
            error
        })
    }
}

async function destory(req, res) {
    try {
        await prisma.tasks.delete({
            where: {
                id: req.params.id
            }
        })
        res.send({
            msg: "Delete is calling..!"
        })

    } catch (error) {
        res.status(500).send({
            error
        })
    }

}
async function details(req, res) {
    try {
        let response = await prisma.tasks.findFirst({
            where: {
                id: req.params.id
            }
        })
        res.send({
            response
        })
    } catch (error) {
        res.status(500).send({
            error
        })
    }
}
module.exports = {
    index,
    create,
    update,
    destory,
    details,
}