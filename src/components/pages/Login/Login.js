import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../shared/Loading/Loading";
import LoginWith from "../../shared/LoginWith/LoginWith";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import useToken from "../../../hooks/useToken";

const Login = () => {
  const [forgetPasswordNeed, setForgetPasswordNeed] = useState(false);
  const { register, handleSubmit } = useForm();
  const emailRef = useRef();
  const [sendPasswordResetEmail, sending ] = useSendPasswordResetEmail(auth);
  const [
      signInWithEmailAndPassword,
      user,
      loading,
      error
      ] = useSignInWithEmailAndPassword(auth);

  const [token] = useToken(user);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  if (loading || sending) {
    return <Loading />;
  }

  if (token) {
    navigate(from, { replace: true });
  }

  const onSubmit =  (user) => {
    signInWithEmailAndPassword(user.email, user.password);
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
        className="mx-auto p-3 rounded"
        style={{ width: "360px", background: "#ddd" }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-center">
            <img src="https://i.ibb.co/nbcYJ6P/logo-red.png" className="w-50" />
            <h3 className="my-3">Please Login</h3>
          </div>

          {forgetPasswordNeed ? (
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

          {forgetPasswordNeed || (
            <input
              className="w-100 mb-3 p-2"
              {...register("password")}
              placeholder="Enter your password"
              type="text"
              required
            />
          )}

          {forgetPasswordNeed ? (
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
            {forgetPasswordNeed || "Forget"}{" "}
            <strong
              style={{ cursor: "pointer" }}
              onClick={() => setForgetPasswordNeed(!forgetPasswordNeed)}
            >
              {forgetPasswordNeed ? "Cancel password reset email." : "Password?"}
            </strong>
          </p>

          <p>
            Need an account? <Link to="/register">create an account</Link>
          </p>

          <p>{error && error?.message}</p>
        </form>
        <LoginWith />
      </div>
    </div>
  );
};

export default Login;
