// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBep1uMxRmLSEmx61gXk0qyU164EAjdtIc",
  authDomain: "ak-assignment-shivam-bhatnagar.firebaseapp.com",
  projectId: "ak-assignment-shivam-bhatnagar",
  storageBucket: "ak-assignment-shivam-bhatnagar.appspot.com",
  messagingSenderId: "17165244922",
  appId: "1:17165244922:web:323e495edcea3978246c43",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

///////////////////////////////

// import { auth } from "./config/firebase.js";
// import { useState } from "react";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { signOut } from "firebase/auth";

// const [number, setNumber] = useState("");
// const [otp, setOtp] = useState("");
// const [countryCode, setCountryCode] = useState(91);
// function onCaptchVerify() {
//   if (!window.recaptchaVerifier) {
//     window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
//       "size": "invisible",
//       "callback": (response) => {
//         // reCAPTCHA solved, allow signInWithPhoneNumber.
//         console.log(response);
//         onSignInSubmit();
//       },
//     });
//   }
// }

// // console.log(window);

// function onSignInSubmit() {
//   onCaptchVerify();
//   const appVerify = window.recaptchaVerifier;
//   signInWithPhoneNumber(auth, number, appVerify)
//     .then((confirmationResult) => {
//       // SMS sent. Prompt user to type the code from the message, then sign the
//       // user in with confirmationResult.confirm(code).
//       console.log(confirmationResult);
//       window.confirmationResult = confirmationResult;
//       // ...
//     })
//     .catch((error) => {
//       // Error; SMS not sent
//       console.log(error);
//       // Or, if you haven't stored the widget ID:
//       window.recaptchaVerifier.render().then(function (widgetId) {
//         window.grecaptcha.reset(widgetId);
//       });
//     });
// }

// function onOtpVerify() {
//   window.confirmationResult
//     .confirm(otp)
//     .then(async (res) => {
//       console.log(res);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
