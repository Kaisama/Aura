import React, { useState } from "react";
import useRegister from "../../hooks/useRegister";

function Register() {

    const[inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const {loading, register} = useRegister()

    const handleSubmit = async(e) => {
        e.preventDefault();
        await register(inputs)
    }

  return (
    <>
        <div className="flex my-40 mx-[5rem]">

          <div className="mr-[7rem] w-[60vw]">
              <h1 className=' text-xl flex-start leading-1 font-thin tracking-wide'>Create Account</h1>
                
            <form onSubmit={handleSubmit}> 

             <div className="my-10 flex">
                <div>
                    <input 
                    type="text" id="name"  name="name"  
                    value={inputs.firstName}
                    onChange={(e) => setInputs({...inputs, firstName: e.target.value})}
                    className="p-2 w-[18vw] text-sm block flex-start border-b border-gray-300 focus:border-black focus:border-opacity-100 focus:outline-none focus:ring-black-500" placeholder="FIRST NAME"/>
                </div>
                <div>
                    <input 
                    type="text" id="name"  name="name" 
                    value={inputs.lastName}
                    onChange={(e) => setInputs({...inputs, lastName: e.target.value})} 
                    className="p-2 mx-4 w-[18vw] text-sm block flex-start border-b border-gray-300 focus:border-black focus:border-opacity-100 focus:outline-none focus:ring-black-500" placeholder="LAST NAME"/>
                </div>
             </div>


              <div className="my-10">
                <input 
                type="email" id="email"  name="email"  
                value={inputs.email}
                onChange={(e) => setInputs({...inputs, email: e.target.value})}
                className="p-2 w-[37vw] text-sm block flex-start border-b border-gray-300 focus:border-black focus:border-opacity-100 focus:outline-none focus:ring-black-500" placeholder="EMAIL"/>
              </div>

              <div className="my-10">
                <input 
                value={inputs.password}
                onChange={(e) => setInputs({...inputs, password: e.target.value})}
                type="text"  id="password" name="password" className="p-2  w-[37vw] text-sm block flex-start  border-b border-gray-300 focus:border-black focus:border-opacity-100 focus:outline-none focus:ring-black-500"  placeholder="PASSWORD"/>
              </div>

              <button type="submit" className="px-4 py-3 my-4 text-sm  w-[37vw] bg-white text-gray-600 tracking-wider hover:bg-black hover:text-white transition-colors duration-300    border border-t-gray-400 border-r-gray-400 border-l-gray-400 border-b-gray-400">
                CREATE ACCOUNT
             </button>
            </form>  

            <p className="text-center text-gray-700">By creating an account, you agree to our rewards program Terms and Conditions</p>  

          </div>

          <div className="border-[0.90px] border-gray-300 h-[47vh]"></div>
  
          <div className="ml-[7rem]">
                <h1 className='text-xl leading-1 font-thin tracking-wide'>Create your Lovisa Account</h1>
                <p className='text-[14px] my-7 tracking-wider'>Sign-up for a Lovisa account today for easy order tracking,access to your order history and address management.</p>
                <p className='text-[14px] my-7 tracking-wider'>Have you shopped with us before? You will be able to retrieve your past purchases information if you use the same email address to sign-up as the one used at time of checkout.</p>
          </div>

        </div>
    </>
  );
}

export default Register;