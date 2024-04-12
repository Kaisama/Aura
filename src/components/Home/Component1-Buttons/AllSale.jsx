import React, {useState} from 'react';
import ringImg from "../../../assets/images/ring.webp";
import beautyImg from "../../../assets/images/beauty.jpg";
import AllSaleCard from '../../Common/AllSaleCard';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';



function AllSale (){

    const [showOverlay, setShowOverlay] = useState(false);

    const handleImageClick = () => {
      setShowOverlay(!showOverlay);
    };
  

    const numRows = 10;
    const numCols = 6;

    const gridElements = [];

    for (let i = 0; i < numRows; i++) {
        const rowElements = [];

        for (let j = 0; j < numCols; j++) {
            rowElements.push(<AllSaleCard key={j} />);
        }

        gridElements.push(
            <div key={i} className="flex flex-row gap-[2rem]">
                {rowElements}
            </div>
        );
    }

    return(
        <>
            <div className="flex justify-center items-center flex-col my-[2rem]" >
                <h1 className=" text-center text-4xl mb-[1.5rem]">Mid Season Sale</h1>
                <p className='text-[14px]' style={{letterSpacing: '2px'}}>Mid-Season Sale has landed at Lovisa! Level up your jewellery collection with signature jewellery pieces and trending accessories, including pendant<br/><span className="block mx-auto text-center"> and chain necklaces hoop and huggie earrings hair accessories body jewellery and so much more.</span> </p>
       
                <div className="flex justify-center items-center my-[2rem] gap-[2rem]">
                {(() => {
                    const elements = [];
                    for (let i = 0; i < 6; i++) {
                    elements.push(
                        <div key={i} className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden">
                            <img src={ringImg} className="w-full h-full object-cover" alt="Ring" />
                        </div>
                        <p className='uppercase text-[12px]' style={{ letterSpacing: '1px' }}>Ring</p>
                        </div>
                    );
                    }
                    return elements;
                })()}
                </div>
                </div>




          {/* second section */}
         
 
          <div className='py-2 px-[5rem] pb-4'>
            <p>Showing <span style={{ fontWeight: 'bold' }}>1 - 60</span>  of 2006 Results</p>
          </div>
          

          <div className='px-[5rem]'> 
            {/* Cards */}
             {gridElements}
           </div>


        <div className='my-[3rem] mx-[10rem]'>
            <h1 className="font-thin text-2xl my-[1.5rem]">Mid-Season Sale - Nothing Over $5 T&Cs</h1>
            <p className="font-thin text-gray-500" style={{letterSpacing: '1px'}}>This promotional offer is valid online at www.lovisa.sg only and is subject to our standard terms and conditions accessible here, which you acknowledge and accept by purchasing any products. This offer is available online only, whilst stock lasts. This offer applies exclusively to selected styles and is subject to any other eligibility conditions advised to you on our website. We expressly reserve the right to alter or withdraw a promotion without notice at any time.</p>
        </div>


        <div className="my-[1rem] mt-[5rem]">
            <h1 className="font-bold text-2xl flex justify-center items-center">Follow us on Instagram</h1>
        </div>

        <div className='flex gap-[2rem] px-4'>
            {(() => {
                const elements = [];
                for (let i = 0; i < 6; i++) {
                elements.push(
                    <img
                    src={beautyImg}
                    className='w-[15.5rem] h-[17rem] transition-opacity duration-300 cursor-pointer'
                    onClick={handleImageClick}
                    />
                )}
                return elements;
            })()}
       </div>
          
        <div className="py-[2rem]">
            <h1 className=" flex justify-center items-center hover:underline text-grey-500 cursor-pointer">SHOW IT TO THE WORLD ON INSTAGRAM</h1>
            <p className="flex justify-center items-center hover:underline text-grey-500 cursor-pointer">#LOVISA @LOVISAJEWELLERY</p>
        </div>

        </>
        
    )

}

export default AllSale;