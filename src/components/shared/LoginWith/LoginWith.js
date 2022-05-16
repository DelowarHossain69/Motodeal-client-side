import React from "react";
import "./LoginWith.css";

const LoginWithGoogle = () => {
  return (
    <div className="py-3">
      <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="loginWith"></div>
          <div> OR </div>
          <div className="loginWith"></div> 
      </div>

      <div className="d-flex align-items-center justify-content-center">
        <button className="p-2 outline-none border-0 bg-danger text-white rounded d-flex align-items-center me-3">
          <img
            src="https://i.ibb.co/5xfQpxz/google.png"
            style={{ width: "20px" }}
            className="me-2"
          />
          Google
        </button>

        <button className="p-2 outline-none border-0 bg-primary text-white rounded d-flex align-items-center">
          <img
            src="https://i.ibb.co/JyFbkD2/facebook.png"
            style={{ width: "20px" }}
            className="me-2"
          />
          Facebook
        </button>
      </div>
    </div>
  );
};

export default LoginWithGoogle;
