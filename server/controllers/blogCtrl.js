const { uploadImageToCloudinary } = require("../config/imageUploader");
const blogModel = require("../models/blogModel")

const createBlogsCtrl = async (req, res) => {
    try {
        const { title, desc } = req.body;
        const image = req.files.image;

        if (!title || !desc || !image) {
            return res.status(400).json({
                success: false,
                message: "Please provide all fields"
            })
        }
        const thumnailImage = await uploadImageToCloudinary(image, process.env.FOLDER_NAME)

        const blog = await blogModel.create({
            title,
            desc,
            image: thumnailImage.secure_url
        })

        return res.status(201).json({
            success: true,
            message: "Blog created successfully!",
            blog
        })

    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Error in create blog api!"
        })
    }
}


const getAllBlogsCtrl = async (req, res) => {
    try {

        const blogs = await blogModel.find({});
        if (!blogs) {
            return res.status(400).json({
                success: false,
                message: "No blog found"
            })
        }
        return res.status(200).json({
            success: true,
            totalBlogs: blogs.length,
            blogs
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Error in getting blog api!"
        })
    }
}
const getSingleBlogsCtrl = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await blogModel.findById(id);
        if (!blog) {
            return res.status(400).json({
                success: false,
                message: "No blog found"
            })
        }
        return res.status(200).json({
            success: true,

            blog
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Error in getting single  blog api!"
        })
    }
}
const deleteBlogCtrl = async (req, res) => {
    try {
        const { id } = req.params;
        await blogModel.findByIdAndDelete(id);
        return res.status(200).json({
            success: true,
            message: "Blog delete successfully!"
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Error in deleting blog api!"
        })
    }
}
module.exports = { createBlogsCtrl, getAllBlogsCtrl, deleteBlogCtrl, getSingleBlogsCtrl };