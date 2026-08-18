import express from "express";
import {type Request,type Response,type NextFunction} from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use((req,res,next)=>{
    console.log("middleware running");
    next();
})

app.get("/users",(req, res) => {
    console.log("Users get ",req.query);
  res.send("Users Data");
});

const checkProducts = (req : Request,res:Response,next:NextFunction) => {
    console.log("Middleware product check");
}

app.get("/products",checkProducts,(req, res) => {
  res.send("Products Data");
});

app.get("/about",(req,res)=> {
    res.send("About Page");
})

app.get("/contact",(req,res)=> {
    res.send("Contact Page");
})

app.post("/users",(req,res)=>{
    console.log("request body",req.body);
    console.log("request body",req.body);
    res.status(201).json({
        mesage:"User Created Succesfully"
    })
})

app.get("/users/:id",(req,res)=>{
    console.log("request body",req.params.id);
    res.send("User Get Here");
})

app.delete("/users/:id",(req,res)=>{
    console.log("request body",req.params.id);
    res.send("user are deleted here.");
})

export default app;
