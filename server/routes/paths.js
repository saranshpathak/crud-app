const express = require('express');
const router = express.Router();
const friendobj = require("../model/userSchema");

router.post('/addFriend',async(req,res)=>{
  console.log('yesss in the server');
    const {name,age,phn}= req.body;
    const friend = new friendobj({name,age,phn});
       const isSaved = await friend.save();
       if(isSaved){
        res.status(201).json({ message: "user registered successfully" });
    }
   else{
    console.log(err);
  }
});
router.get("/getUsers",(req,res)=>{
  friendobj.find({},(err,result)=>{
    if(err){
      res.json(err);
    }
    else {res.json(result);
    }
  });
});
router.put('/update',async (req,res)=>{
    const {newAge, id} = req.body;
    try{
      await friendobj.findById(id,(error,friendToUpdate)=>{
        friendToUpdate.age =Number(newAge) ;
        friendToUpdate.save();
      });

    } catch(err){
      console.log(err);
    }
     
});
router.delete("/delete/:id",async( req,res)=>{
  const id = req.params.id;
  await friendobj.findByIdAndDelete(id).exec();
  res.send('Item deleted');
});

module.exports=router;