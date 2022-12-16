const Workout=require("../models/workoutModel")


// get all data
const getWorkouts=async(req,res)=>{
    try{
        const workoutData=await Workout.find().sort({createdAt:-1})
        res.status(200).json(workoutData)

    }catch(err){
        res.status(400).json({err:err.message})
    }
}

// get single data
const getWorkout=async(req,res)=>{
    try{
        const id=req.params.id
        const workoutData=await Workout.findById({_id:id})
        res.status(200).json(workoutData)

    }catch(err){
        res.status(400).json({err:err.message})
    }
    
}


//create record
const createWorkout=async(req,res)=>{
    try{
        const newWorkout=new Workout(req.body)
        const workout=await newWorkout.save()
        res.status(201).json(workout)
    }catch(err){
        res.status(400).json({err:err.message})
    }
}

// update data
const editWorkout=async(req,res)=>{
    try{
        const id=req.params.id
    const workoutData=await Workout.findByIdAndUpdate({_id:id},req.body,{new:true})
    res.status(200).json(workoutData)

    }catch(err){
        res.status(400).json({err:err.message})
        
    }
}

// delete data
const deleteWorkout=async(req,res)=>{
    try{
        const id=req.params.id
    const workoutData=await Workout.findByIdAndDelete({_id:id})
    res.status(200).json(workoutData)

    }catch(err){
        res.status(400).json({err:err.message})
    }
}


module.exports={
    getWorkouts,
    getWorkout,
    createWorkout,
    editWorkout,
    deleteWorkout

}