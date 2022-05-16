import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import LoginWith from "../../shared/LoginWith/LoginWith";

const Login = () => {
  const [forgetPassworNeed, setForgetPasswordNeed] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {};
  return (
    <div className="container mx-auto my-5 ">
      <div
        className="mx-auto p-4 rounded"
        style={{ width: "400px", background: "#ddd" }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
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

          {forgetPassworNeed || (
            <input
              className="w-100 mb-3 p-2"
              {...register("password")}
              placeholder="Enter your password"
              type="text"
              required
            />
          )}

          <input
            className="w-100 mb-3 p-2"
            type="submit"
            value={forgetPassworNeed ? "Send email" : "Login"}
          />

          <p>
            {forgetPassworNeed || "Forget"}{" "}
            <strong
              style={{ cursor: "pointer" }}
              onClick={() => setForgetPasswordNeed(!forgetPassworNeed)}
            >
              {forgetPassworNeed ? "Cancel password reset email." : "Password?"}
            </strong>
          </p>

          <p>
            Nedd an account? <Link to="/register">create an account</Link>
          </p>
        </form>
        <LoginWith />
      </div>
    </div>
  );
};

export default Login;
