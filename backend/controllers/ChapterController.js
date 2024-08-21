import Chapter from "../models/ChapterModel.js";

    export const getChapter = async(req, res) =>{
        try {
            const response = await Chapter.findAll();
            res.status(200).json(response);
        } catch (error) {
            console.log(error.message);

        }
    }

    export const createChapter = async(req, res) => {
        try {
            const {title, story_id, content, last_updated} = req.body;
            const newChapter = await Chapter.create({title, story_id, content, last_updated});
            res.status(201).json(newChapter);
        } catch (error) {
            console.log(error.message);
        }
    }

    export const updateChapter = async(req, res) => {
        try {
            const {title, story_id, content, last_updated} = req.body;
            await Chapter.update({title, story_id, content, last_updated}, {
                where:{
                    id: req.params.id
                }
            });
            res.status(200).json({msg: "Chapter updated successfully"});
        } catch (error) {
            console.log(error.message);
        }
    }

    export const deleteChapter = async(req, res) => {
        try {
            await Chapter.destroy( {
                where:{
                    id: req.params.id
                }
            });
            res.status(200).json({msg: "Chapter deleted successfully"});
        } catch (error) {
            console.log(error.message);
        }
    }