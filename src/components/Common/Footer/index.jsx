import React from 'react';
// import "./footer.css";
// import './fonts.css';
import { FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa";


function Footer  () {
  return (
    <footer className="bg-black text-white py-[4rem] px-[10rem]">
      <div className="container">

        <div className="flex flex-start gap-[5rem]">
          {/* Section 1 */}
          <div className='w-[25vw] mr-[4rem]'>

            <h2 className="text-[16px] my-3" style={{letterSpacing: '1px'}}>JOIN OUR WORLD</h2>
            <p className='text-[12px]' style={{letterSpacing: '2px'}}>Enter your email below to be the first to know about new collections and product launches.</p>
            <div className="mt-2 flex gap-4 flex-start">
              <input type="email" className="px-2 py-2 w-[400vw] h-[5vh]  bg-transparent focus:outline-none focus:border-black-400 text-gray-500 font-light border border-t-black border-l-black border-r-black border-b-white-200 placeholder-gray-300 " placeholder="Enter your email"/>
              <button type='submit' className=" text-white rounded border px-2 border-white-500 text-[12px]">SUBSCRIBE</button>
            </div>

            <div className="flex flex-start gap-5 mt-6 items-center justify-start">
              <h3 className="text-[14px] mt-2 ">Get social with us</h3>
              <a href='https://www.instagram.com/lovisajewellery/ '><FaInstagram size={20} /></a>
              <a href='https://www.facebook.com/lovisajewellery/?ref=br_rs '><FaFacebook size={20} /> </a>
              <a href='https://in.pinterest.com/lovisaofficial/ '><FaPinterest size={20} /></a>
            </div>

            <div className='flex flex-start gap-2 pt-10 w-[40vw]'>
            <a href="" className='text-[12px]  hover:underline text-white w-[13vw]'>terms & conditions</a><br />
            <a href="" className='text-[12px]  hover:underline text-white w-[13vw]'>Security & Privacy</a><br />
            <a href="" className='text-[12px]  hover:underline text-white'> © 2024 Lovisa</a><br />
            </div>
          </div>

          {/* Section 2 */}
          <div className='w-[10vw] mx-2'>
            <h2 className="text-[16px] my-3" style={{letterSpacing: '1px'}}>About us</h2>
            <a href="" className='text-[12px] hover:underline hover:bg-blue text-white"' >The Company</a><br />
            <a href="" className='text-[12px]  hover:underline hover:bg-blue text-white'>Investor Centre</a><br />
            <a href="" className='text-[12px]  hover:underline hover:bg-blue text-white'>Careers</a><br />
          </div>

          {/* Section 3 */}
          <div className='w-[15vw] mx-2'>
            <h2 className="text-[16px] my-3" style={{letterSpacing: '1px'}}>NEED HELP</h2>
            <a href="" className='text-[12px]  hover:underline hover:bg-blue text-white'>Contact Us</a><br />
            <a href="" className='text-[12px]  hover:underline hover:bg-blue text-white'>Help Centre</a><br />
            <a href="" className='text-[12px]  hover:underline hover:bg-blue text-white'>Shipping & Delivery</a><br />
            <a href="" className='text-[12px]  hover:underline hover:bg-blue text-white'>Returns & Exchanges</a><br />
            <a href="" className='text-[12px]  hover:underline hover:bg-blue text-white'>My Account</a><br />
          </div>

          {/* Section 4 */}
          <div className='w-[15vw] mx-2'>
            <h2 className="text-[16px] my-3" style={{letterSpacing: '1px'}}>DISCOVER</h2>
            <a href="" className='text-[12px]  hover:underline hover:bg-blue text-white'>Store Locator</a><br />
            <a href="" className='text-[12px]  hover:underline hover:bg-blue text-white'>Ear Piercing</a><br />
            <a href="" className='text-[12px]  hover:underline hover:bg-blue text-white'>Care & Size Guide</a><br />
            <a href="" className='text-[12px]  hover:underline hover:bg-blue text-white'>Gift Card</a><br />

          </div>

          {/* Section 5 */}
          <div className='w-[15vw] h-[20vh] flex items-center'>
            <a href="" className='text-[14px] hover:underline hover:bg-blue text-white'><p>Piercing Gift Card</p></a><br />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
