const express=require("express")
const app=express()

const notesRouter=express.Router()

notesRouter.get("/",(req,res)=>{
    res.send("get all notes")
})

notesRouter.post("/post",(req,res)=>{
    res.send("post all notes")
})
module.exports=notesRouter