const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "anasmohamad369@gmail.com",
    pass: "svmq fssy dlgk hrsk",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main(email,otp) {
 

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"FROM Anass Mohamad " <anasmohamad369@gmail.com>', 
    // sender address
    
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html:`${otp}`, // html body
  });
  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

module.exports= main