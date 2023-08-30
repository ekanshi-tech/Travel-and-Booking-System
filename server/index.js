import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/users.js"

const app = express();
app.use(express.json({linit:"30mb", extended:true}))
app.use(express.urlencoded({linit:"30mb", extended:true}))
app.use(cors());

app.get('/',(req,res)=>{
    res.send("this is tour and travel backend;")
})

app.use('/user',userRoutes);

const PORT=process.env.PORT || 8800


const CONNECTION_URL="mongodb+srv://ekanshi:ekanshi@tour-and-travel.evhyolj.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> app.listen(PORT,()=>{console.log(`server running on port ${PORT}`)}))
.catch((err) => console.log(err.message))