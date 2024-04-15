import React, { useState } from 'react';


function Cart() {
    const [isCartOpen, setIsCartOpen] = useState(true);

    const closeCart = () => {
        setIsCartOpen(false);
        document.body.classList.add('overflow-hidden');
    };
    return (
        <>
            <div>
                {/* Overlay-Fader */}
                {isCartOpen && <div onClick={closeCart} className='absolute top-0 left-0 w-[100vw] h-[100vh] bg-blue-900 bg-opacity-5 z-1'></div>}
                <div className={`relative transition-transform duration-300 ${isCartOpen ? 'translate-x-0' : '-translate-x-[-500px]'} bg-[#ffff] z-2 text-[#111111] h-[100vh] w-[29vw] ml-[71%] shadow-lg`}>
                    {/* Cart Header */}
                    <div className='absolute top-[-10.5rem] bg-[#ffff] h-[100vh]'>
                            <div className="bg-[#FCECE3] h-[9vh] w-[29vw] flex justify-end items-center px-4">
                                <button onClick={closeCart} className='text-[#111111] focus:outline-none'>
                                    <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />                         </svg>
                                </button>
                                <h2 className=' w-[25vw] text-[16px] tracking-tight text-center'>SHOPPING BAG</h2>
                                <div className='w-[2.6vw] h-[2.4vw] rounded-full bg-[#ffff] flex items-center justify-center'>0</div>
                            </div>
                        <div className='my-8 text-center uppercase text-[15px] leading-6'>
                            <h3>Your bag is empty.</h3>
                            <h3>Let's fix that.</h3>
                        </div>
                        <div className='flex flex-col items-center justify-center text-[12px]'>
                            <button className='bg-[#F5F5F5] w-[12vw] mb-4 py-3 text-center tracking-wider outline-none hover:bg-[#e4e3e3]'>SHOP RINGS</button>
                            <button className='bg-[#F5F5F5]  w-[12vw] mb-4 py-3 text-center tracking-wider outline-none hover:bg-[#e4e3e3]'>SHOP EARRINGS</button>
                            <button className='bg-[#F5F5F5] w-[12vw] mb-4 py-3 text-center tracking-wider outline-none hover:bg-[#e4e3e3]'>SHOP   NECKLACES</button>
                            <button className='bg-[#F5F5F5] w-[12vw] mb-4 py-3 text-center tracking-wider outline-none hover:bg-[#e4e3e3]'>SHOP HAIR</button>
                        </div>
                        <div className='flex justify-between tracking-wide px-4 mt-6 mb-2'>
                            <h3 className='font-bold text[10px] leading-6'>Sub-Total</h3>
                            <h3 className='leading-6'>$0.00 SGD</h3>
                        </div>
                        <div className='bg-[#FCECE3] h-[25vh] text-center uppercase tracking-wide'>
                            <h3 className='text-[12px] pt-5 pb-3 leading-6'>Free shipping on orders over $70.00 SGD!</h3>
                            {/* Horizontal line */}
                            <div className="mx-auto w-[15vw] border-b-4 rounded-sm border-white"></div>
                            <div className='flex justify-center'>
                                <div className='bg-[#111111] text-[#ffff] text-[14px] leading-6 tracking-wider text-center  uppercase p-3 mt-5 w-[26vw] hover:bg-[#ffff] hover:text-[#111111] border border-[#111111]'>Express Check - $0.00 SGD</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Cart;