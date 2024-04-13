import React, {useState} from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { BsHeart } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoBagHandleOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import LovisaLogo from "../../../assets/images/home/LovisaLogo.jpeg"
import { Link } from 'react-router-dom';

import NewHover from '../../NavHover/NewHover';
import AccessoriesHover from "../../NavHover/AccessoriesHover";
import GiftsHover from '../../NavHover/GiftsHover';
import PiercingHover from '../../NavHover/PiercingHover';
import SaleHover from '../../NavHover/SaleHover';
import JewelleryHover from '../../NavHover/JewelleryHover';



function Header() {

  const [showComponent, setShowComponent] = useState(null);

  const underLineCSS = {
    textUnderlineOffset: '4px',
    letterSpacing: '2px'
  }


  return (
    <div className='text-[12px]'>

      {/* 1. Announcement Bar */}
      <div className='bg-black text-[0.75rem] text-white text-center py-3 tracking-widest'>
        <p>Travel in Style! Shop 30% Off All Jewellery Boxes & Cases. ❤️| <span className='underline'>SHOP NOW</span></p>
      </div>

      {/* 2. Components/Pages */}
      <div className='sticky top-0 z-100 bg-white'>
      <div className='flex items-center align-center justify-between px-[5.5rem] py-[1.5rem] uppercase text-[#111111]'>
        <div className='flex flex-start gap-[2.5rem]'>
           <Link to = "/search">
              <div className='flex gap-1.5 items-center cursor-pointer'>
                  <SearchRoundedIcon className=''/>
                  <p style={underLineCSS}>search</p>
              </div>
            </Link>  

            <Link to = "/find-store">
              <div className='flex gap-2 items-center cursor-pointer'>
                  <IoLocationOutline className='h-[1.5rem] w-[1.25rem]'/>
                  <p style={underLineCSS}>find a store</p>
              </div>
            </Link>

            <Link to = "/login">
              <div className='flex gap-2 items-center cursor-pointer'>
                <LuUser className='h-[1.75rem] w-[1.25rem]'/>
                <p style={underLineCSS}>Log in</p>
              </div>
            </Link>

        </div>

        <div>
          <img src={LovisaLogo} alt='Lovisa Logo'/>
        </div>

        <div className='flex flex-start items-center gap-[2.5rem]'>

          <Link to = '/wishlist'>
            <div className='flex gap-0.5 items-center cursor-pointer'>
              <BsHeart className='w-[1.75rem] h-[1rem]'/>
              <p style={underLineCSS}>wishlist : 0</p>
            </div>
          </Link> 

          <Link to = '/cart'>
            <div className='flex gap-2 items-center cursor-pointer'>
            <IoBagHandleOutline className=' h-[1.75rem] w-[1.5rem]'/>
              <p style={underLineCSS}>cart: 0</p>
            </div>
          </Link>  
          
        </div>
      </div>

      {/* 3. Navigation Menu */}

      <div className='uppercase flex justify-center gap-[4rem] text-[#333333]'>

        <div onMouseEnter={() => setShowComponent('new')}>
          <Link to='/new'>
            <p className='hover:text-[#fc6161] hover:underline transition-colors duration-300' style={underLineCSS}>new</p>
          </Link>
        </div>

        <div onMouseEnter={() => setShowComponent('jewellery')}>
          <Link to='/jewellery'>
            <p className='hover:text-[#fc6161] hover:underline transition-colors duration-300' style={underLineCSS}>jewellery</p>
          </Link>
        </div>

        <div onMouseEnter={() => setShowComponent('accessories')}>
          <Link to='/accessories'>
            <p className='hover:text-[#fc6161] hover:underline transition-colors duration-300' style={underLineCSS}>accessories</p>
          </Link>
        </div>

        <div onMouseEnter={() => setShowComponent('gifts')}>
          <Link to='/gifts'>
            <p className='hover:text-[#fc6161] hover:underline transition-colors duration-300' style={underLineCSS}>gifts</p>
          </Link>
        </div>

        <div onMouseEnter={() => setShowComponent('piercing')}>
          <Link to='/piercing'>
            <p className='hover:text-[#fc6161] hover:underline transition-colors duration-300' style={underLineCSS}>piercing</p>
          </Link>
        </div>
        
        <div onMouseEnter={() => setShowComponent('sale')}>
          <Link to='/sale'>
            <p className='hover:text-[#fc6161] hover:underline transition-colors duration-300' style={underLineCSS}>sale</p>
          </Link>
      </div>

      </div>
      </div>

      {/* 4. On hover */}

      <div className='absolute z-10 bg-white w-[100%]'>
        {showComponent === 'new' && <NewHover setShowComponent={setShowComponent}/>}
        {showComponent === 'jewellery' && <JewelleryHover setShowComponent={setShowComponent}/>}
        {showComponent === 'accessories' && <AccessoriesHover setShowComponent={setShowComponent}/>}
        {showComponent === 'gifts' && <GiftsHover setShowComponent={setShowComponent}/>}
        {showComponent === 'piercing' && <PiercingHover setShowComponent={setShowComponent}/>}
        {showComponent === 'sale' && <SaleHover setShowComponent={setShowComponent}/>}
      </div>

    </div>
  )
}

export default Header
