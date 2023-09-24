import toast from "react-hot-toast";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";

export default function MockApiHomePage() {
  const ref = useRef(null);

  const navigate = useNavigate();
  const [otp, setOtp] = useState(null);
  const [phoneNum, setPhoneNum] = useState("");
  const [signInSubmit, setSignInSubmit] = useState(false);

  //request an otp from the server
  function requestOtp(e) {
    e.preventDefault();
    if (phoneNum.length >= 10 && phoneNum.length <= 13) {
      const payload = JSON.stringify({ phoneNum: phoneNum });
      fetch("/api/get-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload,
      })
        .then((response) => response.json())
        .then((json) => {
          setSignInSubmit(true);
          toast.success((t) => (
            <span>
              Your otp is: {json.otp}{" "}
              <button
                className="bg-zinc-600 font-medium px-2 py-1 rounded ml-2"
                onClick={() => {
                  navigator.clipboard.writeText(json.otp);
                  setOtp(json.otp);
                  toast((t) => (
                    <span>
                      Copied!
                      <button
                        className="bg-zinc-600 font-medium px-2 py-1 rounded ml-2"
                        onClick={() => {
                          toast.dismiss(t.id);
                        }}
                      >
                        X
                      </button>
                    </span>
                  ));
                  toast.dismiss(t.id);
                }}
              >
                copy
              </button>
            </span>
          ));
        })
        .catch(() => {
          toast.error((t) => (
            <span className="flex items-center justify-center gap-2 text-center">
              Oh shoot! Some error occured in api.
              <button
                className=" bg-zinc-600 font-medium px-2 py-1 rounded ml-2"
                onClick={() => {
                  toast.dismiss(t.id);
                }}
              >
                X
              </button>
            </span>
          ));
        });
    } else {
      document.getElementById("error-phone").innerText =
        "Api supports only a 10 digit number with 2 digit country code.";
    }
  }

  //verify otp
  function verifyOtp(e) {
    e.preventDefault();
    const payload = JSON.stringify({ otp: otp, phoneNum: phoneNum });
    if (otp > 999 && otp < 10000) {
      fetch("/api/verify-otp", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload,
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.message !== undefined) {
            navigate("/dashboard");
            toast.success((t) => (
              <span className="flex items-center justify-center gap-2 text-center">
                <span> {json.message}</span>
                <button
                  className=" bg-zinc-600 font-medium px-2 py-1 rounded ml-2"
                  onClick={() => {
                    toast.dismiss(t.id);
                  }}
                >
                  X
                </button>
              </span>
            ));
          } else {
            toast.error(json.error);
          }
        })
        .catch((error) => {
          toast.error(error.message);
        });
    } else {
      toast.error("Please type a valid otp.");
    }
  }

  //resend otp
  function resendOtp(e) {
    e.preventDefault();
    const payload = JSON.stringify({ phoneNum: phoneNum });
    if (phoneNum.length >= 10) {
      fetch("/api/resend-otp", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload,
      })
        .then((response) => response.json())
        .then((json) => {
          setOtp(null);
          toast.success((t) => (
            <span>
              Your new otp is: {json.otp}{" "}
              <button
                className=" bg-zinc-600 font-medium px-2 py-1 rounded ml-2"
                onClick={() => {
                  navigator.clipboard.writeText(json.otp);
                  setOtp(json.otp);
                  toast((t) => (
                    <span>
                      Copied!
                      <button
                        className="bg-zinc-600 font-medium px-2 py-1 rounded ml-2"
                        onClick={() => {
                          toast.dismiss(t.id);
                        }}
                      >
                        X
                      </button>
                    </span>
                  ));
                  toast.dismiss(t.id);
                }}
              >
                Copy
              </button>
            </span>
          ));
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  }

  return (
    <main className="w-full min-h-screen p-[16px] flex items-center justify-center">
      <section className="w-1/2 h-full hidden base:flex relative items-center justify-center flex-col ">
        <div className="stagger base:text-center xl:text-left w-3/4">
          <h1 className="font-bold text-4xl mb-3">
            Be the one you want to be.
          </h1>
          <p
            className="font-light
           text-xl"
          >
            With <span className="text-blue-400">AdmitKard</span>, students be
            whatever they want to be. Wherever they want to be!
          </p>
        </div>
      </section>
      <section className="h-full w-full flex justify-center items-center base:w-1/2">
        {!signInSubmit ? (
          <div className="flex flex-col justify-center items-center base:w-fit xl:w-3/5 base:border base:border-solid base:p-10 base:rounded-2xl base:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <img
              src="/images/AK_logo.svg"
              alt="admitKard logo"
              width={200}
              height={50}
              className="mb-[90px]"
            />
            <div className="text-center">
              <h1 className="font-regular text-2xl mb-5 text-black">
                Welcome back
              </h1>
              <h4 className="text-[16px] text-base mb-14 text-ak-gray-dark">
                Please sign in into your account
              </h4>
            </div>
            <div className="mb-8 relative w-fit flex justify-center flex-col items-center">
              <div
                ref={ref}
                className=" relative phone-input border base:w-80 border-ak-yellow-dark p-2 rounded"
              >
                <PhoneInput
                  countryCallingCodeEditable={false}
                  value={phoneNum}
                  onChange={setPhoneNum}
                  placeholder={"+91 99988-87777"}
                />
              </div>
              <p
                id="error-phone"
                className=" text-xs text-red-500 w-4/5 text-center mt-1"
              ></p>
            </div>
            <p className="text-[12px] text-ak-gray-light text-center mb-[100px]">
              We will send you one time SMS message. <br></br>Charges may apply
            </p>
            <button
              onClick={requestOtp}
              className=" bg-ak-yellow-dark p-1 text-white rounded-full w-[224px] h-[36px]"
              id="sign-in-button"
            >
              Sign in with OTP
            </button>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center base:w-fit xl:w-3/5 base:border base:border-solid base:p-10 base:rounded-2xl base:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <img
              src="/images/verify.png"
              alt="admitKard logo"
              className="mb-[50px]"
            />
            <div className="text-center">
              <h1 className="font-regular text-xl mb-5 text-black">
                Please verify Mobile number
              </h1>
              <h4 className="text-[16px] text-base text-ak-gray-dark">
                An OTP is sent to{" "}
                <span className="text-ak-black-primary">{phoneNum}</span>
              </h4>
              <Link
                to={"/"}
                onClick={() => {
                  setSignInSubmit(false);
                  setPhoneNum("");
                }}
                className="text-[12px] text-ak-yellow-dark underline"
              >
                Change Phone Number
              </Link>
            </div>
            <div className="w-full p-2 my-[70px] flex items-center justify-center">
              <OtpInput
                inputStyle={{
                  width: "2.5em",
                  height: "3em",
                  margin: "0.2em",
                  padding: "0.2em",
                  fontWeight: "600",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  outline: "none",
                }}
                inputType="number"
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderInput={(props) => <input {...props} />}
              />
            </div>
            <p className="text-[12px] text-ak-gray-light text-center mb-7">
              Didn’t receive the code?{" "}
              <button onClick={resendOtp} className=" text-ak-yellow-dark">
                Resend
              </button>
            </p>
            <button
              onClick={verifyOtp}
              className=" bg-ak-yellow-dark p-1 text-white rounded-full w-[224px] h-[36px]"
            >
              Verify
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
