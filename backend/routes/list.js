const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");


// Create
router.post("/addTask", async(req, res) => {
    try {
        const { title , body, id } = req.body;
        const existinguser = await User.findById(id);

        if(existinguser){
            const list = new List({ title, body, user: existinguser});
            await list.save().then(() => res.status(200).json( { list }));
            existinguser.list.push(list);
            existinguser.save();
        }
    } catch (error) {
        console.log(error);
    }

    
});


// Update
router.put("/updateTask/:id", async(req,res) => {
    try {
        const {title, body} = req.body;
        const list = await List.findByIdAndUpdate(req.params.id, { title, body });
        list.save().then(() => res.status(200).json( { message: "Task Updated" }));
    } catch (error) {
        console.log(error);
    }
})



// Delete
router.delete("/deleteTask/:id", async(req,res) => {
    try {
        const { id } = req.body;
        const existinguser = await User.findByIdAndUpdate( id , { $pull: { list: req.params.id }});
        if ( existinguser ){
            const list = await List.findByIdAndDelete(req.params.id).then(() => res.status(200).json( { message: "Task Deleted" }));
        }
    } catch (error) {
        console.log(error);
    }
})


// gettasks
router.get("/getTasks/:id", async(req, res) => {
    const list = await List.find( { user: req.params.id }).sort( {createdAt: -1 });
    if(list.length !== 0){
        res.status(200).json({ list : list});
    }
    else{
        res.status(200).json({ message : "No Task "})
    }
});




module.exports = router;