import React, { useState } from 'react';

function ImageSlider({images}) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleImages = 5;
    const totalImages = images.length;

    const handleNext = () => {
        if (currentIndex + visibleImages < totalImages) {
            setCurrentIndex(currentIndex + visibleImages);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - visibleImages);
        }
    };

    return (
        <>
            <div className="flex items-center justify-center my-8 mx-[8%]">
                <button onClick={handlePrev} className={`px-4 py-2 mx-2 text-white focus:outline-none ${currentIndex === 0 ? 'invisible' : ''}`}>
                    <svg aria-hidden="true" focusable="false" role="presentation" className="w-[30px] h-[30px]" viewBox="0 0 24 24" style={{ transform: 'rotate(180deg)' }}><path d="M9.984 6l6 6-6 6-1.406-1.406L13.172 12 8.578 7.406z" stroke="#000000" strokeWidth="0"></path></svg>
                </button>
                <div className="flex overflow-hidden">
                    <div className="flex transition-transform duration-300 gap-3" style={{ transform: `translateX(-${currentIndex * (100 / visibleImages)}%)` }}>
                        {images.map((image, index) => (
                            <div key={index} className="min-w-[16.666%] relative">
                                <img src={image.url} alt={`Slide ${index}`} className="w-full h-[43vh]" />
                                {/* Overlay */}
                                <div className="absolute top-[80%] inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 text-[#131010] h-8 border-[#000000]">
                                    <img src="https://www.lovisa.sg/cdn/shop/t/544/assets/shopping-bag.svg?v=107314610491974843911712550882" alt="Shopping Bag" className="w-4 h-4" />
                                </div>
                                <p className='text-start text-sm text-[#333333] leading-6'>
                                    {image.heading.length > 33 ? `${image.heading.substring(0, 20)}...` : image.heading}
                                </p>
                                <p className='text-start text-sm text-[#333333] leading-6'>
                                    {image.price}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={handleNext} className={`px-4 py-2 mx-2 text-white focus:outline-none ${currentIndex + visibleImages >= totalImages ? 'invisible' : ''}`}>
                    <svg aria-hidden="true" focusable="false" role="presentation" className="w-[30px] h-[30px]" viewBox="0 0 24 24"><path d="M9.984 6l6 6-6 6-1.406-1.406L13.172 12 8.578 7.406z" stroke="#000000" strokeWidth="0"></path></svg>
                </button>
            </div>
        </>
    );
}

export default ImageSlider;
