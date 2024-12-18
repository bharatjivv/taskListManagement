const mongoose = require("mongoose");

const connection = async (req, res) => {
    try{
        await mongoose.connect(`${mongodb_atlas_connection_string_here_from_dotenv_url}`).then(() => {
            console.log("Connected Successfully")
        })
    } catch(error){
        res.status(400).json({
            message: "Not connected",
        });
    }

};
connection();
