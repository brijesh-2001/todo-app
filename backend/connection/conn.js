const mongoose=require("mongoose");

const conn=async (req,res)=>{
    try {
        await mongoose.connect("mongodb+srv://dummy:dummy@cluster0.4n3jg.mongodb.net/")
    .then(()=>{
        console.log("connected");
    });
    } catch (error) {
        res.status(400).json({
            message:"Not Connected",
        });
    }
};
conn();