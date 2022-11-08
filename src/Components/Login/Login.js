import React from "react";
import "./Login.css";
import Loginform from "./Loginform/Loginform";

const Login = () => {
  return (
    <div className="md:flex">
      <div
        className="h-[500px] md:w-1/3
      welcome_area flex items-center pt-8 flex-col"
      >
        <h2 className="text-white">
          Welcome to <br /> Rsquare.
        </h2>
        <p className="text-white w-64 py-4">
          Lets get you all set up so start with your account and begin setting
          up your profile.
        </p>
      </div>
      <div
        className="h-[500px] md:w-2/3
      form_area flex flex-col py-5 px-6"
      >
        <div className="signup_form_toper mb-4">
          <h2 className="text-left mb-2">Welcome back!</h2>
          <p>Please Enter your details.</p>
        </div>
        <Loginform />
        <div className="signup_form_bottom">
          <p>Already have an account? Log In</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
