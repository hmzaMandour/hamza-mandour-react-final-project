import React, { useContext, useState } from 'react';
import { Navbar } from '../../layouts/navbar';
import { Footer } from '../../layouts/footer';
import { Mycontext } from '../../context';
import { useNavigate } from 'react-router-dom';

export const Signin = () => {
    const navigate = useNavigate();
    const { dataUser } = useContext(Mycontext);  
    console.log("hhhhhhhhhhhhhh", dataUser); 

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const user = dataUser.find(
            (ele) => ele.email.trim().toLowerCase() ===  email.trim().toLowerCase() && ele.password === password.trim()
        );

        if (user) {
            alert("Login successful!");
        } else {
            alert("Invalid email or password. Please try again.");
        }
    };

    return (
        <div>
            <Navbar />

            <div className='flex flex-col md:flex-row gap-9 pt-[22vh] pb-[7vh] px-4 md:px-8'>
                <div className='flex flex-col gap-4 border border-[#888888] p-4 w-full md:w-1/2'>
                    <p className='text-[32px] md:text-[40px]'>New Customer</p>
                    <p className='text-[16px] md:text-[20px] text-[#888888] font-semibold'>Register Account</p>
                    <p className='text-[#888888] text-sm md:text-base w-full md:w-[40vw]'>
                        By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
                    </p>
                    <button onClick={() => { navigate(`/signup`) }} className='bg-black text-white p-3  md:w-36'>CONTINUE</button>
                </div>

                <div className='border border-[#888888] p-4 w-full md:w-1/2'>
                    <p className='text-[32px] md:text-[40px]'>Returning Customer</p>
                    <p className='text-[16px] md:text-[20px] text-[#888888] font-semibold'>I am a returning customer</p>

                    <form onSubmit={handleLogin} className='flex flex-col gap-2'>
                        <label htmlFor="email" className='text-sm md:text-base'>Email</label>
                        <input 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            type="email" 
                            placeholder='Email' 
                            className='text-[#888888] w-full md:w-[40vw] p-2 border border-gray-300 rounded-md' 
                            required
                        />
                        <label htmlFor="password" className='text-sm md:text-base'>Password</label>
                        <input 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            type="password" 
                            placeholder='Password' 
                            className='text-[#888888] w-full md:w-[40vw] p-2 border border-gray-300 rounded-md' 
                            required
                        />

                        <p className='text-[#616060] hover:text-[#e65540] cursor-pointer text-sm md:text-base'>Forgot your password?</p>

                        <div className='flex flex-col md:flex-row gap-3'>
                            <button type="submit" className='text-black p-3 w-full md:w-32'>SIGN IN</button>
                            <button className='text-[#616060] hover:text-[#e65540] text-sm md:text-base'>or Return to Store</button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
};
