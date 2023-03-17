import React from "react";
import Link from "next/link";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import { useState } from "react";

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
     <nav className="fixed w-full top-0 z-50 flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
  <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
      <a
        className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
        href="/"
      >
        Logo
      </a>
      <button
        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        type="button"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? (
          <AiOutlineClose className="transition ease-in duration-500" />
        ) : (
          <AiOutlineMenu className="transition ease-in duration-500" />
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
        className="flex gap-5 flex-col lg:flex-row list-none lg:ml-auto"
      >
        <li className="nav-item">
          <Link
            className=" py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            href="/#homeDiv"
            scroll={true}
          >
            About
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className=" py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            href="/#targetDiv"
            scroll={false}
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