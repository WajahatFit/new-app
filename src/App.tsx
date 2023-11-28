import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Footer />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
