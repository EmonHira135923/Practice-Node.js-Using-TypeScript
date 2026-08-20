import type { NextFunction, Request, Response } from "express";
import { items } from "../models/iteam.models.js";

export const getItems = (req:Request,res:Response,next:NextFunction) => {
    try{
        res.json(items);
    }
    catch(err){
        next(err);
    }
}