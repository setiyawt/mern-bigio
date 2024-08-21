import Story_Management from "../models/StoryManagementModel.js";

    export const getStory_Management = async(req, res) =>{
        try {
            const response = await Story_Management.findAll();
            res.status(200).json(response);
        } catch (error) {
            console.log(error.message);

        }
    }

    export const createStory_Management = async(req, res) => {
        try {
            const {search_term} = req.body;
            const newStory_Management = await Story_Management.create({search_term});
            res.status(201).json(newStory_Management);
        } catch (error) {
            console.log(error.message);
        }
    }

    export const updateStory_Management = async(req, res) => {
        try {
            const {search_term} = req.body;
            await Story_Management.update({search_term}, {
                where:{
                    id: req.params.id
                }
            });
            res.status(200).json({msg: "Story Management updated successfully"});
        } catch (error) {
            console.log(error.message);
    }
}

export const deleteStory_Management = async(req, res) => {
    try {
        await Story_Management.destroy( {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Story_Management deleted successfully"});
    } catch (error) {
        console.log(error.message);
    }
}