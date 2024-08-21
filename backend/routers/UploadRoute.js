// routers/uploadRoutes.js
import express from 'express';
import upload from '../config/Upload.js'; // Pastikan menggunakan import

const router = express.Router();

// Rute untuk menangani upload file
router.post('/upload', upload.single('cover_image'), (req, res) => {
  res.send('File uploaded successfully');
});

export default router;
