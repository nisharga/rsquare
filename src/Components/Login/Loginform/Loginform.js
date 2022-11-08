import React, { useState } from "react";
import "./Loginform.css";
import { useForm } from "react-hook-form";
const Loginform = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [remember, setRemember] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="login_forms  ">
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
          <div className="form-control agree md:w-1/2">
            <label className="label cursor-pointer flex justify-around">
              <div className="">
                <input type="checkbox" className="checkbox-xs" />
                <span className="label-text check_box_text text-left">
                  Remember me
                </span>
              </div>
              <div className="forget_pass">Forgot Pass</div>
            </label>
          </div>
        </div>
        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default Loginform;
