const userController = require("../controllers/userController.js")

module.exports = function(app){
    app.post("/getUsers",userController.fetchUserController);
    app.post("/getPosts",userController.fetchPostsController);
    app.post("/getComments",userController.fetchCommentsController);
}