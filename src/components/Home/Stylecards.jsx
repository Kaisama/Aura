import React from 'react'
import Cardimg from '../../assets/images/bg-4.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Stylecards = () => {
  return (
  <>
    <div className='absolute mt-20 left-[4vw] text-2xl  '>STYLE CHANNEL</div>
  <div className='mt-[17vh] h-[45vh] w-full flex gap-5 justify-center items-center '>
  <div className='relative h-[50vh] w-[22vw] rounded-lg border border-gray-400 p-5 flex flex-col'>
    <img src={Cardimg} alt="Card Image" className="w-full h-[65%] object-cover rounded" />
    <div className="p-2">festival outfit ideas for 2024</div>
    <div className="p-2">Get festival ready....</div>
    <div className="absolute bottom-0 left-6 p-2 underline">
    <span className="mr-1">Read more</span>
    <FontAwesomeIcon icon={faAngleRight} />
    </div>
  </div>
  <div className='relative h-[50vh] w-[22vw] rounded-lg border border-gray-400 p-5 flex flex-col'>
    <img src={Cardimg} alt="Card Image" className="w-full h-[65%] object-cover rounded" />
    <div className="p-2">festival outfit ideas for 2024</div>
    <div className="p-2">Get festival ready....</div>
    <div className="absolute bottom-0 left-6 p-2 underline">
    <span className="mr-1">Read more</span>
    <FontAwesomeIcon icon={faAngleRight} />
    </div>
  </div>
  <div className='relative h-[50vh] w-[22vw] rounded-lg border border-gray-400 p-5 flex flex-col'>
    <img src={Cardimg} alt="Card Image" className="w-full h-[65%] object-cover rounded" />
    <div className="p-2">festival outfit ideas for 2024</div>
    <div className="p-2">Get festival ready....</div>
    <div className="absolute bottom-0 left-6 p-2 underline">
    <span className="mr-1">Read more</span>
    <FontAwesomeIcon icon={faAngleRight} />
    </div>
  </div>
  <div className='relative h-[50vh] w-[22vw] rounded-lg border border-gray-400 p-5 flex flex-col'>
    <img src={Cardimg} alt="Card Image" className="w-full h-[65%] object-cover rounded" />
    <div className="p-2">festival outfit ideas for 2024</div>
    <div className="p-2">Get festival ready....</div>
    <div className="absolute bottom-0 left-6 p-2 underline">
    <span className="mr-1">Read more</span>
    <FontAwesomeIcon icon={faAngleRight} />
    </div>
  </div>
</div>


  </>
  )
}

export default Stylecards
