import express from "express";
import {
    getStory_Management,
    createStory_Management,
    updateStory_Management,
    deleteStory_Management
} from "../controllers/StoryManagementController.js";

const router = express.Router();

router.get('/story_management/addStory_Management', getStory_Management);

router.post('/story_management/addStory_Management', createStory_Management);

router.put('/story_management/editStory_Management/:id', updateStory_Management);

router.delete('/story_management/deleteStory_Management/:id', deleteStory_Management);

export default router;
