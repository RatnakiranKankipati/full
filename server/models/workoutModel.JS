const mongoose=require("mongoose")

const workoutSchema=mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    reps:{
        type:Number,
        require:true,
    },
    load:{
        type:Number,
        require:true,
    },
},{timestamps:true})
const workout=new mongoose.model("workout",workoutSchema)

module.exports=workout