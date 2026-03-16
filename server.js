require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

let otpStore = {};


/* EMAIL VALIDATION */

function isValidCollegeEmail(email){

const studentRegex = /^7178\d{2}y\d{3}@kce\.ac\.in$/;
const staffRegex = /^[a-zA-Z]+@kce\.ac\.in$/;

return studentRegex.test(email) || staffRegex.test(email);

}


/* MAIL SETUP */

const transporter = nodemailer.createTransport({
service:"gmail",
auth:{
user:process.env.EMAIL_USER,
pass:process.env.EMAIL_PASS
}
});


/* SEND OTP */

app.post("/send-otp",(req,res)=>{

const {email} = req.body;

if(!isValidCollegeEmail(email)){
return res.json({
success:false,
message:"Invalid Email ID"
});
}

const otp = Math.floor(100000 + Math.random()*900000);

otpStore[email] = otp;

transporter.sendMail({
from:process.env.EMAIL_USER,
to:email,
subject:"KCE Cyber Portal OTP",
text:`Your OTP is ${otp}`
},(err)=>{

if(err){
console.log(err);
return res.json({
success:false,
message:"Failed to send OTP"
});
}

res.json({
success:true,
message:"OTP Sent Successfully"
});

});

});


/* VERIFY OTP */

app.post("/verify-otp",(req,res)=>{

const {email,otp} = req.body;

if(otpStore[email] == otp){

delete otpStore[email];

return res.json({
success:true
});

}

res.json({
success:false,
message:"Invalid OTP"
});

});


/* SERVER */

app.listen(3000,()=>{
console.log("Server running on http://localhost:3000");
});