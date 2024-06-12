const mongoose = require("mongoose")

let CustomerSchema = mongoose.Schema({
    fname: {
        type: String,
        required : true,
    },
    lname: {
        type: String,
        required : true,
    },
    email: {
        type: String,
        required : true,
    },
    password: {
        type: String,
        required : true,
    },
    Repassword: {
        type: String,
        required : true,
    },
    otp: {
        type : String,
    }
});
let customer = mongoose.model("Customer",CustomerSchema)

module.exports= customer;