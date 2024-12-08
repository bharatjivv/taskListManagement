const mongoose = require("mongoose");

const connection = async (req, res) => {
    try{
        await mongoose.connect("mongodb+srv://task_user:nEKA3A4jv9s6LjBG@cluster0.d75fp.mongodb.net/").then(() => {
            console.log("Connected Successfully")
        })
    } catch(error){
        res.status(400).json({
            message: "Not connected",
        });
    }

};
connection();