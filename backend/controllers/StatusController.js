import Status from "../models/StatusModel.js";

    export const getStatus = async(req, res) =>{
        try {
            const response = await Status.findAll();
            res.status(200).json(response);
        } catch (error) {
            console.log(error.message);

        }
    }

    export const createStatus = async(req, res) => {
        try {
            const {name} = req.body;
            const newStatus = await Status.create({name});
            res.status(201).json(newStatus);
        } catch (error) {
            console.log(error.message);
        }
    }

    export const updateStatus = async(req, res) => {
        try {
            const {name} = req.body;
            await Status.update({name}, {
                where:{
                    id: req.params.id
                }
            });
            res.status(200).json({msg: "Story Management updated successfully"});
        } catch (error) {
            console.log(error.message);
    }
}

export const deleteStatus = async(req, res) => {
    try {
        await Status.destroy( {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Status deleted successfully"});
    } catch (error) {
        console.log(error.message);
    }
}