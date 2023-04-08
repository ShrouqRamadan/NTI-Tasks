const conecctdb = require("../models/dbConnect")
const deal = require("../helper/dealWithJson")
const fileName = "models/user.json"
class User {
    static all = (req, res) => {
        try {
            conecctdb(async (db) => {
                const allUsers = await db.collection("users").find().toArray()

                res.render("all", {
                    pageTitle: "All Data",
                    allUsers,
                    hasData: allUsers.length

                })
            })
        }
        catch (e) {
            res.send(e)
        }
        res.redirect("/")

    }
    static edit = (req, res) => {
        const id = req.params.id
        const allUsers = deal.readJsonData(fileName)
        const user = allUsers.find(u => u.id == id)
        res.render("edit", {
            pageTitle: "Edit Data",
            user
        })
    }
    static editLogic = (req, res) => {
        const id = req.params.id
        const allUsers = deal.readJsonData(fileName)
        const index = allUsers.findIndex(u => u.id == id)
        allUsers[index] = { id, ...req.query }
        deal.writeJsonData(fileName, allUsers)
        res.redirect(`/single/${id}`)
    }

    static addPost = (req, res) => {
        res.render("addPost", {
            pageTitle: "All Data"
        })
    }
    static addPostLogic = (req, res) => {
        try {
            conecctdb(async (db) => {
                await db.collection("users").
                    insertOne(req.body)
                res.redirect("/")
            })
        }
        catch (e) {
            res.send(e)
        }
        res.redirect("/")
    }





    static single = (req, res) => {

    const id = req.params.id
    const allUsers = deal.readJsonData(fileName)
    const user = allUsers.find(u => u.id == id)
    res.render("single", {
        pageTitle: "single Data",
        user
    })
}
    static del = (req, res) => {
    // res.send("delete")
    let allUsers = deal.readJsonData(fileName)
    const id = req.params.id
    allUsers = allUsers.filter(u => u.id != id)
    deal.writeJsonData(fileName, allUsers)
    res.redirect("/")
}
    static delAll = (req, res) => {
    // res.send("del all")
    deal.writeJsonData(fileName, [])
    res.redirect("/")
} 

    static add = (req, res) => {
    res.render("add", {
        pageTitle: "add Data"
    })
}


     static addLogic = async (req, res) => {
    try {
        conecctdb(async (db) => {
            await db.collection("users").
                insertOne(req.query)
            res.redirect("/")
        })
    }
    catch (e) {
        res.send(e)
    }
    res.redirect("/")
}
}

module.exports = User