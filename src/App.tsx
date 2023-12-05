import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "../src/pages/auth/Login";
import Signup from "./pages/auth/Signup";

const App = () => {
  return (
    <div
      className="
      h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600"
    >
      <BrowserRouter>
        <Navbar />
        <Footer />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
