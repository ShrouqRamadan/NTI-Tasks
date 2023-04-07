const userController =require("../controller/userController")
const router =require("express").Router()
router.get("/" ,userController.all)
router.get("/add" , userController.add)
router.get("/single/:id" ,userController.single)
router.get("/edit" ,userController.edit)
router.get("/addLogic", userController.addLogic )
router.get("/del" ,userController.del)
router.get("/delAll" ,userController.delAll)
module.exports=router
