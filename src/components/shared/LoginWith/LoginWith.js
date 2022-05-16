import React from "react";
import "./LoginWith.css";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "./../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

const LoginWith = () => {
  const [signInWithFacebook, fbUser, fbLoading, fbError] =
    useSignInWithFacebook(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  // redirect after login
  const navigate = useNavigate();
  const loaction = useLocation();
  const from = loaction?.from?.state?.pathname || "/";

  if (fbUser || googleUser) {
    navigate(from, { replace: true });
  }

  return (
    <div className="py-3">
      <div className="d-flex align-items-center justify-content-center mb-3">
        <div className="loginWith"></div>
        <div> OR </div>
        <div className="loginWith"></div>
      </div>

      <div className="d-flex align-items-center justify-content-center">
        <button
          className="p-2 outline-none border-0 bg-danger text-white rounded d-flex align-items-center me-3"
          onClick={() => signInWithGoogle()}
        >
          <img
            src="https://i.ibb.co/5xfQpxz/google.png"
            style={{ width: "20px" }}
            className="me-2"
          />
          Google
        </button>

        <button
          className="p-2 outline-none border-0 bg-primary text-white rounded d-flex align-items-center"
          onClick={() => signInWithFacebook()}
        >
          <img
            src="https://i.ibb.co/JyFbkD2/facebook.png"
            style={{ width: "20px" }}
            className="me-2"
          />
          Facebook
        </button>
      </div>
      <p>{fbError && fbError.message}</p>
      <p>{googleError && googleError.message}</p>
    </div>
  );
};

export default LoginWith;
