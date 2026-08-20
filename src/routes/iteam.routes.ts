import {Router} from "express";
import { createItems, getItems, getItemsUsingID, updateProduct } from "../controllers/iteam.controller.js";

const router = Router();

router.get("/items",getItems);
router.post("/items/add",createItems);
router.get("/items/:id",getItemsUsingID);
router.put("/items/:id",updateProduct);

export default router;