import express from "express";
import {
    getChapter,
    createChapter,
    updateChapter,
    deleteChapter
} from "../controllers/ChapterController.js";

const router = express.Router();

router.get('/story_management/addChapter', getChapter);

router.post('/story_management/addChapter', createChapter);

router.put('/story_management/editChapter/:id', updateChapter);

router.delete('/story_management/deleteChapter/:id', deleteChapter);

export default router;
