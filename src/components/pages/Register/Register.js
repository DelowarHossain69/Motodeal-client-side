import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import LoginWith from "../../shared/LoginWith/LoginWith";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {};

  return (
    <div className="container mx-auto my-5">

      <div
        className="mx-auto p-4 rounded"
        style={{ width: "400px", background: "#ddd" }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-center">
            <img src="https://i.ibb.co/nbcYJ6P/logo-red.png" className="w-50" />
            <h3 className="my-3">Please Register</h3>
          </div>

          <input
            className="w-100 mb-3 p-2"
            {...register("displayName")}
            placeholder="Enter your name"
            type="text"
            required
          />

          <input
            className="w-100 mb-3 p-2"
            {...register("email")}
            placeholder="Enter your email"
            type="email"
            required
          />

          <input
            className="w-100 mb-3 p-2"
            {...register("password")}
            placeholder="Password"
            type="text"
            required
          />

          <input
            className="w-100 mb-3 p-2"
            {...register("confirmPassword")}
            placeholder="Confirm password"
            type="text"
            required
          />

          <input className="w-100 mb-3 p-2" type="submit" value="Register" />

          <p>
            Already have an account? <Link to="/login"> Login</Link>
          </p>
        </form>

        <LoginWith />
      </div>
      
    </div>
  );
};

export default Register;
