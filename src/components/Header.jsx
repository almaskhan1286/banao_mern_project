import React, { useState } from "react";
// import { BsSearch } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import Login from "./Login";
import SignUp from "./SingUp";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const handleCloseSignUp = () => {
    setShowSignUp(false);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <a className="navbar-brand w-25 px-5 " href="#">
          <img src="../src/assets/logo.png" alt="" />
        </a>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0 w-50 mx-auto ">
            <div className="input-group">
              {/* <BsSearch className="input-group-text bg-transparent border-0"/> */}
              <input
                className="form-control mr-sm-2 rounded-pill pl-5" // Adjust classes as needed
                type="search"
                placeholder="Search for your favorite groups in ATG"
                aria-label="Search"
              />
            </div>
          </form>
        </div>

        {/* <div className="navbar-brand w-25 d-none d-md-flex  py-0 d-flex justify-content-center align-items-center ">
          <p className="pt-2  fw-bold" style={{ fontSize: "16px" }}>
            Create account. <span style={{ color: "blue" }}>It's free!</span>
          </p>
          <IoMdArrowDropdown />
        </div> */}

        <div className="px-4 d-none d-md-flex">
          <button
            className="border-0 bg-light fs-6 dropdown-toggle  fw-bold overflow-hidden"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="true"
          >
            Create account. <span style={{ color: "blue" }}>It's free!</span>
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <a className="dropdown-item" href="#" onClick={handleLoginClick}>
                LogIn
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={handleSignUpClick}>
                Free Account
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {showLogin && <Login closeModal={handleCloseLogin} />}
      {showSignUp && <SignUp closeModal={handleCloseSignUp} />}
    </>
  );
};

export default Header;
