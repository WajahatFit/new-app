import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import Shop from "./pages/Shop";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";
=======
import Shop from "./pages/shop";
import Navbar from "./components/navbar";
import Landing from "./pages/landing";
import Footer from "./components/footer";
>>>>>>> 79b2438dec7ead02696fa2b7875df610ca66c5a4
import Profile from "./pages/Profile";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import "./App.css";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="flex flex-col">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/Home" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/details" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
