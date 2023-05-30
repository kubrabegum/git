import express from "express";
import config from "config"
const app=express();
const port=config.get("PORT");
app.use(express.json())

app.get("/",(req,res)=>{
res.status(200).json({sucess:"completed"})
})


app.listen(port,()=>{
    console.log("server is up ",port )
})
