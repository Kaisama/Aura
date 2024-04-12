import React from 'react'

function PiercingHover({setShowComponent}) {

  const paraStyle = {
    textUnderlineOffset: '4px',
  };

  return (
    <div className = 'py-[2.5rem] px-[10rem] text-[14px]' onMouseLeave={() => setShowComponent(null)}>
      <p className='uppercase py-1.5'>In-store piercing</p>
      <hr className='mb-3 w-full'/>

      <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Piercing Studio Services</p>
      <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Piercing Aftercare</p>
      <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Piercing FAQ</p>
      <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Piercing Edit</p>
      <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Piercing Gift Card</p>
    </div>
  )
}

export default PiercingHover
