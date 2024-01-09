import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import Navbar from "./components/Navbar";
<<<<<<< HEAD
import ErrorPage from "./pages/ErrorPage";
=======
>>>>>>> f0757102ccbeabb2b639d3ffb199ba707197ee6a
import Landing from "./pages/Landing";
import Footer from "./components/Footer";
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
import CreateProduct from "./components/CreateProduct";

const App = () => {
  return (
    <div className="flex flex-col">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Landing />} />
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
<<<<<<< HEAD
          <Route path="/createProduct" element={<CreateProduct />} />
          <Route path="*" element={<ErrorPage />} />
=======
          {/* <Route path="*" element={<ErrorPage />} /> */}
>>>>>>> f0757102ccbeabb2b639d3ffb199ba707197ee6a
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
