const express = require('express'); //Imports the Express.js library
const app = express(); //Calls the Express function,Creates your server object (app)
const {connectDB} = require("./config/database.js");
const User = require("./models/user.js");


app.post("/signup", async (req, res)=> {
    const user = new User({
        firstName: "Suraj",
        lastName: "Singh",
        age: 25,
        emailId: "surajsingh@gmail.com",
        gender: "Male",
        password: "Password"
    });

    try {
        await user.save();
        res.send("User saved successfully!");
    } catch(err) {
        res.status(400).send("Error while saving the user!");

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