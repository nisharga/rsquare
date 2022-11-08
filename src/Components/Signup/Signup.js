import React from "react";
import Signupform from "./Signupform/Signupform";
import "./Singup.css";

const Signup = () => {
  // md:flex-col basis-2/6 md:basic-6/6
  // md:flex-col basis-4/6 ml-16
  // flex-1 lg:flex-col lg:w-5/12
  // flex-1 lg:flex-col lg:w-7/12

  // md:flex-col basis-2/6 md:basic-6/6
  // md:flex-col basis-4/6 ml-16 col-span-2
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
          <h2 className="text-left mb-2">Begin your journey!</h2>
          <p>Get started with the best platform for design </p>
        </div>
        <Signupform />
        <div className="signup_form_bottom">
          <p>Already have an account? Log In</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
