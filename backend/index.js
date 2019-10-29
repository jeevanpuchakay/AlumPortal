const express=require('express');

const mongoose=require('mongoose')

const cors=require('cors');

require('dotenv').config();

const app=express();


const port=process.env.PORT||5000;

app.use(cors());
app.use(express.json());

const uri=process.env.URI;

mongoose.connect(uri,{
    useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true
})


const connection=mongoose.connection;

connection.once('open',()=>{
    console.log("connected to mongodb")
})


app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})


const Student=require('./routes/Students');

app.use('/students',Student);