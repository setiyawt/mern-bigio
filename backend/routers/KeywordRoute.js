import express from "express";
import {
    getKeyword,
    createKeyword,
    updateKeyword,
    deleteKeyword
} from "../controllers/KeywordController.js";

const router = express.Router();

router.get('/story_management/addKeyword', getKeyword);

router.post('/story_management/addKeyword', createKeyword);

router.put('/story_management/editKeyword/:id', updateKeyword);

router.delete('/story_management/deleteKeyword/:id', deleteKeyword);

export default router;
