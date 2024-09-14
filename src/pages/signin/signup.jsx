import React, { useContext, useState } from 'react';
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
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[^\s]{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function nameFormating(name = "") {
    let formattedName = name.trim();
    formattedName =
      formattedName.charAt(0).toUpperCase() + formattedName.slice(1).toLowerCase();

    if (formattedName.includes(" ")) {
      let newName = "";
      let splitArr = formattedName.split(" ");
      splitArr.forEach((ele) => {
        newName +=
          ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase() + " ";
      });
      formattedName = newName.trim();
    }
    return formattedName;
  }

   function nameFormating2(name = "") {
    let formattedName = name.trim();
    formattedName =
      formattedName.charAt(0).toUpperCase() + formattedName.slice(1).toLowerCase();

    if (formattedName.includes(" ")) {
      let newName = "";
      let splitArr = formattedName.split(" ");
      splitArr.forEach((ele) => {
        newName +=
          ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase() + " ";
      });
      formattedName = newName.trim();
    }
    return formattedName;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProfile = {
      firstName: nameFormating(firstInputValue),
      lastName: nameFormating2(lastInputValue),
      email: emailInputValue,
      password: passwordInputValue,
    };

    if (invalidChars.test(firstInputValue)) {
      alert("Your first name contains special characters.");
      return;
    } else if (invalidChars.test(lastInputValue)) {
      alert("Your last name contains special characters.");
      return;
    } else if (!emailInputValue) {
      alert("Email is required.");
      return;
    } else if (!emailRegex.test(emailInputValue)) {
      alert("Please enter a valid email address.");
      return;
    } else if (dataUser.find((element) => element.email === emailInputValue)) {
      alert("This email already exists.");
      return;
    } else if (!passwordRegex.test(passwordInputValue)) {
      alert("Password must be at least 8 characters long and include both letters and numbers.");
      return;
    } else {
      setDataUser([...dataUser, newProfile]);
      console.log("wwwwwwwwwwwww", [...dataUser, newProfile]);

      navigate("/signin", {
        state: { notificationMessage: "Registration Successful!" },
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="pl-4 md:pl-[5vw] pt-[15vh] pb-[5vh]">
        <p className="text-3xl md:text-[40px]">Create Account</p>
        <p className="text-lg md:text-[20px] text-[#888888] font-semibold">
          Your Personal Details
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label htmlFor="firstName" className="text-sm md:text-base">First Name</label>
          <input
            value={firstInputValue}
            onChange={(e) => setFirstInputValue(nameFormating(e.target.value))}
            type="text"
            placeholder="First Name"
            className="w-full md:w-[70vw] border border-[#888888] text-[#888888] p-2 rounded-md"
          />
          <label htmlFor="lastName" className="text-sm md:text-base">Last Name</label>
          <input
            value={lastInputValue}
            onChange={(e) => setLastInputValue(nameFormating(e.target.value))}
            type="text"
            placeholder="Last Name"
            className="w-full md:w-[70vw] border border-[#888888] text-[#888888] p-2 rounded-md"
          />
          <label htmlFor="email" className="text-sm md:text-base">Email</label>
          <input
            value={emailInputValue}
            onChange={(e) => setEmailInputValue(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full md:w-[70vw] border border-[#888888] text-[#888888] p-2 rounded-md"
          />
          <label htmlFor="password" className="text-sm md:text-base">Password</label>
          <input
            value={passwordInputValue}
            onChange={(e) => setPasswordInputValue(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full md:w-[70vw] border border-[#888888] text-[#888888] p-2 rounded-md"
          />
          <div className="flex flex-col md:flex-row gap-3">
            <button className="text-black p-3 w-full md:w-32" type="submit">
              CREATE
            </button>
            <button className="text-[#616060] hover:text-[#e65540] w-full md:w-auto">
              or Return to Store
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};
