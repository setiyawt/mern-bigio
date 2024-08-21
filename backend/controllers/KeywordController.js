import Keyword from "../models/KeywordModel.js";

    export const getKeyword = async(req, res) =>{
        try {
            const response = await Keyword.findAll();
            res.status(200).json(response);
        } catch (error) {
            console.log(error.message);

        }
    }

    export const createKeyword = async(req, res) => {
        try {
            const {name, story_id} = req.body;
            const newKeyword = await Keyword.create({name, story_id});
            res.status(201).json(newKeyword);
        } catch (error) {
            console.log(error.message);
        }
    }

    export const updateKeyword = async(req, res) => {
        try {
            const {name, story_id} = req.body;
            await Keyword.update({name, story_id}, {
                where:{
                    id: req.params.id
                }
            });
            res.status(200).json({msg: "Keyword updated successfully"});
        } catch (error) {
            console.log(error.message);
    }
}

export const deleteKeyword = async(req, res) => {
    try {
        await Keyword.destroy( {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Keyword deleted successfully"});
    } catch (error) {
        console.log(error.message);
    }
}