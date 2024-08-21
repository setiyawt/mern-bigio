import express from "express";
import multer from "multer";
import path from "path";
import {
    getStory,
    createStory,
    updateStory,
    deleteStory
} from "../controllers/StoryController.js";

const router = express.Router();

// Konfigurasi penyimpanan multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Direktori tempat gambar disimpan
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Menyimpan dengan nama unik
    }
});

const upload = multer({ storage: storage });

router.get('/story_management/addstory', getStory);

router.post('/story_management/addstory', upload.single('cover_image'), createStory);

router.put('/story_management/editstory/:id', updateStory);

router.delete('/story_management/deletestory/:id', deleteStory);

export default router;
