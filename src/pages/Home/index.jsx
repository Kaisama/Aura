import React from 'react'
import MainSection from '../../components/Home/MainSection'
import Testimonials from "../../components/Home/Testimonials"
import ImageGallary from "../../components/Home/ImageGallery"
import JewelleryBoxCards from "../../components/Home/JewelleryBoxCards"
import BestSellers from "../../components/Home/BestSellers"
import StyleCards from "../../components/Home/StyleCards"
import MyLovisaCards from "../../components/Home/MyLovisaCards"
import CartilagePiercings from "../../components/Home/CartilagePiercings";
import Image from "../../assets/images/home/img.jpg";



function Home() {
  return (
    <>
      <MainSection/>
      <div className='pt-[7rem] px-20 flex items-center justify-between'>
      <div className='text-2xl'>NEW ARRIVALS</div>
        <span className=" text-sm font-light">
          <u>SHOP NOW</u>
        </span>
      </div>

      <Testimonials/>
      <img className='mt-[3%] w-[full]'src={Image} alt="example" />
      <ImageGallary/>
      <div className='absolute mt-10  ml-20 text-2xl'>JWELLERY BOXES</div>
      <JewelleryBoxCards/>
      <BestSellers/>
      <CartilagePiercings/>
      <StyleCards/>
      <div className='absolute  text-2xl w-full text-center mt-20'>#MYLOVISA</div>
      <MyLovisaCards/>

      <div className='pt-[2rem] pb-[5rem] text-gray-500'>
        <div className=' text-lg w-full text-center uppdercase'>show it to the world on instagram </div>
        <div className=' text-lg w-full text-center '>@MYLOVISA @LOVISAJWELLERY </div>
      </div>
    </>
  )
}

export default Home
