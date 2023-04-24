import React from 'react'
import { Container } from '../styles/Container'
import {BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs' 
import { Button } from '../styles/Button'
import Link from 'next/link'
import { useTheme } from "next-themes";
import { TwitterFollowButton } from 'react-twitter-embed';

const Footer = () => {
    const { theme, setTheme } = useTheme();
  return (
   <footer className={theme=="light"?"bg-[#FFFCFB] lg:mt-16  ":"footerbg lg:mt-16  "}> 
         <Container> 
           {/* <img className='h-[17rem]  absolute mt-[-2rem] left-[30%] lg:left-[35%] 2xl:left-[40%] hidden xl:flex' src='./images/homepage/shape.png' alt=' ' /> */}
        <div className=' lg:flex justify-between pb-10 lg:px-10 '>
            <div className='lg:w-[15rem] w-fit mx-auto lg:mx-0  lg:mt-0'> 
                <img className='h-10  mx-auto lg:mx-0 hover:cursor-pointer'  src={theme=="light"?"/images/homepage/logoD.png":"/images/homepage/logoW.png" } alt='logo'/>
                <p className='sm:text-[0.7rem] text-sm mt-1 font-semibold  text-center md:text-start '> Simplify your Investments, Maximize your Profits. </p>
                
                {/* <div className='flex space-x-4 mt-4 w-fit mx-auto lg:mx-0 text-transparent bg-clip-text bg-gradient-to-r from-[#BE3677] to-[#A64AA2]'>  
                    <BsFacebook className='hover:cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-[#BE3677] to-[#A64AA2] '/>
                    <BsInstagram/>
                    <BsTwitter/>
                </div> */}
            </div>

            <div className='leading-loose text-xs w-fit  workstext mx-auto lg:mx-0 text-center hover:cursor-pointer  mt-4 lg:mt-0'> 
                <h1 className='uppercase font-bold text-sm text-gray-500 '> company </h1> 
               <Link href='/#home' > <h1 className='hover:cursor-pointer hover:text-[#FF0000] font-semibold  '> About </h1> </Link> 
               <Link href='/#pricing'>  <h1 className='hover:cursor-pointer hover:text-[#FF0000] font-semibold  '> Pricing </h1> </Link> 
               <Link href='/#how-it-works'> <h1 className='hover:cursor-pointer hover:text-[#FF0000] font-semibold  '> How it works </h1> </Link> 
               <Link href='/#tools'> <h1 className='hover:cursor-pointer hover:text-[#FF0000] font-semibold  '> Tools </h1> </Link> 
               <Link href='/#faqs'> <h1 className='hover:cursor-pointer hover:text-[#FF0000] font-semibold  '> Faqs </h1> </Link>  
            </div>

            {/* <div> 
                <div className='flex md:space-x-2 mt-4 lg:mt-0 w-fit mx-auto lg:mx-0'> 
                    <input className={theme=="light"?"px-1 rounded-md lg:p-1 w-[60%] md:w-fit mx-auto border border-gray-400" : "px-1 rounded-md lg:p-1"} placeholder='Enter your email'/>  
                    <Button className={theme=="light"?"rounded border-0 w-fit px-2 text-xs items-center flex bg-black text-white hover:cursor-pointer hover:bg-gray-500":" rounded  w-fit px-2  text-xs items-center flex border-0 bg-gradient-to-r from-[#D32652] to-[#8466E1] hover:cursor-pointer"} > Notify me </Button>
                </div>
                <p className='sm:text-[0.6rem] workstext text-xs text-center mt-2'> We care about the protection of your data. <br className='sm:hidden'/> Read our <span className='border-b border-black font-semibold'>  Privacy Policy. </span> </p>
            </div> */}
            <div className="bg-transparent w-fit mx-auto lg:mx-0 text-center lg:text-start mt-4 lg:mt-0  ">
                <p className="mb-2 uppercase font-bold text-sm text-gray-500 "> Stay Updated: </p>
                <TwitterFollowButton screenName={'begreat_finance'}   />
            </div>
            

        </div>
    </Container>

    <hr/>
    <h1 className='text-center font-semibold text-gray-500 mt-4 text-xs pb-4'>  Be Great Finance © 2023  </h1>
   </footer>
  )
}

export default Footer