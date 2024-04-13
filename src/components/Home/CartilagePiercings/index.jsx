import React from 'react'
import Cartilage from "../../../assets/images/home/bg-3.jpg";

function CartilagePiercings() {
  return (
    <>
      <div className='relative bg-gray-100 h-[58vh] mx-[4vw]'>
        <img className="absolute top-0 left-0 h-full w-1/2 object-cover" src={Cartilage} alt="cartilage"/>
      <div className="absolute top-0 right-0 h-full w-1/2 flex flex-col  items-center justify-center">
      <div className="text-center">
        <span className="text-4xl font-semi">CARTILAGE & PIERCINGS</span>
      </div>
    <div className="mt-4 text-center">
        <span>Customise your earscape with premium, everyday piercing essentials..</span>
    </div>
    <button className="bg-black text-white w-[12vw] h-[30px] mt-6 py-2 px-4 rounded flex items-center justify-center hover:bg-gray-400 transition duration-300">
        Shop Now
    </button>
    </div>
  </div>
    </>
  )
}

export default CartilagePiercings
