const express = require('express'); //Imports the Express.js library
const app = express(); //Calls the Express function,Creates your server object (app)


// app.use("/",(req,res)=>{
//     res.send("Hello Dashboard");
    
// });

const {adminAuth} = require("./middlewares/auth");
app.use("/admin", adminAuth);

app.get("/admin/getData",(req,res)=> {
    throw new Error("error occured");
    res.send("Data is Sent!");

});



// app.use("/test",(req,res)=>{
//     res.send("Test Test Test")

// });


//wildcard error handling
app.use("/",(err,req,res,next)=> {
    if(err) {
        res.status(500).send("Something went wrong!");
    }

});

app.listen(2511,()=>{
    console.log("Server is listening on port 2511.");
});