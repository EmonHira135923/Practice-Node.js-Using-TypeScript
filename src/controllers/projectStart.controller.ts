import type { NextFunction, Request, Response } from "express";

export const projectStart = (req:Request,res:Response,next:NextFunction) => {
    try {
        res.send("Basic Crud Opreation Using TypeScript");
    } catch (error) {
     next(error);   
    }
}