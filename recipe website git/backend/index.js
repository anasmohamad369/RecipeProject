let express = require('express'); //import the express from server
let app = express(); // instialation in the pack
let cors = require("cors")
let Customer = require("./models/Customer.js")
let Recipe = require("./models/Recipe.js");
const main = require('./utils/sendmail.js');

require("./db.js")

app.use(cors());
app.use(express.json());


app.post("/signup", async (req, res) => {
    let { fname, lname, email, password, Repassword } = req.body;

    let userObj = await Customer.findOne({ email: email });
    if (userObj !== null) {
        return res.status(400).send("Already exists");
    }
    else if (password !== Repassword) {
        return res.status(400).send("Password is incorrect");
    }
    else {
    let created_user =    await Customer.create(req.body);
            let otp = ''
        
            for (let i = 0; i < 4; i++) {
                otp += Math.floor(Math.random() * 10)
            }
        
         await main(email,otp);
         created_user.otp = otp;
         created_user.save() 
        
        res.status(200).send("Account created successfully");

    }
});
app.post("/verifyotp",async(req,res)=>{
    console.log(req.body);
    let Emailid = await Customer.findOne({ email:req.body.mailid });
    console.log(Emailid);
       if(Emailid=== null){
        return res.status(404).send("Account Not found")
       }
    
       else if(Emailid.otp===req.body.otp){

        return res.status(200).send("Otp Verified Successfully")
       }
       else{
        return res.status(404).send("Otp Wrong")
       }

})
app.post("/login", async (req, res) => {
    const { mail, password } = req.body;
    let oldUser = await Customer.findOne({ email: mail });
    console.log(req.body);
    console.log(oldUser)
    if (oldUser === null) {
        return res.status(404).send("Account not Found")
    }
    else if (oldUser.password !== password) {
        return res.status(400).send("password not correct");
    }
    else {
        return res.status(200).send(oldUser);
    }
});
app.get("/own/:id", async (req, res) => {

    let params = req.params;
    console.log(params);
    const your = await Recipe.find({customerId:params.id});
    return res.send(your)

})
app.post("/create", async (req, res) => {
    console.log(req.body);
    let data = {
        rnameHandler: req.body.rname,
        imgHandler: req.body.img,
        numHandler: req.body.num,
        timeHandler: req.body.time,
        descHandler : req.body.desc,
        premHandler: req.body.prem,
        ingredients: req.body.textFields,
        customerId: req.body.customerId,

    }
    await Recipe.create(data)

    return res.status(200).send("Created successfully")


   
});
app.delete("/del/:id",async(req,res)=>{
    let params = req.params;
    console.log(params);
    const your = await Recipe.findByIdAndDelete({_id:params.id});
    return res.status(200).send("deleted suceesfully")

    })

app.listen(5000, () => {
    console.log('expresss liistenig to the port 5000')
}
)