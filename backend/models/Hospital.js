const mongoose = require("mongoose")

const HospSchema = new mongoose.Schema(
    {
        hospital_id:{
            type:Number,
            required:true
        },
        "hospital name":{
            type:String, 
            required:true
        },
        "Location":{
            type:String,
            required:true
        }
        
    },
    
    {timestamps:true}
    
);

const Hosp = mongoose.model("Hospital",HospSchema,"Hospital");
module.exports = Hosp;
