const userController = require("../controller/userController")
const router = require("express").Router()
router.get("/", userController.all)
router.get("/add", userController.add)
router.get("/single/:id", userController.single)
router.get("/edit/:id", userController.edit)
router.get("/editLogic/:id", userController.editLogic)
router.get("/addLogic", userController.addLogic)
router.get("/del/:id", userController.del)
router.get("/delAll", userController.delAll)


router.get("/addPost", userController.addPost)
router.post("/addPostLogic", userController.addPostLogic)


module.exports = router
