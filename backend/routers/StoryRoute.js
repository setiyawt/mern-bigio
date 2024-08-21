import express from "express";
import multer from "multer";
import path from "path";
import {
    getStory,
    createStory,
    updateStory,
    deleteStory
} from "../backend/controllers/StoryController.js";

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

// Route untuk mendapatkan semua cerita
router.get('/story_management/addstory', getStory);

// Route untuk menambahkan cerita dengan gambar
router.post('/story_management/addstory', upload.single('cover_image'), createStory);

// Route untuk memperbarui cerita
router.put('/story_management/editstory/:id', updateStory);

// Route untuk menghapus cerita
router.delete('/story_management/deletestory/:id', deleteStory);

export default router;
