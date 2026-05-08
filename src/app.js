const express = require('express'); //Imports the Express.js library
const app = express(); //Calls the Express function,Creates your server object (app)


// app.use("/",(req,res)=>{
//     res.send("Hello Dashboard");
    
// });

app.use("/hello",(req,res)=> {
    res.send("Hello Hello Hello");
});

app.get("/user",(req,res)=>{
    res.send({"name":"Suraj Singh",
        "age": "25"
    });
});

app.post("/user",(req,res)=>{
    res.send("user successfully saved!")
})

app.delete("/user",(req,res)=>{
    res.send("user deleted successfully!")
})

// app.use("/test",(req,res)=>{
//     res.send("Test Test Test")

// });



app.listen(2511,()=>{
    console.log("Server is listening on port 2511.");
});