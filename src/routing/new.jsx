import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Accessories from "../collections/new/categories/Accessories";
import Bracelets from "../collections/new/categories/Bracelets";
import Earrings from "../collections/new/categories/Earrings";
import Necklaces from "../collections/new/categories/Necklaces";
import Rings from "../collections/new/categories/Rings";
import ShopAllNew from "../collections/new/categories/ShopAllNew";


function New() {
  return (
      <Routes>
        <Route path='/accessories' element={<Accessories />} />
        <Route path='/bracelets' element={<Bracelets />} />
        <Route path='/earrings' element={<Earrings />} />
        <Route path='/necklaces' element={<Necklaces />} />
        <Route path='/rings' element={<Rings />} />
        <Route path='/shop-all-new' element={<ShopAllNew />} />
      </Routes>
  )
}

export default New
