const deal =require("../helper/dealWithJson")
const fileName="models/user.json"
class User {
    static all=(req,res)=>{
        const allUsers =deal.readJsonData(fileName)
        res.render("all" ,{
            pageTitle:"all Data",
            allUsers
        })
    //    res.send(allUsers) 
    }
    static edit =(req,res)=>{
        res.render("edit" ,{
            pageTitle:"edit Data"
        })
    }
    static single =(req,res)=>{
      
        const id =req.params.id
        const allUsers = deal.readJsonData(fileName)
        const user =allUsers.find(u=>u.id==id)
        res.render("single" ,{
            pageTitle:"single Data",
            user
        })
    }
    static del =(req,res)=>{
        res.send("delete")
    }
    static delAll=(req,res)=>{
        res.send("del all")
    } 

    static add =(req,res)=>{
        res.render("add" ,{
            pageTitle:"add Data"
        })
    }
     static addLogic =(req,res)=>{
    const allUsers =deal.readJsonData("models/users.json")
//    const newUser =req.query
//    newUser.id=Date.now()
const newUser ={id:Date.now(),...req.query}
//    res.send(newUser)
allUsers.push(newUser)
deal.writeJsonData("models/user.json",allUsers)
res.redirect("/")
    }
}

module.exports = User