const express=require("express")
const workout=require("../models/workoutModel")
const router=express.Router()

// require controller
const {getWorkouts,
    getWorkout,
    createWorkout,
    editWorkout,
    deleteWorkout
}=require("../controllers/workoutController")


//get enitire records
router.get("/",getWorkouts)

// get single records
router.get("/:id",getWorkout)


// create record
router.post("/",createWorkout)


//update record
router.patch("/:id",editWorkout)

// delete record
router.delete("/:id",deleteWorkout)

module.exports=router