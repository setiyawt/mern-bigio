import express from "express";
import {
    getCategories,
    createCategories,
    updateCategories,
    deleteCategories
} from "../controllers/CategoryController.js";

const router = express.Router();

router.get('/story_management/addCategory', getCategories);

router.post('/story_management/addCategory', createCategories);

router.put('/story_management/editCategory/:id', updateCategories);

router.delete('/story_management/deleteCategory/:id', deleteCategories);

export default router;
