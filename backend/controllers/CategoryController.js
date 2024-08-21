import Category from "../models/CategoryModel.js";

    export const getCategories = async(req, res) =>{
        try {
            const response = await Category.findAll();
            res.status(200).json(response);
        } catch (error) {
            console.log(error.message);

        }
    }

    export const createCategories = async(req, res) => {
        try {
            const {name, story_id} = req.body;
            const newCategory = await Category.create({name, story_id});
            res.status(201).json(newCategory);
        } catch (error) {
            console.log(error.message);
        }
    }

    export const updateCategories = async(req, res) => {
        try {
            const {name, story_id} = req.body;
            await Category.update({name, story_id}, {
                where:{
                    id: req.params.id
                }
            });
            res.status(200).json({msg: "Category updated successfully"});
        } catch (error) {
            console.log(error.message);
    }
}

export const deleteCategories = async(req, res) => {
    try {
        await Category.destroy( {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Categoriew deleted successfully"});
    } catch (error) {
        console.log(error.message);
    }
}