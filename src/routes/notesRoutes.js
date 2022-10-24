const express=require("express")
const { createNote, UpdateNote, getNote, deleteNote } = require("../controllers/notesController")
const auth = require("../middleware/auth")
const app=express()

const notesRouter=express.Router()

notesRouter.get("/notes",auth,getNote)

notesRouter.post("/",auth,createNote)
notesRouter.post("/:id",auth,deleteNote)
notesRouter.put("/:id",auth,UpdateNote)


module.exports=notesRouter