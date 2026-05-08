const express = require('express');
const app = express();


app.use("/hello",(req,res)=> {
    res.send("Hello Dosto");
});

app.use((req,res)=>{
    res.send("Hello Dashboard");
    
});



app.listen(2511,()=>{
    console.log("Server is listening on port 2511.");
});