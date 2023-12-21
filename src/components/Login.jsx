import React from "react";
// import { IoClose } from "react-icons/io5";

const Login = () => {
  return (
    <div className="container card justify-content-center align-items-center w-100  mt-5 px-0">
      <div className="d-flex bg-light  w-100 px-2 m-0 align-items-center justify-content-center">
        <p className="text-muted mt-3">
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </p>
        {/* <IoClose className="fs-2 ms-auto"/> */}
      </div>

      <div className="row">
        <div className="col-12 px-5 py-5 col-md-7">
          <h1 className="mb-3">Sign In</h1>
          <div className="row">
            <input
              className="col-12 border-1 border bg-light p-2 w-100"
              type="email"
              placeholder="Email"
            />
            <input
              className="col-12 border-1 border bg-light p-2"
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            type="button"
            className=" btn btn-primary rounded-5 w-100 my-4 fs-5"
          >
            Create Account
          </button>
          <button
            type="button"
            className=" border border-light p-2 rounded w-100 mt-3 fs-5"
          >
            <img src="../src/assets/f_logo.png" className="px-2" alt="" />
            Sign up with Facebook
          </button>
          <button
            type="button"
            className=" border border-light rounded p-2  w-100 my-2 fs-5 "
          >
            <img src="../src/assets/google_logo.png" className="px-2" alt="" />
            Sign up with Google
          </button>
        </div>

        <div className="col-5 d-none d-md-block">
          <div className="d-flex justify-content-center align-items-center mx-auto fs-7 mt-5 pt-3">
            <p>Don’t have an account yet?</p>
            <button
              className="border-0 bg-transparent fw-bold mb-3 fs-7"
              style={{ color: "blue" }}
            >
              Create new for free!
            </button>
          </div>
          <img
            src="../src/assets/signup_img.png"
            alt="image"
            className="fluid h-90 w-100 mt-5"
          />
          <p className="text-muted d-flex">
            By signing up, you agree to our Terms & conditions, Privacy policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
