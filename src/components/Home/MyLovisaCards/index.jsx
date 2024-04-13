import React from 'react';
import Photo from '../../../assets/images/home/bg-5.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const MyLovisaCards = () => {
  return (
    <div className='flex justify-center items-center w-full h-[30vh] mt-40 relative'>
      <div className='h-[26vh] w-[17vw] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${Photo})`, margin: '1px', backgroundSize: 'cover' }}></div>
      <div className='h-[26vh] w-[17vw] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${Photo})`, margin: '1px', backgroundSize: 'cover' }}></div>
      <div className='h-[26vh] w-[17vw] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${Photo})`, margin: '1px', backgroundSize: 'cover' }}></div>
      <div className='h-[26vh] w-[17vw] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${Photo})`, margin: '1px', backgroundSize: 'cover' }}></div>
      <div className='h-[26vh] w-[17vw] bg-cover bg-center bg-no-repeat relative' style={{ backgroundImage: `url(${Photo})`, margin: '1px', backgroundSize: 'cover' }}>
        
        {/* Instagram Icon */}
        <div className='absolute inset-0 bg-red-100 opacity-0 hover:opacity-100 flex justify-center items-center transition-opacity duration-300'>
          {/* <FontAwesomeIcon icon={faInstagram} size="5x" color="#000" /> */}
        </div>
        
      </div>
      
      {/* Chevron Right Icon */}
      {/* <div className='ml-10'>
        <FontAwesomeIcon icon={faChevronRight} size="2x" />
      </div> */}
    </div>
  );
}
export default MyLovisaCards;
