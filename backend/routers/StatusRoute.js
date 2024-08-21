import express from "express";
import {
    getStatus,
    createStatus,
    updateStatus,
    deleteStatus
} from "../controllers/StatusController.js";

const router = express.Router();

router.get('/story_management/addStatus', getStatus);

router.post('/story_management/addStatus', createStatus);

router.put('/story_management/editStatus/:id', updateStatus);

router.delete('/story_management/deleteStatus/:id', deleteStatus);

export default router;
