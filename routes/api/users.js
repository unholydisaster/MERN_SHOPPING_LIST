const express =require('express');
const router=express.Router();
const bcrypt=require('bcryptjs');

//item Modelconst
 const User=require('../../models/User');

//@route post api/users
//@desc  regester new user
//@access public
router.post('/',(req,res)=>{
   const{name,email,password}=req.body;

   //Simple validation
   if(!name || !email || !password ){
       return res.status(400).json({msg:'please enter all fields'})
   }

   //check for existing user
   User.findOne({email})
   .then(user=>{
       if(user)return res.status(400).json({msg:'Please enter all fields'})
       
       const newUser=new User({
           name,email,password
       })
       bcrypt.genSalt(10,(err,salt)=>{
           bcrypt.hash(newUser.password,salt,(err,hash)=>{
               if(err) throw err;
               newUser.password=hash;
               newUser.save()
               .then(user=>{
                   res.json({
                       user:{
                           id:user.id,
                           name:user.name,
                           email:user.email
                       }
                   })
               })
           })
       })
    })
});


module.exports=router; 