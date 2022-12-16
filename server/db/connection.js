const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/project")
.then(()=>{
    console.log("connection is estibilished");
})
.catch((err)=>{
    console.log(`error is: ${err} `);
})