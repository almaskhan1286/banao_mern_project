import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import HomePage from "./components/homePage/HomePage";
import UserPage from "./components/userPage/UserPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
