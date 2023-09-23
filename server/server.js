const express = require("express");
const app = express();

app.use(express.json());

//otp storage data structure
let otpMap = new Map();

/**
 * Generate a random 4 digit OTP.
 * @returns {number} otp
 */
function generateOtp() {
  let otp = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
  return otp;
}

/**
 *
 */
app.post("/api/get-otp", (req, res) => {
  console.log(req.body.message);
  const phoneNum = req.body.message;
  //GENERATE OTP
  let otp = generateOtp();
  console.log(otp);
  otpMap.set(phoneNum, otp);
  res.json({ otp: otp });
  // console.log(otpMap);
});

app.post("/api/resend-otp", (req, res) => {
  console.log(req.body.phoneNum);
  const phoneNum = req.body.phoneNum;
  //GENERATE OTP
  let otp = generateOtp();
  if (otpMap.get(phoneNum) !== undefined) {
    otpMap.delete(phoneNum);
    otpMap.set(phoneNum, otp);
    res.json({ otp: otp });
  } else {
    otpMap.set(phoneNum, otp);
    res.json({ otp: otp });
  }
});

app.post("/api/verify-otp", (req, res) => {
  console.log(req.body.otp);
  const userOtp = parseInt(req.body.otp);
  const phoneNum = req.body.phoneNum;

  if (otpMap.get(phoneNum) === userOtp) {
    console.log(otpMap);
    otpMap.delete(phoneNum);
    res.json({ message: "Success. OTP verified! Welcome to AdmitKard!" });
  } else {
    console.log(otpMap);
    otpMap.delete(phoneNum);
    res.json({ error: "Incorrect OTP. Verification Failed." });
  }
});

app.listen(5000, () => console.log("server started on port 5000"));
