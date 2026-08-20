import {Router} from "express";
import { projectStart } from "../controllers/projectStart.controller.js";

const router = Router();

router.get("/",projectStart);

export default router;