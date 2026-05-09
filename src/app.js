const express = require('express'); //Imports the Express.js library
const app = express(); //Calls the Express function,Creates your server object (app)


// app.use("/",(req,res)=>{
//     res.send("Hello Dashboard");
    
// });

app.use("/user",
    (req,res,next)=> {
    console.log("Hello User")
    next();
    res.send("response1");
},(req,res) => {
    console.log("Hello User2");
    res.send("response2");
}
);



// app.use("/test",(req,res)=>{
//     res.send("Test Test Test")

// });



app.listen(2511,()=>{
    console.log("Server is listening on port 2511.");
});