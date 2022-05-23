const { isValidObjectId } = require("mongoose");
const PostModel  = require("../models/Posts");

const getAllPosts = async (req, res) => {
    await PostModel.find({}).then((response) => {
        res.status(200).json(response)
    }).catch((err) => 
        res.status(400).json(err)
    );
};


const createPost = async (req, res) => {
    const post = req.body;

    await PostModel.create(post).then((response) => {
        res.status(200).json(response)
    }).catch((err) => 
        res.status(400).json(err)
    );
}



const updatePost = async (req, res) => {
    const id = req.params.id
    const data = req.body[0]
    if (!isValidObjectId(id)) return res.status(404).send('No post with that id');
    await PostModel.updateOne({_id: id, data }, data).then((response) => {
        res.status(202).json(response)
    }).catch((err) => 
        res.status(400).json(err)
    );
}


const deletePost = async (req, res) => {
    const id = req.params.id
    if (!isValidObjectId(id)) return res.status(404).send('No post with that id');
    await PostModel.deleteOne({_id: id }).then((response) => {
        res.status(201).json(response)
    }).catch((err) => 
        res.status(400).json(err)
    );
}

const findPost = async (req, res) => {
    const id = req.params.id
    if (!isValidObjectId(id)) return res.status(404).send('No post with that id');
    await PostModel.find({_id: id}).then((response) => {
        res.status(200).json(response)
    }).catch((err) => 
        res.status(400).json(err)
    );
}


module.exports = {
    getAllPosts,
    createPost,
    deletePost,
    updatePost,
    findPost
};