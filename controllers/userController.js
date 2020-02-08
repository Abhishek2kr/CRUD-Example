const userService = require('../services/userService');

fetchUserController = async (req,res) => {
    const result = await userService.fetchUser(req.body);
    // console.log("dfafsaffd:::::::::::::::::::::",result)
    res.json(result);
}

fetchPostsController = async (req,res) => {
    const result = await userService.fetchPosts(req.body);
    console.log("dfafsaffd:::::::::::::::::::::",result)
    res.json(result);
}
fetchCommentsController = async (req,res) => {
    const result = await userService.fetchComments(req.body);
    console.log("dfafsaffd:::::::::::::::::::::",result)
    res.json(result);
}
module.exports= {
    fetchUserController,
    fetchPostsController,
    fetchCommentsController
}