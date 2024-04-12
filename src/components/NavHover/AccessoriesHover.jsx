import React from 'react'

function AccessoriesHover({setShowComponent}) {

  const paraStyle = {
    textUnderlineOffset: '4px',
  };

  return (
    <div className='flex gap-[4rem] py-[2.5rem] px-[10rem] text-[14px]' onMouseLeave={() => setShowComponent(null)}>
      <div className='w-[18vw]'>
        <p className='uppercase py-1.5'>Hair</p>
        <hr className='mb-3 w-full'/>
        <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>All Hair Accessories</p>
        <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Headbands</p>
        <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Hair Clips</p>
        <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Hair Claws</p>
        <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Scrunchies</p>
      </div>

      <div className='w-[18vw]'>
        <p className='uppercase py-1.5'>Beauty</p>
        <hr className='mb-3 w-full'/>
        <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Shop All Beauty</p>
        <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Face & Body Jewels</p>
        <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Press On Nails & Nail Stickers</p>
      </div>

      <div className='w-[18vw]'>
        <p className='uppercase py-1.5'>More</p>
        <hr className='mb-3 w-full'/>
        <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Belts</p>
        <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Brooches & Pins</p>
        <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Jewellery Boxes</p>
        <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Scarves & Bandanas</p>
        <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Kids Accessories</p>
      </div>

      <div className='w-[18vw]'>
        <p className='uppercase py-1.5'>Occasion</p>
        <hr className='mb-3 w-full'/>
        <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Festival Edit</p>
        <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Night Out</p>
      </div>
    </div>
  )
}

export default AccessoriesHover
