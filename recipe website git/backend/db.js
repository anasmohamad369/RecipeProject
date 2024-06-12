const mongoose = require("mongoose");

// mongodb connection
mongoose
    .connect("mongodb://127.0.0.1:27017/Recipe")
    .then(() => console.log("connection done"))
    .catch((err) => {

        console.log("Error in MongoDB connection", err);
    });
    