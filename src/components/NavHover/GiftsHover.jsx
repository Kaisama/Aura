import React from 'react'

function GiftsHover({setShowComponent}) {

  const paraStyle = {
    textUnderlineOffset: '4px',
  };

  return (
    <div className='flex flex-start gap-[4rem] py-[2.5rem] px-[10rem] text-[14px]' onMouseLeave={() => setShowComponent(null)}>

      <div>
        <p className='uppercase py-1.5'>Categories</p>
        <hr className='mb-3 w-full'/>

        <div className='flex flex-start w-[40vw] gap-[20rem]'>
          <div>
              <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Shop All Gifts</p>
              <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Gift Guide</p>
              <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Jewellery Sets</p>
              <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Jewellery Sets</p>
              <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Premium Gifts</p>
              <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Best Sellers</p>
          </div>

          <div>
              <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Initials</p>
              <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Cubic Zirconia</p>
              <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Kids Gifts</p>
              <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>E-Gift Card</p>
              <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Piercing Gift Card</p>
          </div>
        </div> 
      </div>

      <div className='w-[20vw]'>
        <p className='uppercase py-1.5'>shop by price</p>
        <hr className='mb-3 w-full'/>
        <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>$15 & Under</p>
        <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>$25 & Under</p>
        <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>$40 & Under</p>
      </div>

      <div className='w-[20vw]'>
        <p className='uppercase py-1.5'>shop by persona</p>
        <hr className='mb-3 w-full'/>
        <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>For The Minimalist</p>
        <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>For The Glamorous</p>
        <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>For The Romantic</p>
      </div>
    </div>
  )
}

export default GiftsHover
