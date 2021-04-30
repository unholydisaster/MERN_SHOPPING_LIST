const express =require('express');
const router=express.Router();

//item Model
const Item =require('../../models/Item');

//@route Get api/items
//@desc  Get all items
//@access public
router.get('/',(req,res)=>{
    Item.find()
    .sort({date:-1})
    .then(items=>res.json(items))
})

//@route Post api/items
//@desc  create an item
//@access public
router.post('/',(req,res)=>{
    const newItem=new Item({
        name:req.body.name
    });
    newItem.save().then(item=>res.json(item)); 
}); 

//@route deleate api/items
//@desc  deleate an post
//@access public
 

router.delete('/:id',async (req,res)=>{
    const item=await Item.findByIdAndRemove(req.params.id);
    if(!item)res.status(404).send('sport with id not found')
    res.send(item);
});

module.exports=router; 