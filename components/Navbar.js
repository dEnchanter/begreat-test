import React from "react";
import Link from "next/link";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import { useState } from "react";
import { Button } from "./styles/Button";


export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
 
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
  <div className="container lg:px-20 bg-white px-4    xl:max-w-[1180px] mx-auto flex flex-wrap items-center justify-between">
    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start  ">
    <Link href='/'>
       <img src="/images/homepage/Logo.png" alt="logo" className="h-10 "/> 
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
        className="flex  lg:space-x-[9rem] lg:items-center flex-col lg:flex-row list-none pb-10 lg:pb-0 lg:ml-auto"
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
          <Link
            className=" py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
            href="/#pricing"
            scroll={false}
          >
            Pricing
          </Link>
        </li>
        </div>

        <div className="flex lg:space-x-4  lg:items-center flex-col lg:flex-row "> 
          <h1 className="mt-2 lg:mt-0"> Login </h1>
          <Button className="px-3 mt-4 lg:mt-0"> Get Started </Button>
        </div>
      </ul>
    </div>
  </div>
</nav>

    </>
  );
}