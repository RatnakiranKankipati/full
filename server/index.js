const express=require("express")
const cors=require("cors")
const app=express()


// port

const port=process.env.PORT||4000
// db connection
require("./db/connection")

// require routing
const workoutRoutes=require("./routes/workoutRoutes")


//middlewares
app.use(express.json())

app.use(cors())

app.get('/',(req,res)=>{
    res.send("heloo")
})

// routes

app.use("/api/workouts",workoutRoutes)

app.listen(port,()=>{
    console.log(`server is runing at port1  ${port}`);
})


