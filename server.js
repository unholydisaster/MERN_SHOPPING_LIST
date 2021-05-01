const express =require('express');
const mongoose=require('mongoose');
const path =require('path')

//for the routes to work

const app=express();

//bodyparser middleware
app.use(express.json());

//db config
const db=require('./config/keys').mongoURI

//connect to mongoDb
mongoose.connect(db,{useUnifiedTopology:true,useCreateIndex:true})
.then(()=>console.log('MongoDB connected..'))
.catch(err=>console.log(err)); 

//use routes ware
app.use('/api/items',require('./routes/api/items'));
app.use('/api/users',require('./routes/api/users'));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
       res.sendFile(path.resolve(_dirname,'client','build','index.html'))
    })
}

const port=process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server started on port ${port}`));

