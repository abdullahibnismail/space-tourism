import React, {useState} from 'react'
import { Link } from "react-router-dom";

import ResponsiveNav from './ResponsiveNav';

export default function Navbar() {
  const [active, setactive] = useState('home')
  const [openNav, setopenNav] = useState(false)
  
  return (
    <>
    <div className='h-[96px] mt-[40px] z-50 relative '>
      <div className='flex dh-full  justify-between items-center px-4 md:px-24 z-50'>
        <img className='z-50' src="/assets/logo.svg" alt="" />
        <div className=' bg-[#fff] w-[473px] h-[1px] z-10 hidden lg:block'></div>
        <div className='z-10 hidden md:block'>
          <ul className='flex  text-white h-[96px] gap-[48px] items-center text-[16px]  '>
            <div className={`${active == 'home'?'activeNav':null} h-full flex items-center btmborder relative `}>
              <li className='cursor-pointer' >
              <Link to={"/"} onClick={()=>setactive('home') } >
                <b className='mr-[11px]'>00</b>
                  Home
                </Link>
              </li>
            </div>
            <div className={`${active == 'destination'?'activeNav':null} h-full flex items-center btmborder relative `}>
              <li className='cursor-pointer' >
              <Link to={"destination"} onClick={()=>setactive('destination')}>
                <b className='mr-[11px]'>01</b>
                  Destination
                </Link>
              </li>
              </div>
            <div className={`${active == 'crew'?'activeNav':null} h-full flex items-center btmborder relative `}>
              <li className='cursor-pointer' >
                <Link to={"crew"} onClick={()=>setactive('crew')}>
                  <b className='mr-[11px]'>02</b>
                  Crew
                </Link>
              </li>
            </div>
            <div className={`${active == 'technology'?'activeNav':null} h-full flex items-center btmborder relative `}>
              <li className='cursor-pointer' >
              <Link to={"technology"} onClick={()=>setactive('technology')}>
                <b className='mr-[11px]'>03</b>
                  Technology
                </Link>
              </li>
            </div>
          </ul>
        </div>
        {/* Navbtn */}
        <div className=" items-center block  md:hidden">
            <ul className="  flex  flex-row  list-none  text-[hsla(0,0%,100%,.7)] items-center  text-lg font-medium">
              <div className=" ">
                <li className="">
                  <button

                    onClick={()=>setopenNav(true)}
                    className="text-3xl text-[#fff]  py-1   rounded-sm font-medium leading-6 items-center m-0"
                  >
                    <i class="fa-solid fa-bars"></i>
                  </button>
                </li>
              </div>
            </ul>
          </div>
          {/* bg */}
        <div className='bglack hidden md:block'></div>  
      </div>
    </div>
    {openNav===true?<ResponsiveNav state={setopenNav}/>:null}
    </>
  )
}
