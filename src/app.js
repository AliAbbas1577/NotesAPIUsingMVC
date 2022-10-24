const express=require("express")
const app=express()
const quotes=require("./quotes.json")
const userRouter=require("./routes/userRoutes")
const notesRouter=require("./routes/notesRoutes")
app.use(express.json())
app.use("/users",userRouter)
app.use("/notes",notesRouter)

const mongoose=require("mongoose")
//hide on further by creating config file
mongoose.connect("mongodb+srv://admin:admin@cluster0.u0bcdps.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    app.listen(5000,()=>{
        console.log("Server start on port 5000")
    })
})
.catch((err)=>{
    console.log(err)
})

// app.get("/",(req,res)=>{
//     console.log(req)
//     res.send("default")
// })
// app.get("/quotes",(req,res)=>{
//     res.status(200).json(quotes[0])
// })
// app.get("/random",(req,res)=>{
//     let index=Math.floor(Math.random()*quotes.length)
//     let quote=quotes[index]
//     res.status(200).json(quote)
// })


//max call's therefore routers needed



