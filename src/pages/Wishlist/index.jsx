import React from 'react'
import { Link } from 'react-router-dom';

function Wishlist () {
    return (
        <>
            <div className="landing-page-container">
                <div className='top-banner h-[10vh]  bg-red-700 flex justify-center items-center uppercase'>
                    <Link to="/AllSale" className=' text-[#F6A0A4] font-medium'>Mid-Season Sale Extended &nbsp;</Link>{' '} <span className='text-[#F6A0A4] text-3xl font-medium'> | &nbsp;</span>
                    <Link to="/MidSale" className='font-bold uppercase tracking-wide text-[#ffff]' >All Sale Styles $5 & Under</Link>
                </div>
                {/* Wishlist start */}
                <div className='flex items-center justify-between'>
                    <div className="mt-4 px-20 py-10 text-3xl">My Wishlist</div>
                    <div className='py-10 mt-4 mr-20'>
                        <button className='uppercase px-3 py-2 text-[15px] rounded bg-[#245959] text-[#F1F5D4] leading-0 tracking-wider '>Share Wishlist</button>
                    </div>
                </div>
                <div className='bg-[#D9EDF7] text-[#0b388f] py-4 mx-20 rounded flex justify-center'>There are no items in your Wishlist</div>
            </div>
        </>
    )
}

export default Wishlist;