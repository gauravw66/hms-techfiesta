const mongoose = require("mongoose");

//admission_Date,release_Date,patient_id,hosp_id
const PatHospSchema = new mongoose.Schema(
    {
        "Admission date":{
            type:Date,
            required:true
        },
        "Release date":{
            type:Date,
            required:true
        },
        patient_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        hospital_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Hospital",
            required:true
        }

    },
    {timestamps:true}
);

PatHospSchema.index({patient_id:1,hospital_id:1},{unique:true});
const Hospital_Patient = mongoose.model("Hospital_Patient",PatHospSchema,"Hospital_Patient");

module.exports = Hospital_Patient;
