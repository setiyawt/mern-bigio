import express from "express";
import {
    getStory,
    createStory,
    updateStory,
    deleteStory,

} from "../controllers/StoryController.js";

const router = express.Router();

router.get('/story_management/addstory', getStory);
router.post('/story_management/addstory', createStory);
router.put('/story_management/editstory/:id', updateStory);
router.delete('/story_management/deletestory/:id', deleteStory);

export default router;