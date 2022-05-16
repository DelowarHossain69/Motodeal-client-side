import React, { useRef, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../shared/Loading/Loading";
import LoginWith from "../../shared/LoginWith/LoginWith";

const Login = () => {
  const [forgetPassworNeed, setForgetPasswordNeed] = useState(false);
  const { register, handleSubmit } = useForm();
  const emailRef = useRef();
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // redirect after login
  const navigate = useNavigate();
  const loaction = useLocation();
  const from = loaction?.from?.state?.pathname || "/";

  console.log(loaction?.from?.state?.pathname);

  if (loading || sending) {
    return <Loading />;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  const handleForgetPassword = async () => {
    const email = emailRef.current.value;

    if (email) {
      await sendPasswordResetEmail(email);
      toast("Please check your email.");
      setForgetPasswordNeed(false);
    } else {
      toast("Please submit valid email.");
    }
  };

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

          {forgetPassworNeed ? (
            <input
              className="w-100 mb-3 p-2"
              ref={emailRef}
              placeholder="Enter your email"
              type="email"
              required
            />
          ) : (
            <input
              className="w-100 mb-3 p-2"
              {...register("email")}
              placeholder="Enter your email"
              type="email"
              required
            />
          )}

          {forgetPassworNeed || (
            <input
              className="w-100 mb-3 p-2"
              {...register("password")}
              placeholder="Enter your password"
              type="text"
              required
            />
          )}

          {forgetPassworNeed ? (
            <input
              className="w-100 mb-3 p-2"
              type="button"
              value="Send reset email"
              onClick={handleForgetPassword}
            />
          ) : (
            <input className="w-100 mb-3 p-2" type="submit" value="Login" />
          )}

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

          <p>{error && error?.message}</p>
        </form>
        <LoginWith />
      </div>
    </div>
  );
};

export default Login;
