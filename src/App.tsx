import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/shop";
import Navbar from "./components/navbar";
import Landing from "./pages/landing";
import Footer from "./components/footer";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import "./App.css";
import Login from "../src/pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ProductDetails from "./pages/ProductDetails";

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
          <Route path="/details" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
