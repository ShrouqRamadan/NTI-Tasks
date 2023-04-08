const express = require("express")
const path = require("path")
const hbs = require("hbs")
const app = express()
const myStaticDir = path.join(__dirname , "../resource/public" )
const myViewsDir = path.join(__dirname , "../resource/views" )
const myPartialDir = path.join(__dirname , "../resource/layouts")
app.use(express.static(myStaticDir))
app.set("view engine" ,"hbs")
app.set("views" ,myViewsDir)
hbs.registerPartials(myPartialDir)
 app.use(express.urlencoded({extended:true}))
const userRoutes =require("./routes/user.routes")
app.use(userRoutes)
app.all("*",(req,res)=>{
    res.render("errorPage",
    {pageTitle:"Error in Page"}
    )
})
module.exports= app;