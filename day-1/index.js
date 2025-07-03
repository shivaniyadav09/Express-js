import express from "express";

const app = express();

app.get("/api/v1/welcome" , (req , res) => {
    console.log("Request is coming...")

    res.status(200).send("Welcome to our API Endpoint🙏")
})


app.listen(8000 , ()=>{
    console.log("Hello worls server is running on port number 8000☑️")
})