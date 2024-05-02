import React from 'react';
import {Routes, Route, useLocation } from 'react-router-dom';
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import FindStore from "../pages/FindStore";
import Gifts from "../pages/Gifts";
import Wishlist from "../pages/Wishlist";
import Piercing from '../pages/Piercing';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import Collections from '../components/Common/Collections';
import Stylechannel from './styleChannel';
import PiercingSubRoutes from "./piercing";
import DeliveryExchange from "./deliveryExchange";

import { useAuthContext } from '../context/AuthContext';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Routing() {

  const { authUser } = useAuthContext();

  return (
    <>
      <Header />
      <ScrollToTop /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/piercing' element={<Piercing />} />
        <Route path='/gifts' element={<Gifts />} />
        <Route path='/find-store' element={<FindStore />} />
        <Route path='/login' element={authUser ? "" :<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/style-channel/*' element={<Stylechannel />} />
        <Route path='/piercing/*' element={<PiercingSubRoutes />} />
        <Route path='/delivery-payments/*' element={<DeliveryExchange />} />
        {/* <Route path='/collections/*' element={<New />} />
        <Route path='/collections/*' element={<Jewellery />} /> */}
      </Routes>
      <Footer/>
    </>
  )
}

export default Routing;