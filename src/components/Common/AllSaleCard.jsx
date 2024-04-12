import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart  } from '@fortawesome/free-solid-svg-icons'
import neckImg from "../../assets/images/neck.webp"



function AllSaleCard() {
  return (
    <>
    <div className='py-[2rem]' style={{fontWeight: '400'}}>
      <div className='relative'>
            <img src={neckImg} className='w-[15vw] h-[40vh]'/>
            <p className="absolute top-[12px] text-black bg-pink-200 px-4">Sale</p>
            <FontAwesomeIcon icon={faHeart}  className="absolute top-[12px] right-[12px] text-white"/>
        </div>
          
        <div className=''>
            <p className="text-[14px] py-[3px]">Rhodium Diamante Leaf Patterned...</p>
        
            <div className="flex flex-row items-center gap-[2.5rem] py-1">
                <div className='flex gap-2 items-center'>
                    <p className="text-red-500">$ 19.00</p>
                    <del className="text-gray-400 text-[13px]">$ 25.00</del>
                </div>
                <div className="border border-red-500 text-[13px] px-1 ml-[25px] ">
                    <p className="text-red-500">80% off</p>
                </div>
            </div>
        </div>

        <div className="flex items-center gap-[2px]">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
    
            <p className="ml-[3rem] italic text-gray-700 text-sm"> 4.7(7)</p>
        </div>

      </div>  
    </>
  )
}

export default AllSaleCard
