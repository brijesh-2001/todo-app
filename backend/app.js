const express =require("express");
const cors=require("cors");
const app=express();
require("./connection/conn");
const path=require("path");
const auth=require("./routes/auth");
const list = require("./routes/list");

app.get("/", (req,res)=>{
    res.send("hello");
});

app.use(express.json());
app.use(cors());


app.use("/api/v1",auth);
app.use("/api/v2",list);

// app.get("/",(req,res)=>{
//     app.use(express.static(path.resolve(__dirname,"frontend","build")));
//     app.sendFile(path.resolve(__dirname,"frontend","build","index.html"));
// })
app.listen(1000,()=>{
    console.log("Server started");
});