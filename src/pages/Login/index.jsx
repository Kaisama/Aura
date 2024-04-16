import React from "react";

function Login() {
  return (
    <div>
        <div className="flex justify-evenly mx-[5rem]  my-[3rem]">

            <div className="">

                <h1 className=' text-xl flex-start leading-1 font-thin tracking-wide'>Returning Customers</h1>
                <br></br>
                
                
              <div className="">
              <input 
              type="text" id="name"  name="name"  className="p-2 w-[31vw] text-sm block flex-start border-b border-gray-300 focus:border-black focus:border-opacity-100 focus:outline-none focus:ring-black-500" placeholder="EMAIL"/>
             </div>
             <br></br>

             <div className="">
             <input 
             type="email"  id="email" name="email" className="p-2  w-[31vw] text-sm block flex-start  border-b border-gray-300 focus:border-black focus:border-opacity-100 focus:outline-none focus:ring-black-500"  placeholder="PASSWORD"/>
             </div>
             <br></br>
             <br></br>

             <button className="px-4 py-2 text-sm  w-[31vw] bg-white text-gray-600  tracking-wide hover:bg-black hover:text-white transition-colors duration-300    border border-t-gray-400 border-r-gray-400 border-l-gray-400 border-b-gray-400">
                        SIGN IN 
            </button>

           
            <div className="mx-[7rem] "><br></br>
                <p className=" text-gray-400 tracking-wider ">Forgot your password?</p>
                <p className=' pb-2 border-b border-gray-400 w-17'></p>
            </div>


            </div>

            <div className="border-[0.90px] border-gray-300  h-[47vh]"></div>
    
           




            <div>
                <h1 className=' text-xl  leading-1 font-thin tracking-wide flex-start'>Create your Lovisa Account</h1><br></br>
                <p className='  text-[14px]  text-gray-500  flex-start'>Sign-up for a Lovisa account today for easy order tracking, <br></br>access to your order history and address management.</p>
                <br></br>
                <br></br>
                
                
            <button className=" px-2 py-2 text-sm tracking-wider  bg-white text-gray-600  hover:bg-black hover:text-white transition-colors duration-300 border border-t-gray-400 border-r-gray-400 border-l-gray-400 border-b-gray-400">
    CREATE ACCOUNT
</button>


            </div>

        </div>
     
    </div>
  );
}

export default Login;