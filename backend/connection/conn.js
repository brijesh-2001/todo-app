const mongoose=require("mongoose");

const conn=async (req,res)=>{
    try {
        await mongoose.connect("mongodb+srv://brijeshrawat2001:brijesh@cluster0.ksdv2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("connected");
    });
    } catch (error) {
        res.status(400).json({
            message:("Not Connected"),
        });
    }
};
conn();