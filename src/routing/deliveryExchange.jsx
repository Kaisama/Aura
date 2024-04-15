import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Shipping from "../pages/DeliveryPayments/Shipping";
import ExclusiveDeals from "../pages/DeliveryPayments/ExclusiveDeals";
import EasyExchange from "../pages/DeliveryPayments/ExchangeReturn";


function New() {
  return (
      <Routes>
        <Route path='/shipping' element={<Shipping />} />
        {/* <Route path='/exclusive-deals' element={<ExclusiveDeals />} /> */}
        <Route path='/exchange-return' element={<EasyExchange />} />
      </Routes>
  )
}

export default New
