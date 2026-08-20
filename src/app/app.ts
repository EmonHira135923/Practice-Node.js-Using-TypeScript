import express from "express";
import itemRouter from "../routes/iteam.routes.js";
import projectStart from "../routes/projectStart.routes.js";

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use("/",projectStart);
app.use("/api",itemRouter);


export default app;