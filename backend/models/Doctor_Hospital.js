const mongoose = require("mongoose");

//doc_id,hosp_id
const DocHospSchema = new mongoose.Schema(
    {
        doctor_id:{
            type: mongoose.Schema.Types.ObjectId, 
            ref:"Doctor",
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

DocHospSchema.index({doctor_id:1,hospital_id:1},{unique:true});
const Doctor_hospital = mongoose.model("Doctor_Hospital",DocHospSchema,"Doctor_hospital");

module.exports = Doctor_hospital; 