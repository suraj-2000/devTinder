const express = require('express'); //Imports the Express.js library
const app = express(); //Calls the Express function,Creates your server object (app)


// app.use("/",(req,res)=>{
//     res.send("Hello Dashboard");
    
// });

const {adminAuth} = require("./middlewares/auth");
app.use("/admin", adminAuth);

app.get("/admin/getData",(req,res)=> {
    res.send("Data is Sent!");

});



// app.use("/test",(req,res)=>{
//     res.send("Test Test Test")

// });



app.listen(2511,()=>{
    console.log("Server is listening on port 2511.");
});