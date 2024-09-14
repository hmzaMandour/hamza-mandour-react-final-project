import React, { useContext, useState, useEffect } from 'react';
import { Navbar } from '../../layouts/navbar';
import { Footer } from '../../layouts/footer';
import { Mycontext } from '../../context';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const { dataUser, setDataUser } = useContext(Mycontext);
  const navigate = useNavigate();

  const [firstInputValue, setFirstInputValue] = useState("");
  const [lastInputValue, setLastInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");

  const invalidChars = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;

  
  useEffect(() => {
    console.log("Updated dataUser: ", dataUser);
  }, [dataUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProfile = {
      firstName: firstInputValue,
      lastName: lastInputValue,
      email: emailInputValue,
      password: passwordInputValue,
    };

    if (!firstInputValue) {
      alert("First name is required.");
      return;
    } else if (invalidChars.test(firstInputValue)) {
      alert("Your first name contains special characters.");
      return;
    } else if (!lastInputValue) {
      alert("Last name is required.");
      return;
    } else if (!emailInputValue) {
      alert("Email is required.");
      return;
    } else if (dataUser.find((element) => element.email === emailInputValue)) {
      alert("This email already exists.");
      return;
    } else if (!passwordInputValue) {
      alert("Password is required.");
      return;
    } else {
      setDataUser([...dataUser, newProfile]);
      console.log("wwwwwwwwwwwwww ", [...dataUser, newProfile]);

      navigate("/signin", {
        state: { notificationMessage: "Registration Successful!" },
      });
    }
  };

  return (
    <div>
      <Navbar />

      <div className='pl-[5vw] pt-[15vh] pb-[5vh]'>
        <p className='text-[40px]'>Create Account</p>
        <p className='text-[20px] text-[#888888] font-semibold'>Your Personal Details</p>

        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
          <label htmlFor="">First Name</label>
          <input
            value={firstInputValue}
            onChange={(e) => setFirstInputValue(e.target.value)}
            type="text"
            placeholder='First Name'
            className='w-[70vw]  border-[#f6f2f2] text-[#888888]'
          />
          <label htmlFor="">Last Name</label>
          <input
            value={lastInputValue}
            onChange={(e) => setLastInputValue(e.target.value)}
            type="text"
            placeholder='Last Name'
            className='w-[70vw]  border-[#888888] text-[#888888]'
          />
          <label htmlFor="">Email</label>
          <input
            value={emailInputValue}
            onChange={(e) => setEmailInputValue(e.target.value)}
            type="email"
            placeholder='Email'
            className='w-[70vw]  border-[#888888] text-[#888888]'
          />
          <label htmlFor="">Password</label>
          <input
            value={passwordInputValue}
            onChange={(e) => setPasswordInputValue(e.target.value)}
            type="password"
            placeholder='Password'
            className='w-[70vw]  border-[#888888] text-[#888888]'
          />
          <div className='flex gap-3'>
            <button type='submit' className='bg-slate-900 text-white p-3 w-32'>CREATE</button>
            <button className='text-[#616060] hover:text-[#e65540]'>or Return to Store</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};
