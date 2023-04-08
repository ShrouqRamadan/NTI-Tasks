const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/ntis10")
const User = mongoose.model("User",{
    name:{
        type:String
    },
    age:{
        type:Number
    },
    email:{
        type:String
    },
})

const myData =new User({name:"shrouq",age:25,email:"shrouq@gmail.com"})
myData.save().then(res=>console.log(res)).catch(e=>console.log(e))