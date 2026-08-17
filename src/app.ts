import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/users", (req, res) => {
    console.log("Users get ",req.query);
  res.send("Users Data");
});

app.get("/products", (req, res) => {
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
    res.send("Users Created");
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
