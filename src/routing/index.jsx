import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../pages/Home"
// import Login from "../pages/Login";
// import Logout from "../pages/Logout";
// import New from "../pages/New";
// import Sale from "../pages/Sale";
// import Piercing from "..pages/Piercing";
// import Cart from "..pages/Cart";
// import FindAStore from "../pages/FindAStore";
import Gifts from "../pages/Gifts";
import Wishlist from "../pages/Wishlist";
import Cart from '../pages/Cart';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import New from "./new";
import Jewellery from "./jewellery";


function Routing() {
  return (
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/gifts' element={<Gifts />} />
        <Route path='/collections/*' element={<New />} />
        <Route path='/collections/*' element={<Jewellery />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default Routing
