import React, { useState } from 'react';
import BackgroundImage from "../../assets/images/jwellery.jpg"
import CartImage from "../../assets/images/cart_4308441.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const styles = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  const imageStyle = {
    width: '22px', // Adjust the width as needed
    height: '22px', // Adjust the height as needed
  };

  
const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalCards = 5; // Total number of cards
  
    const handlePrev = () => {
      setCurrentIndex(prevIndex => (prevIndex === 0 ? totalCards - 1 : prevIndex - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex(prevIndex => (prevIndex === totalCards - 1 ? 0 : prevIndex + 1));
    };
    const productDescriptions = [
        {
          description: "Lorem ipsum dolor sit amet consectetur .",
          price: "$99.99"
        },
        {
          description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          price: "$59.99"
        },
        {
          description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          price: "$129.99"
        },
        {
          description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          price: "$79.99"
        },
        {
          description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          price: "$149.99"
        }
      ];
  return (
    <>
    <div className=' flex justify-center items-center h-[50vh] w-full mt-5 gap-4'>
    <FontAwesomeIcon icon={faChevronLeft} className="absolute left-10 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={handlePrev} />
<div class='bg-red-100 flex flex-col justify-end h-[40vh] w-[17vw]'style={styles} >
<div className='bg-gray-100 h-[4vh] ' style={{ backgroundColor: 'rgba(128, 128, 128, 0.09)' }}>
    
<span className='flex justify-center items-center' style={{ width: '100%', height: '100%' }}>
  <img src={CartImage} alt="cart" style={imageStyle} />
</span>
<p className="text-center mt-2 font-light text-sm">{productDescriptions[currentIndex].description}</p>
            <p className="text-center ">{productDescriptions[currentIndex].price}</p>
</div>
  </div>
  <div class='bg-red-100 flex flex-col justify-end h-[40vh] w-[17vw]'style={styles} >
<div className='bg-gray-100 h-[4vh] ' style={{ backgroundColor: 'rgba(128, 128, 128, 0.09)' }}>
    
<span className='flex justify-center items-center' style={{ width: '100%', height: '100%' }}>
  <img src={CartImage} alt="cart" style={imageStyle} />
</span>
<p className="text-center mt-2 font-light text-sm">{productDescriptions[currentIndex].description}</p>
            <p className="text-center  ">{productDescriptions[currentIndex].price}</p>
</div>
  </div>
  <div class='bg-red-100 flex flex-col justify-end h-[40vh] w-[17vw]'style={styles} >
<div className='bg-gray-100 h-[4vh] ' style={{ backgroundColor: 'rgba(128, 128, 128, 0.09)' }}>
    
<span className='flex justify-center items-center' style={{ width: '100%', height: '100%' }}>
  <img src={CartImage} alt="cart" style={imageStyle} />
</span>
<p className="text-center mt-2 font-light text-sm">{productDescriptions[currentIndex].description}</p>
            <p className="text-center ">{productDescriptions[currentIndex].price}</p>
</div>
  </div>
  <div class='bg-red-100 flex flex-col justify-end h-[40vh] w-[17vw]'style={styles} >
<div className='bg-gray-100 h-[4vh] ' style={{ backgroundColor: 'rgba(128, 128, 128, 0.09)' }}>
    
<span className='flex justify-center items-center' style={{ width: '100%', height: '100%' }}>
  <img src={CartImage} alt="cart" style={imageStyle} />
</span>
<p className="text-center mt-2 font-light text-sm">{productDescriptions[currentIndex].description}</p>
            <p className="text-center ">{productDescriptions[currentIndex].price}</p>
</div>
  </div>
  <div class='bg-red-100 flex flex-col justify-end h-[40vh] w-[17vw]'style={styles} >
<div className='bg-gray-100 h-[4vh] ' style={{ backgroundColor: 'rgba(128, 128, 128, 0.09)' }}>
    
<span className='flex justify-center items-center' style={{ width: '100%', height: '100%' }}>
  <img src={CartImage} alt="cart" style={imageStyle} />
</span>
<p className="text-center mt-2 font-light text-sm">{productDescriptions[currentIndex].description}</p>
            <p className="text-center ">{productDescriptions[currentIndex].price}</p>
</div>
  </div>
  <FontAwesomeIcon icon={faChevronRight} className="absolute right-10 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={handleNext} />
     
  
  
</div>

    </>
  )
}

export default Testimonial
