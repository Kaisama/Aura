import { Padding } from '@mui/icons-material'
import React from 'react'

function NewHover({setShowComponent}) {

  const paraStyle = {
    textUnderlineOffset: '4px',
  };

  return (
    <div className='flex flex-start gap-[4rem] py-[2.5rem] px-[10rem] text-[14px] overflow-x-hidden'onMouseLeave={() => setShowComponent(null)}>

      <div className='w-[40vw]'>

        <p className='uppercase py-1.5'>featured</p>
        <hr className='mb-3 w-full'/>
          
        <div className='flex flex-start gap-[10rem]'> 
          <div>
              <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Best Sellers</p>
              <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Pastel Jewellery & Accessories</p>
              <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Taylor Swift Eras Tour Edit</p>
              <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Ribbons & Hair Bows</p>
          </div>

          <div>
              <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Crosses</p>
              <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Tennis Bracelets & Necklaces</p>
              <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Ring Stacking</p>
              <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Necklace Stacking</p>
          </div>
        </div> 

      </div>

      <div className='flex flex-center gap-[4rem]'>

        <div className='w-[15vw]'>
          <p className='uppercase py-1.5'>Categories</p>
          <hr className='mb-3 w-full'/>
          <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Shop All New</p>
          <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Earrings</p>
          <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Necklaces</p>
          <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Rings</p>
          <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Bracelets</p>
          <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Accessories</p>
      </div>

      <div className='w-[15vw]'>
        <p className='uppercase py-1.5'>occasion</p>
        <hr className='mb-3 w-full'/>
        <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Festival Edit</p>
        <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Wedding</p>
        <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Everyday Essentials</p>
        <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Night Out</p>
      </div>

      </div>
    </div>
  )
}

export default NewHover
