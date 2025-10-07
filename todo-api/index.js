import express from "express";

const app = express();
app.use(express.json());

// Dummy Data
let title =[
    {id :1, title :"Belajar Node.js",  done : false },
    {id :2, title :"Belajar Express.js", done : true }
]

//Get
app.get("/todos", (req,res) => {
    res.json(title);
})


//Post
app.get("/todos", (req,res) => {
    const { title } = req.body;
    const newTitle = {id:users.length + 1,name:title};
    title.push(newUser);
    res.status(201).json(newTitle);
})


app.listen(5001, () => console.log
("Server runing on http://localhost:5001"));



