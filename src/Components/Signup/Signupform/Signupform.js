import React, { useState } from "react";
import "./Signupform.css";
import { useForm } from "react-hook-form";
const Signupform = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [checked, setChecked] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="signup_forms mt-6">
        <div className="first_last_name flex space-x-4">
          <div className="form-control md:w-1/2">
            <label className="label" htmlFor="fname">
              <span className="label-text">First Name *</span>
            </label>
            <input
              placeholder="Jhon"
              className="input input-bordered"
              id="fname"
              {...register("fname", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
                maxLength: 20,
              })}
            />
          </div>
          <div className="form-control  md:w-1/2">
            <label className="label" htmlFor="lname">
              <span className="label-text">Last Name *</span>
            </label>
            <input
              placeholder="die"
              className="input input-bordered"
              id="lname"
              {...register("lname", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
                maxLength: 20,
              })}
            />
          </div>
        </div>{" "}
        {/* first_last_name */}
        <div className="email_phone flex space-x-4">
          <div className="form-control md:w-1/2">
            <label className="label" htmlFor="email">
              <span className="label-text">Email *</span>
            </label>
            <input
              id="email"
              placeholder="Email@email.com"
              className="input input-bordered"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
              type="email"
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label" htmlFor="phone">
              <span className="label-text">Phone *</span>
            </label>
            <label className="input-group">
              <span>+91</span>
              <input
                id="phone"
                placeholder="11111111"
                className="input input-bordered"
                {...register("phone", {
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Please enter a number",
                  },
                })}
              />
            </label>
          </div>
        </div>
        <div className="form-control md:w-1/2">
          <label className="label" htmlFor="password">
            <span className="label-text">Password *</span>
          </label>
          <input
            id="password"
            type="password"
            placeholder="Type Password"
            className="input input-bordered"
            {...register("password", {
              pattern: {
                value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                message: "Please enter Valid Password",
              },
            })}
          />
        </div>
        <div>
          <div className="form-control agree">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                className="checkbox-xs"
                onClick={() => setChecked(!checked)}
              />
              <span className="label-text check_box_text text-left">
                By signing up, you agree to our User Agreement, Terms of
                Service, & Privacy Policy
              </span>
            </label>
          </div>
        </div>
        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default Signupform;
