<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './pages/shop';
=======
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "../src/pages/auth/Login";
import Signup from "./pages/auth/Signup";
>>>>>>> main

const App = () => {
  return (
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
=======
    <div
      className="
      relative flex flex-col h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600"
    >
      <BrowserRouter>
        <Navbar />

        <Footer />

        <Routes>
          <Route path="/Home" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
>>>>>>> main
  );
};

export default App;
