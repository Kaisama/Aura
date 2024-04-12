import React from 'react'
import Component1 from '../components/Home/Component1'
import Testimonial from "../components/Home/Testimonial"
import Imagegallary from "../components/Home/Imagegallary"
import Jwelleryboxcards from "../components/Home/Jwelleryboxcards"
import Stylecards from "../components/Home/Stylecards"
import Mylovisacards from "../components/Home/Mylovisacards"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck , faExchangeAlt, faSms} from '@fortawesome/free-solid-svg-icons';
import Bestseller from "../assets/images/bestseller-img.jpg";
import Cartilage from "../assets/images/bg-3.jpg";
import Image from "../assets/images/img.jpg"


function Home() {
  return (
    <div>
      <Component1/>
      <div className='pt-[7rem] px-20 flex items-center justify-between'>
      <div className='text-2xl'>NEW ARRIVALS</div>
<span className=" text-sm font-light">
          <u>SHOP NOW</u></span>
          </div>
<Testimonial/>
<img className='mt-[3%] w-[full] 'src={Image} alt="example" />
<Imagegallary/>
<div className='absolute mt-10  ml-20 text-2xl  '>JWELLERY BOXES</div>
<Jwelleryboxcards/>

<div className='relative bg-gray-100 h-[58vh] mx-[4vw] mt-[20vh]'>
    <img className="absolute top-0 right-0 h-full w-1/2 object-cover" src={Bestseller} alt="bestseller"/>
    <div className="absolute top-0  h-full w-1/2 flex flex-col  items-center justify-center">
    <div className="text-center">
    <span className="text-4xl font-semi">BESTSELLERS</span>
  </div>
  <div className="mt-4 text-center">
    <span>Discover our most loved styles! Get your hands on these bestselling accessories and jewellery staples.</span>
  </div>
  <button className="bg-black   text-white w-[12vw] h-[30px] mt-6 py-2 px-4 rounded flex items-center justify-center hover:bg-gray-400 transition duration-300">
  Shop Now
</button>
        </div>
           </div>
           <div className=' mt-10 ml-10 text-2xl'>DELIVERY & PAYMENTS</div>
           <div className='w-[full] h-[30vh]'>
           <div className='w-[full] h-[10vh] mt-10 flex px-40'>
    <div className='h-[15vh] w-[35vw] border-r-2 border-gray-400 flex gap-3 justify-center items-center'>
        <div class="rounded-full border  bg-white p-2">
        <div className="rounded-full bg-white py-2 px-1">
            <FontAwesomeIcon icon={faTruck}  size='2xl'/>
          </div>
        </div>
        <span className='text-lg'>SHIPPED WITHIN 5 DAYS </span>
    </div>
    <div className='h-[15vh] w-[35vw] border-r-2 border-gray-400 flex  gap-2 justify-center items-center'>
        <div class="rounded-full bg-white p-2">
        <div className="rounded-full border  bg-white  py-2 px-2">
            <FontAwesomeIcon icon={faExchangeAlt}  size='2xl'/>
          </div>
        </div>
        <span className='text-lg'>EASY EXCHANGE & RETURNS </span>
    </div>
    <div className='h-[15vh] w-[35vw] border-gray-500 flex  gap-3 justify-center items-center'>
        <div class="rounded-full bg-white p-2">
        <div className="rounded-full border  bg-white py-2 px-2">
            <FontAwesomeIcon icon={faSms}  size='2xl'/>
          </div>
        </div>
        <span className='text-lg' >EXCLUSIVE SMS DEALS</span>
    </div>
</div>


           </div>
           <div className='relative bg-gray-100 h-[58vh]  mx-[4vw] '>
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
  <Stylecards/>
  <div className='absolute  text-2xl w-full text-center mt-20'>#MYLOVISA</div>
<Mylovisacards/>

<div className='pt-[2rem] pb-[5rem] text-gray-500'>
  <div className=' text-lg w-full text-center uppdercase'>show it to the world on instagram </div>
  <div className=' text-lg w-full text-center '>@MYLOVISA @LOVISAJWELLERY </div>
</div>
    </div>
  )
}

export default Home
