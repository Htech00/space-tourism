import React from 'react'
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav className='flex items-center ml-[55px] mt-[40px] absolute z-2 '>
        <img src="/public/images/logo.svg"  alt="" />
       
       <div className='w-[350px] h-[1px] bg-[#FFFFFF] opacity-[25.15%] absolute left-[12%] right-[12%] z-10'></div> 
       <div className=' ml-[55px] bg-[#FFFFFF]/6 backdrop-blur flex  pr-[50px] pl-[50px] py-[39px] relative z-2 left-[36.5%] right-[36.5%]'>
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
    </nav>
  )
}

export default NavBar