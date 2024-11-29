const mongoose = require("mongoose")

const DocSchema = new mongoose.Schema(
    {
        doctor_id:{
            type:Number,
            required:true
        },
        "Doctor name":{
            type:String, 
            required:true
        },
        "Qualification":{
            type:String,
            required:true
        },
        "Specializtion":{
            type:String,
            required:true
        }
        
    },
    
    {timestamps:true}
    
);

const Doctor = mongoose.model("Doctor",HospSchema,"Doctor");
module.exports = Doctor;
