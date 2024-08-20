import Story from "../models/StoryModel.js";

export const getStory = async(req, res) =>{
    try {
        const response = await Story.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        
    }
}

export const createStory = async(req, res) => {
    try {
        const {title, writer, synopsis, category, cover_image, status} = req.body;
        const newStory = await Story.create({title, writer, synopsis, category, cover_image, status});
        res.status(201).json(newStory);
    } catch (error) {
        console.log(error.message);
    }
}

export const updateStory = async(req, res) => {
    try {
        const {title, writer, synopsis, category, cover_image, status} = req.body;
        await Story.update({title, writer, synopsis, category, cover_image, status}, {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Story updated successfully"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteStory = async(req, res) => {
    try {
        await Story.destroy( {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Story deleted successfully"});
    } catch (error) {
        console.log(error.message);
    }
}