import React from "react";
import Link from "next/link";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import { useState } from "react";
import { Button } from "./styles/Button";
import { useTheme } from "next-themes";
import { BsSun } from "react-icons/bs";
import { HiOutlineMoon } from "react-icons/hi";


export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleNav = () => {
    setNavbarOpen(!navbarOpen);
  };

  function scrollToDiv() {
    var targetDiv = document.getElementById("targetDiv");
    targetDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
     <nav className="fixed w-full top-0 z-50 flex flex-wrap items-center justify-between bg-white   lg:py-3   mb-3">
  <div className="container lg:px-[5.5rem] bg-white px-4    xl:max-w-[1180px] mx-auto flex flex-wrap items-center justify-between">
    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start  ">
    <Link href='/'>
       <img src={theme=="dark"?"/Images/Dashboard/Logo1.png":"/Images/Dashboard/logo.png" } alt="logo" className="h-10 "/> 
    </Link>
      <button
        className="text-white cursor-pointer text-xl leading-none px-4  mt-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none "
        type="button"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? (
          <AiOutlineClose className="transition ease-in duration-500 text-black" />
        ) : (
          <AiOutlineMenu className="transition ease-in duration-500 text-black" />
        )}
      </button>
    </div>
    <div
      className={
        "lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")
      }
      id="example-navbar-danger"
    >
      <ul
        onClick={handleNav}
        className="flex items-stretch  lg:space-x-[9rem] lg:px-4 lg:items-center flex-col lg:flex-row list-none pb-10 lg:pb-0 lg:ml-auto"
      >
        <div className="flex lg:space-x-4 flex-col lg:flex-row mt-4 lg:mt-0 "> 
          <li className="nav-item">
          <Link
            className=" py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
            href="/#home"
            scroll={true}
          >
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className=" py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
            href="/#how-it-works"
            scroll={false}
          >
            How it works
          </Link>
        </li>

         <li className="nav-item">
          <Link
            className=" py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
            href="/#tools"
            scroll={false}
          >
            Tools
          </Link>
        </li>

         <li className="nav-item">
          <div
            className=" py-2 flex items-center gap-3 text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
            
          >
            <Link href="/#pricing"
            scroll={false}>
Pricing
            </Link>
            
            <div className='bg-modeBackground px-[8px] rounded-xl  gap-2  items-center whitespace-nowrap md:flex'>
                <div className={`   ${theme ==="light" && 'bg-modeIconBackSelect py-1 px-2 my-1 rounded-lg text-center '}`}><BsSun onClick={()=>setTheme('light')} size={18} className='iconColor'/></div>
                <div className={`   rounded-lg ${theme ==="dark" && 'bg-modeIconBackSelect py-1 my-1 px-2 rounded-lg text-center '}`}><HiOutlineMoon onClick={()=>setTheme('dark')} size={18} className='iconColor'/></div>
                </div>
          </div>
        </li>
        </div>

        <div className="flex   lg:space-x-4  lg:items-center flex-col lg:flex-row "> 
          <h1 className="mt-2 lg:mt-0"> Login </h1>
          <Button className="px-3  mt-4 lg:mt-0"> Get Started </Button>
        </div>
      </ul>
    </div>
  </div>
</nav>

    </>
  );
}