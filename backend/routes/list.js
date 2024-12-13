const router= require("express").Router();
const User=require("../models/user");
const List=require("../models/list");


router.post("/addTask", async(req,res)=>{
    try {
        const {title,body,id}=req.body;
    const existingUser=await User.findById(id);
    if(existingUser)
{
    const list=new List({title,body,user:existingUser});
    await list.save().then(()=> res.status(200).json({list}));
    existingUser.list.push(list);
    existingUser.save();
}
    } catch (error) {
        console.log(error);
    }
});
//UPDATE
router.put("/updateTask/:id", async(req,res)=>{
    try {
        const {title,body}=req.body;
    //     const {title,body,email}=req.body;
    // const existingUser=await User.findOne({email});
    // if(existingUser)
  const list =await List.findByIdAndUpdate(req.params.id,{title,body});
    list.save().then(()=> res.status(200).json({message:"Task updated "}));
    

    } catch (error) {
        console.log(error);
    }
});

//DELETE
router.delete("/deleteTask/:id", async(req,res)=>{
    try {
        const {id}=req.body;
    const existingUser=await User.findByIdAndUpdate(id,{$pull:{list:req.params.id}});
    if(existingUser)
{
    const deletedTask = await List.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
        return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
}
    }
    catch (error) {
                console.log(error);
            } });

    
//getTask
router.get("/getTasks/:id",async (req,res)=>{
    const list= await List.find({user:req.params.id}).sort({createdAt:-1});
    if(list.length!==0){
        res.status(200).json({list});
    }
    else{
        res.status(200).json({message:"No tasks to display"});
    }
});

module.exports=router;