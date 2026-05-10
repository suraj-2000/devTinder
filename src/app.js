const express = require('express'); //Imports the Express.js library
const app = express(); //Calls the Express function,Creates your server object (app)
const {connectDB} = require("./config/database.js");
const User = require("./models/user.js");

app.use(express.json());

app.get("/user", async (req,res)=> {
    const userEmail = req.body.emailId;
    try {
        const user = await User.find({emailId: userEmail});
        console.log(user);
        res.send(user);
    } catch(err) {
        console.error("User not found");
    }
    
});

app.get("/feed", async (req,res)=> {
    try {
        const user = await User.find({});
        console.log(user);
        res.send(user);
    } catch(err) {
        console.error("User not found");
    }
    
});

app.delete("/user",async (req,res) => {
    const userId = req.body.userId;
    try {
        await User.findByIdAndDelete(userId);
        res.send("user deleted succesfully!");


    } catch(err) {
        res.status(500).send("User not found!");
    }

})

app.post("/signup", async (req, res)=> {
    
    // const user = new User({
    //     firstName: "Sangam",
    //     lastName: "Singh",
    //     age: 25,
    //     emailId: "surajsangam@gmail.com",
    //     gender: "Female",
    //     password: "Password"
    // });

    const user = new User(req.body);
    console.log(req.body);

    try {
        await user.save();
        res.send("User saved successfully!");
    } catch(err) {
        res.status(400).send(err.message);

    }

});

app.patch("/user", async (req, res) => {
    const id = req.body.userId;
    try {
        const data = req.body;
        await User.findByIdAndUpdate(id, data,{
            runValidators:true
        });
        res.send("User updated successfully.");

    } catch(err) {
        res.status(500).send("Error while updating the user");
    }
   
});

connectDB().then(()=> {
    console.log("Database Connected!");
    app.listen(2511,()=>{
    console.log("Server is listening on port 2511.");
});
}).catch(err=> {
    console.error("Database not connected");
})

// app.listen(2511,()=>{
//     console.log("Server is listening on port 2511.");
// });