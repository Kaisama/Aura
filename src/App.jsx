import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Common/Header'
import Footer from './components/Common/Footer'
import AllSale from './components/Home/Component1-Buttons/AllSale'


function App() {
  return (
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home/all-sale' element={<AllSale />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
