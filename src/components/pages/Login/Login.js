import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    
  };
  return (
    <div className="container mx-auto my-5">
      <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto">
        <input
          className="w-100 mb-3 p-2"
          {...register("email")}
          placeholder="Enter your email"
          type="text"
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
