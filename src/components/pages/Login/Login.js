import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {};
  return (
    <div
      className="container mx-auto my-5 d-flex align-items-center justify-content-center"
      style={{ height: "60vh" }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto p-4 rounded"
        style={{ width: "400px", background: "#ddd" }}
      >
        <div className="text-center">
          <img src="https://i.ibb.co/nbcYJ6P/logo-red.png" className="w-50" />
          <h3 className="my-3">Please Login</h3>
        </div>

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
          placeholder="Enter your password"
          type="text"
          required
        />

        <input className="w-100 mb-3 p-2" type="submit" />
      </form>
    </div>
  );
};

export default Login;
