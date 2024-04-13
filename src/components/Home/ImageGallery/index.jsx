import React from 'react';
import Image1 from '../../../assets/images/home/bg-6.jpg';
import Image2 from '../../../assets/images/home/bg-7.jpg';

const ImageGallery = () => {
  return (
    <>
      <div className="flex gap-3 mx-20 mt-20">
        {/* Large Image */}
        <div className="w-1/2 flex flex-col relative">
          <div className="">
            <img src={Image1} alt="Main" className="w-full h-[92vh] object-cover rounded" />
            <button className="absolute bottom-0 w-[10vw] text-sm right-0 m-4 bg-white text-black py-1 px-1 rounded">
              Explore Jewelry
            </button>
          </div>
        </div>
        
        {/* Grid of Smaller Images */}
        <div className="w-1/2 grid grid-cols-2 gap-3">
          <div className="relative">
            <img src={Image2} alt="Image 2" className="w-full h-[45vh] object-cover rounded" />
            <button className="absolute bottom-0 w-[10vw] text-sm right-0 m-4 bg-white text-black py-1 px-1 rounded">
              Explore Jewelry
            </button>
          </div>
          <div className="relative">
            <img src={Image1} alt="Image 3" className="w-full h-[45vh] object-cover rounded" />
            <button className="absolute bottom-0 w-[10vw] text-sm right-0 m-4 bg-white text-black py-1 px-1 rounded">
              Explore Jewelry
            </button>
          </div>
          <div className="relative">
            <img src={Image2} alt="Image 2" className="w-full h-[45vh] object-cover rounded" />
            <button className="absolute bottom-0 w-[10vw] text-sm right-0 m-4 bg-white text-black py-1 px-1 rounded">
              Explore Jewelry
            </button>
          </div>
          <div className="relative">
            <img src={Image1} alt="Image 3" className="w-full h-[45vh] object-cover rounded" />
            <button className="absolute bottom-0 w-[10vw] text-sm right-0 m-4 bg-white text-black py-1 px-1 rounded">
              Explore Jewelry
            </button>
          </div>
          {/* Add more grid items as needed */}
        </div>
      </div>
    </>
  );
}

export default ImageGallery;