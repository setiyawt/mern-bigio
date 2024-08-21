import Story from "../../models/StoryModel.js";

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
        const { title, writer, synopsis, category, status, last_updated } = req.body;
        const coverImagePath = req.file ? req.file.path : null; // Jika ada file upload

        await Story.create({
            title,
            writer,
            synopsis,
            category,
            cover_image: coverImagePath, // Menyimpan path gambar
            status,
            last_updated
        });

        res.status(201).send('Story created successfully.');
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
}

export const updateStory = async(req, res) => {
    try {
        const { id } = req.params;
        const { title, writer, synopsis, category, status, last_updated } = req.body;
        const coverImagePath = req.file ? req.file.path : null;

        await Story.update({
            title,
            writer,
            synopsis,
            category,
            cover_image: coverImagePath, // Update path gambar jika ada
            status,
            last_updated
        }, {
            where: { id }
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