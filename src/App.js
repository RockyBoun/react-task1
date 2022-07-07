import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/auth/signup";
import LoginPage from "./pages/auth/login";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/signup" element={SignupPage} />
        <Route path="/login" element={LoginPage} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
