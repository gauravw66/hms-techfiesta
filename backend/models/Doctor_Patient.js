const mongoose = require("mongoose");

//diagnosis,treatmentDate,patient_id,doc_id
const PatDocSchema = new mongoose.Schema(
    {
        "Diagnosis":{
            type:String,
            required:true
        },
        "Treatment date":{
            type:Date,
            required:true
        },
        patient_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        doctor_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Doctor",
            required:true
        }

    },
    {timestamps:true}
);


PatDocSchema.index({patient_id:1,doctor_id:1},{unique:true});
const Doctor_Patient = mongoose.model("Doctor_Patient",PatDocSchema,"Doctor_Patient");

module.exports = Doctor_Patient;
