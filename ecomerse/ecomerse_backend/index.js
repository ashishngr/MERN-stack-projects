const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose"); 
const dotenv = require("dotenv").config()


const app = express();
app.use(cors());
app.use(express.json({limit: "10mb"}));
// MONGODB connection 

console.log(process.env.MONGODB_URL); 
const uri = process.env.MONGODB_URL
mongoose.set("strictQuery", false)
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// USER SCHEMA 

const userSchema = mongoose.Schema({
    firstName: String, 
    lastName: String,
    email: {
       type: String, 
       unique: true 
    }, 
    password: String, 
    confirmPassword: String,
    image: String,
}); 

// User model
const userModel = mongoose.model("user", userSchema); 

// API
const PORT = process.env.PORT || 8080; 

app.get("/", (req, res)=>{
    res.send("Server is running")
}); 
app.post("/signup", (req, res)=>{
    console.log(req.body)
    const {email} = req.body; 
    console.log(email)
    userModel.findOne({ email: email })
    .then(result => {
      if (result) {
        console.log('Email exists in the database.');
        res.send({ message: "Email id is already register", alert: false });
      } else {
        const data = userModel(req.body);
        console.log("data=>", data);
        const save = data.save();
        console.log("save-", save)
        res.send({ message: "Successfully sign up", alert: true });
      }
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
})
// Login
app.post("/login", (req, res)=>{
  console.log(req.body); 
  const {email} = req.body; 
  userModel.findOne({email: email})
  .then((result)=>{
    if(result){
      const dataSend = {
        _id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        image: result.image
      }
      console.log("data send", dataSend)
      res.send({message: "Login successly", alert: true, data: dataSend})
    }else{
      res.send({message: "Email id is not available, Please signup", alert: false})
    }
  })
}); 


// Product section 

const schemaProduct = mongoose.Schema({
  name: String, 
  category: String, 
  image: String, 
  price: String, 
  description: String
}); 
const productModel = mongoose.model("product", schemaProduct); 


// upload product in database

app.post("/uploadProduct", async (req, res) => {
  console.log(req.body);
  const data = await productModel(req.body);
  const dataSave = await data.save(); 
  res.send({message: "upload successfully"}); 
})



app.listen(PORT,()=> console.log("Server is running on port:" + PORT))