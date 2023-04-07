const express= require('express')
// const path = require('path')
 const app =express()
 const myStaticDir =path.join(__dirname,"../resources/public")
 const myViewDir =path.join(__dirname,"../resources/view")
 const myPartialDir =path.join(__dirname,"../resources/layouts")
app.set("view engin","hbs")
app.set("views",myViewDir)



 module.exports =app