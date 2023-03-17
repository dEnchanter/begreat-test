import React from "react";
import Link from "next/link";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import { useState } from "react";


export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
 
  const handleNav = () => {
    setNavbarOpen(!navbarOpen);
  };


  return (
    <>
     <nav className="fixed w-full top-0 z-50 flex flex-wrap items-center justify-between lg:px-2 border-2 lg:py-3  mb-3">
  <div className="container lg:px-4 mx-auto flex flex-wrap items-center justify-between">
    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start  ">
     <img src="/images/Logo.png" alt="logo" className="h-10 "/>
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
        className="flex flex-col lg:flex-row list-none bg-white w-full lg:w-fit space-x-4 lg:ml-auto"
      >
        <li className="nav-item">
          <Link
            className=" py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
            href="/about"
          >
            About
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className=" py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
            href="/service"
          >
            Service
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  );
}