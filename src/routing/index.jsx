import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../pages/Home"
// import Login from "../pages/Login";
// import Logout from "../pages/Logout";
// import New from "../pages/New";
// import Sale from "../pages/Sale";
// import Piercing from "..pages/Piercing";
// import Cart from "..pages/Cart";
import FindStore from "../pages/FindStore";
import Gifts from "../pages/Gifts";
import Wishlist from "../pages/Wishlist";
import Piercing from '../pages/Piercing';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import Collections from '../components/Common/Collections';
import Stylechannel from './styleChannel';
import PiercingSubRoutes from "./piercing";
import DeliveryExchange from "./deliveryExchange"
import New from "./new";
import Jewellery from "./jewellery";


function Routing() {
  return (
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/piercing' element={<Piercing />} />
        <Route path='/gifts' element={<Gifts />} />
        <Route path='/find-store' element={<FindStore />} />

        <Route path='/collections' element={<Collections />} />

        <Route path='/style-channel/*' element={<Stylechannel />} />
        <Route path='/piercing/*' element={<PiercingSubRoutes />} />
        <Route path='/delivery-payments/*' element={<DeliveryExchange />} />

        {/* <Route path='/collections/*' element={<New />} />
        <Route path='/collections/*' element={<Jewellery />} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default Routing
