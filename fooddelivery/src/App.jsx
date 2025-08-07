
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Footer from './Components/Footer/Footer';
import LoginPopup from './Components/LoginPopup/LoginPopup';

function App() {

  // State to manage login popup visibility
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>

     {/* show login popup */}

    {showLogin && <LoginPopup  onClose ={setShowLogin} />}

      <div className="App">
        <Navbar  setShowLogin = {setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>

      <Footer /> {/* This is outside the App width container */}
    </>
  );
}


export default App
