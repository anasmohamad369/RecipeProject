const mongoose = require("mongoose")

let Recipeschema = mongoose.Schema({
    rnameHandler: {
        type: String,
        required : true,
    },
    imgHandler:{
        type: String,
        required:true,
    },
    numHandler: {
        type: String,
        required : true,
    },
    timeHandler: {
        type: String,
        required : true,
    },
    descHandler:{
        type:String,
        required:true,
    },
    premHandler: {
        type: Boolean,
        required : true,
    },
   ingredients:{
    type:Array,
    required:true
   },
   customerId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Customer"
   }
});
let Recipe = mongoose.model("Recipe",Recipeschema)

module.exports= Recipe;