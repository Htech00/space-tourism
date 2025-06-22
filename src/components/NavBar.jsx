import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FiMenu, FiX } from "react-icons/fi"; // Icons for hamburger and close
   const navItems = [
        { label: "HOME", path: "/" },
        { label: "DESTINATION", path: "/destination" },
        { label: "CREW", path: "/crew" },
        { label: "TECHNOLOGY", path: "/technology" },
    ];

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className='flex items-center justify-center ml-[55px] mt-[40px] absolute z-2 '>
        <img src="/images/logo.svg" className='hidden sm:block'  alt="" />
        <img src="/images/logo.svg" className='sm:hidden block h-[30px] w-[30px]'  alt="" />

        {/* Desktop NavBar */}
       
       <div className='sm:block hidden w-[350px] h-[1px] bg-[#FFFFFF] opacity-[25.15%] absolute left-[12%] right-[12%] z-10'></div> 
       <div className=' sm:block hidden ml-[55px] bg-[#FFFFFF]/6 backdrop-blur   pr-[50px] pl-[50px] py-[39px] relative z-2 left-[36.5%] right-[36.5%]'>
            <ul className='flex gap-[60px] font-normal '>
                <li className='text-white'>
                    <Link to="/" className='flex gap-[13px]'>
                        <p className='font-[700] text-[16px] tracking-[2.7px]'>00</p>
                        <p className='font-[400] text-[16px] tracking-[2.7px]'>HOME</p>
                    </Link>
                </li>
                <li className='text-white'>
                    <Link to="/destination" className='flex gap-[13px]'>
                        <p className='font-[700] text-[16px] tracking-[2.7px]'>01</p>
                        <p className='font-[400] text-[16px] tracking-[2.7px]'>DESTINATION</p>
                    </Link>
                </li>
                <li className='text-white'>
                    <Link to="/crew" className='flex gap-[13px]'>
                        <p className='font-[700] text-[16px] tracking-[2.7px]'>02</p>
                        <p className='font-[400] text-[16px] tracking-[2.7px]'>CREW</p>
                    </Link>
                </li>
                <li className='text-white'>
                    <Link to="/technology" className='flex gap-[13px]'>
                        <p className='font-[700] text-[16px] tracking-[2.7px]'>03</p>
                        <p className='font-[400] text-[16px] tracking-[2.7px]'>TECHNOLOGY</p>
                    </Link>
                </li>
            </ul>
       </div>

       {/* Hamburger Icon */}
      <div className="sm:hidden z-40 flex w-[300px]  justify-end">
       
        {isOpen ? (
          <FiX onClick={toggleMenu} size={30}  className="text-white cursor-pointer" />
        ) : (
          <FiMenu onClick={toggleMenu} size={30} className="text-white cursor-pointer" />
        )}
      </div>



      {/* Mobile Menu */}
      {isOpen && (
        <>
            {/* Blurry Background Overlay */}
            <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10 sm:hidden"
            onClick={() => setIsOpen(false)} // Clicking it closes menu
            ></div>
            <div className="fixed top-0 right-0 h-full w-2/3 bg-white/10 backdrop-blur-lg p-6 z-20 transition-all duration-300 sm:hidden ">
                <ul className="flex flex-col gap-8 text-white text-lg mt-20">
                    {navItems.map((item, index) => (
                    <li key={item.label} className=" hover:bg-gray-500 w-full">
                        <Link to={item.path} className="flex gap-4 hover:bg-gray-500 w-full" onClick={() => setIsOpen(false)}>
                        <p className="font-bold tracking-widest">0{index}</p>
                        <p>{item.label}</p>
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>
        </>
        
      )}
    </nav>
  )
}

export default NavBar