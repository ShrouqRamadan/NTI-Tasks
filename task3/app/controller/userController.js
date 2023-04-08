const deal =require("../helper/dealWithJson")
const fileName="models/user.json"
class User {
    static all=(req,res)=>{
        const allUsers =deal.readJsonData(fileName)
        res.render("all" ,{
            pageTitle:"all Data",
            allUsers,
            hasData:allUsers.length
        })
    //    res.send(allUsers) 
    }
    static edit =(req,res)=>{
        const id =req.params.id
        const allUsers = deal.readJsonData(fileName)
        const user =allUsers.find(u=>u.id==id)
        res.render("edit" ,{
            pageTitle:"Edit Data",
            user
        })
    }
    static editLogic =(req,res)=>{
        const id =req.params.id
        const allUsers = deal.readJsonData(fileName)
        const index =allUsers.findIndex(u=>u.id==id)
       allUsers[index]={id,...req.query}
       deal.writeJsonData(fileName,allUsers)
       res.redirect(`/single/${id}`)
    }

    static addPost =(req,res)=>{
     res.render("addPost",{
    pageTitle:"All Data"
     })
    }
    static addPostLogic =(req,res)=>{
       const allUsers =deal.readJsonData("models/users.json")
const newUser ={id:Date.now(),...req.body}
//    res.send(newUser)
allUsers.push(newUser)
deal.writeJsonData("models/user.json",allUsers)
res.redirect("/")
    
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
        // res.send("delete")
        let allUsers =deal.readJsonData(fileName)
        const id =req.params.id
        allUsers=allUsers.filter(u=>u.id !=id)
        deal.writeJsonData(fileName,allUsers)
        res.redirect("/")
    }
    static delAll=(req,res)=>{
        // res.send("del all")
        deal.writeJsonData(fileName,[])
        res.redirect("/")
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