import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import "./App.css";
import Login from "../src/pages/auth/Login";
import Signup from "./pages/auth/Signup";

const App = () => {
  return (
    <div className="flex flex-col">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/Home" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
