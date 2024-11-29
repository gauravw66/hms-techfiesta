const express = require("express");
const dotenv = require("dotenv");
const connectToDatabase = require("./connection")
const User = require("./models/User");


// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectToDatabase().then(()=>{
  console.log("Database connection estd");
}).catch((err)=>{
  console.error("Database connection error: ", err);
});

// Define a simple route
app.get("/", (req, res) => {
  res.send("welcome to jgmsa!");
});

//creating a new object
app.post("/users",async(req,res)=>{
  try{
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send(newUser);
  }catch(error){
    res.status(400).send(error);
  }
});

//getting all docs from collection
app.get("/users",async(req,res)=>{
  try{
    const users = await User.find();
    res.status(200).send(users);
  }catch(error){
    res.status(500).send(error);
  }
});

//get user by id
app.get("/users/:patient_id",async(req,res)=>{
  try{
    
    const user = await User.findOne({patient_id:req.params.patient_id});
    if(!user){
      return res.status(404).json({error:"User not found"});
    }
    res.status(200).send(user);
  }catch(err){
    res.status(500).send(err);
  }
});

//update user by id
app.patch("/users/:patient_id",async(req,res)=>{
  try{
    const UpdateUser = await User.findOneAndUpdate(
      {patient_id:req.params.id},
      req.body,
      {new:true}

    );
    if(!UpdateUser){
      res.status(404).send("User not found");
    } 
    res.status(200).send(UpdateUser);
  }catch(errr){
    res.status(400).send(errr);
  }
});

//delete a user by patient_id
app.delete("/users/:patient_id",async(req,res)=>{
  try{
    const DelUser = await User.findByAndDelete(
      {patient_id:req.params.patient_id}
    );
    if(!DelUser){
      res.status(404).send("User not found");
    }
    res.status(200).send("User deleted");
  }catch(err){
    res.status(500).send(err);
  }
});

// Start the server
const PORT = process.env.PORT;
console.log(PORT);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
