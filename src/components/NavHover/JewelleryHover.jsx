import React from 'react'

function JewelleryHover({setShowComponent}) {

    const paraStyle = {
        textUnderlineOffset: '4px',
    };

  return (
    <div className='flex justify-center gap-[4rem] py-[2.5rem] px-[10rem] text-[14px]' onMouseLeave={() => setShowComponent(null)}>
        <div>
            <p className='uppercase py-1.5'>Earrings</p>
            <hr className='mb-3 w-full'/>

            <div className='flex gap-[4rem]'>
                <div>
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Shop All Earrings</p>
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Statement Earrings</p>
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Hoops</p>
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Drops & Dangles</p>
                </div>
                <div>
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Studs</p>
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Huggies</p>
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Helix</p>
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Flat Backs</p>
                </div>
            </div>
        </div>

        <div>
            <p className='uppercase py-1.5'>Rings</p>
            <hr className='mb-3 w-full'/>

            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Shop All Rings</p>
            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Stacking Rings</p>
            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Engagement Rings</p>
            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Cocktail Rings</p>
        </div>

        <div>
            <p className='uppercase py-1.5'>Necklace</p>
            <hr className='mb-3 w-full'/>

            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Shop All Necklaces</p>
            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Pendant Necklaces</p>
            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Layered Necklaces</p>
            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Chokers</p>
            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Statement Necklaces</p>
        </div>

        <div>
            <p className='uppercase py-1.5'>Body Jewellery</p>
            <hr className='mb-3 w-full'/>

            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Shop All Body Jewellery</p>
            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Nose Rings & Studs</p>
            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Belly Rings</p>
            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Fake Piercings</p>
        </div>

        <div>
            <p className='uppercase py-1.5'>More</p>
            <hr className='mb-3 w-full'/>

            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Bracelets</p>
            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Anklets</p>
            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Jewellery Sets</p>
            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Kids Jewellery</p>
            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Watches</p>
        </div>

        <div>
            <p className='uppercase py-1.5'>More</p>
            <hr className='mb-3 w-full'/>
            <div className='flex gap-[4rem]'>
                <div>
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Gold Plated</p>
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Sterling Silver</p>
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Surgical Steel</p>
                </div>
                <div>
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Titanium</p>
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>All Gold</p>
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>All Silver</p>
                    <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>All Rose Gold</p>
                </div>
            </div>
        </div>

        <div>
            <p className='uppercase py-1.5'>Collection</p>
            <hr className='mb-3 w-full'/>

            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Pearl</p>
            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Sensitive</p>
            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Waterproof</p>
            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Initials</p>
            <p className='py-1 hover:text-[#fc6161] hover:underline hover:cursor-pointer transition duration-200' style={paraStyle}>Cubic Zirconia</p>
        </div>
    </div>
  )
}

export default JewelleryHover
