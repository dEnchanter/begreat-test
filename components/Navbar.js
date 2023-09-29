import React from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Button } from "./styles/Button";
import { useTheme } from "next-themes";
import { BsSun } from "react-icons/bs";
import { HiOutlineMoon } from "react-icons/hi";
import { useRouter } from "next/router";
import DropDownItem from "./ui/DropDownItem";
import NavDropDownItem from "./ui/NavDropDownItem";
import Image from "next/image";



export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [activeLink, setActiveLink] = useState("");
  const router = useRouter();

  const handleNav = () => {
    setNavbarOpen(!navbarOpen);
  };

  function handleSelectChange(event) {
    const selectedOption = event.target.value;
  
    // if (selectedOption === 'Twitter') {
    //   window.open('https://twitter.com/begreat_finance', );
    // }

    if (selectedOption === 'Twitter') {
      router.push('https://twitter.com/begreat_finance', );
    }

    if (selectedOption === 'Discord') {
      router.push('https://discord.gg/2n5X59eeg2', );
    }
  }

  return (
    <>
     <nav className="fixed w-full herobg top-0 z-50 flex flex-wrap items-center justify-between pb-4    lg:py-3   mb-3">
        <div className="container lg:px-[4rem] herobg px-4  mt-2  xl:max-w-[1180px] mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start  ">
            <Link href='/'>
              <Image width="150" height="200" src={theme=="light"?"/Images/homepage/logoD.png":"/Images/homepage/logoW.png" } alt="logo" className="h-10  "/> 
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-4  mt-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none  "
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <AiOutlineClose className="transition ease-in duration-500 navicon" />
              ) : (
                <AiOutlineMenu className="transition ease-in duration-500 navicon" />
              )}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center ml-4 " + (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul
       
              className="flex   items-center  lg:space-x-[9rem] lg:mt-2 lg:items-center flex-col lg:flex-row list-none pb-10 lg:pb-0 lg:ml-auto"
            >
              <div className="flex lg:space-x-4 text-secondary font-semibold flex-col lg:flex-row mt-4 lg:mt-0 lg:items-center"> 
                {/* <li className="nav-item">
                <Link
                  className={`py-2 flex items-center text-xs uppercase hover:text-red-500 leading-snug hover:cursor-pointer ${
                            activeLink === "home" ? "text-red-500" : "text-secondary"
                          } transition ease-in duration-300`}
                  href="/"
                  scroll={true}
                  onClick={() => setActiveLink("home")}
                  >
                    Home
                  </Link>
                </li> */}

                  <li  onClick={handleNav} className="nav-item">
                    <Link
                      className={`py-2 flex items-center text-xs uppercase hover:text-red-500 leading-snug hover:cursor-pointer ${
                        activeLink === "how-it-works"
                          ? "text-red-500"
                          : "text-secondary"
                      } transition ease-in duration-300`}
                      href="https://begreat.finance/#how-it-works"
                      scroll={false}
                      onClick={() => setActiveLink("how-it-works")}
                    >
                      How it works
                    </Link>
                  </li>

                  <li  onClick={handleNav} className="nav-item">
                    <Link
                      className={`py-2 flex items-center text-xs hover:text-red-500 uppercase  leading-snug hover:cursor-pointer ${
                        activeLink === "tools"
                          ? "text-red-500 "
                          : "text-secondary"
                      } transition ease-in duration-300`}
                      href="https://begreat.finance/#tools"
                      scroll={false}
                      onClick={() => setActiveLink("tools")}
                    >
                      Tools
                    </Link>
                  </li>

                  <li  onClick={handleNav} className="nav-item">
                    <Link
                      className={`py-2 flex items-center text-xs hover:text-red-500 uppercase  leading-snug hover:cursor-pointer ${
                        activeLink === "pricing"
                          ? "text-red-500 "
                          : "text-secondary"
                      } transition ease-in duration-300`}
                      href="/pricing"
                      scroll={false}
                      onClick={() => setActiveLink("pricing")}
                    >
                      Pricing
                    </Link>

                  
                  </li>

                  {/* <div className="w-fit  "> 
                  
                  <select id="selectnav" className="w-fit  -ml-1 lg:ml-0 text-[0.77rem] uppercase outline-0 hover:cursor-pointer  herobg   border-0  " onChange={handleSelectChange}>
                          <option hidden selected className="">COMMUNITY</option>
                          <option className="text-center hover:cursor-pointer">Discord </option>
                          <option className="text-center hover:cursor-pointer">Twitter </option>
                    </select>



                
                  </div> */}
                  <li  onClick={handleNav} className="nav-item">
                    <Link
                      className={`py-2  flex items-center text-xs hover:text-red-500 uppercase  leading-snug hover:cursor-pointer ${
                        activeLink === "discord"
                          ? "text-red-500 "
                          : "text-secondary"
                      } transition ease-in duration-300`}
                      href="https://discord.gg/2n5X59eeg2"
                      scroll={false}
                      onClick={() => setActiveLink("Discord")}
                    >
                      Discord
                    </Link>                 
                  </li>

                  <li  onClick={handleNav} className="nav-item">
                    <Link
                      className={`py-2 flex items-center text-xs hover:text-red-500 uppercase  leading-snug hover:cursor-pointer ${
                        activeLink === "docs"
                          ? "text-red-500 "
                          : "text-secondary"
                      } transition ease-in duration-300`}
                      href="https:/docs.begreat.finance"
                      scroll={false}
                      onClick={() => setActiveLink("Docs")}
                    >
                      Docs
                    </Link>
                  </li>

    
                  <div className="bg-modeBackground px-[8px]  rounded-xl hover:cursor-pointer gap-2  items-center whitespace-nowrap hidden lg:flex">
                    <div
                      className={`${
                        theme === "light" &&
                        "hover:cursor-pointer bg-modeIconBackSelect  px-2 my-1 rounded-lg text-center "
                      }`}
                    >
                      <BsSun
                        onClick={() => setTheme("light")}
                        size={18}
                        className="iconColor"
                      />
                    </div>
                    <div
                      className={`   rounded-lg ${
                        theme === "dark" &&
                        "bg-modeIconBackSelect hover:cursor-pointer my-1 px-2 rounded-lg text-center "
                      }`}
                    >
                      <HiOutlineMoon
                        onClick={() => setTheme("dark")}
                        size={18}
                        className="iconColor"
                      />
                    </div>
                  </div>
              </div>

              <div className="flex lg:space-x-4  lg:items-center flex-col lg:flex-row ">
                <h1 className="mt-2 lg:mt-0 text-sm font-semibold hover:cursor-pointer hover:text-[#FF0000] transition  ease-in duration-300">
                  {" "}
                  <Link href="/register">Sign Up</Link>{" "}
                </h1>
                <Link href="https://app.begreat.finance">
                <Button
                  className="px-4 text-white -ml-1  mt-4 lg:mt-0 text-xs py-2 border-0 bg-gradient-to-r from-[#D32652] to-[#8466E1] hover:cursor-pointer font-semibold  hover:text-gray-300 transition ease-in duration-300"
                  
                >
                 Launch App 
                </Button>
                </Link>
                
              </div>

              <div className="bg-modeBackground px-[8px] -ml-5 mt-4 lg:ml-0 rounded-xl hover:cursor-pointer gap-2  w-fit items-center whitespace-nowrap flex lg:mt-8 lg:hidden">
                <div
                  className={`${
                    theme === "light" &&
                    "hover:cursor-pointer bg-modeIconBackSelect  px-2 my-1 rounded-lg text-center "
                  }`}
                >
                  <BsSun
                    onClick={() => setTheme("light")}
                    size={18}
                    className="navicon"
                  />
                </div>
                <div
                  className={`rounded-lg ${
                    theme === "dark" &&
                    "bg-modeIconBackSelect hover:cursor-pointer my-1 px-2 rounded-lg text-center "
                  }`}
                >
                  <HiOutlineMoon
                    onClick={() => setTheme("dark")}
                    size={18}
                    className="navicon"
                    
                  />
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}


