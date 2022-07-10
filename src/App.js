import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/auth/signup";
import LoginPage from "./pages/auth/login";
import LandingPage from "./pages/LandingPage";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <Header />
      <div className="main-layout">
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
