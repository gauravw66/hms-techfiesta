const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        patient_id:{
            type:Number,
            required:true
        },
        "patient name":{
            type:String, 
            required:true
        },
        "Date of birth":{
            type:Date,
            required: true
        },
        "Sex":{
            type:String,
            required:true
        },
        "Aadhar/PAN":{
            type:String,
            required:true
        },
        "Address":{
            type:String
        },
        "Email":{
            type:String,
            required:true
        },
        "Medical history":[
            {
                filename:{
                    type:String,
                    required:true
                },
                content:{
                    type:String,
                    required:true
                },
                data:{
                    type:Buffer,
                    required:true
                }
            
            }
        ],
        "Emergency contact":{
            "Emergency contact name":{
                type:String,
                required: true
            },
            "Emergency contact number":{
                type:String,
                required:true
            }
        },
    },
    
    {timestamps:true}
    
);

const User = mongoose.model("User",userSchema,"Patient");
module.exports = User;
