import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import LoginWith from "../../shared/LoginWith/LoginWith";
import auth from "./../../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "../../shared/Loading/Loading";

const Register = () => {
  const navigate = useNavigate();
  const [
    createUserWithEmailAndPassword,
    user,
    loading, 
    error] =useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (data.password === data.confirmPassword) {
      createUserWithEmailAndPassword(data.email, data.password);
    } else {
      alert("Your password and confirm password not match.");
    }
  };

  if (user) {
    navigate("/");
  }

  if (loading) {
    return <Loading />;
  }

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

          <p>{error && error?.message}</p>
        </form>

        <LoginWith />
      </div>
    </div>
  );
};

export default Register;
