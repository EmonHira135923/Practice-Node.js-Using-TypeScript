import {Router} from "express";
import { createItems, deleteProduct, getItems, getItemsUsingID, updateProduct } from "../controllers/iteam.controller.js";

const router = Router();

router.get("/items",getItems);
router.post("/items/add",createItems);
router.get("/items/:id",getItemsUsingID);
router.put("/items/:id",updateProduct);
router.delete("/items/:id",deleteProduct);

export default router;