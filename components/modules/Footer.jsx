import React from 'react'
import { Container } from '../styles/Container'
import {BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs' 
import { Button } from '../styles/Button'
import Link from 'next/link'
import { useTheme } from "next-themes";

const Footer = () => {
    const { theme, setTheme } = useTheme();
  return (
    <Container> 
        <div className=' lg:flex justify-between pb-10 lg:px-10'>
            <div className='lg:w-[15rem] w-fit mx-auto lg:mx-0  lg:mt-0'> 
                <img className='h-10 w-fit mx-auto lg:mx-0'  src={theme=="dark"?"/images/homepage/logoW.png":"/images/homepage/logoD.png"} alt='logo'/>
                <p className='lg:text-[0.79rem] text-sm mt-2 text-center lg:text-start sm:w-[70%]  sm:mx-auto lg:w-full lg:mx-0 text-[#667085] leading-4 font-semibold'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa aut explicabo natus aliquid nostrum! Totam harum aspernatur </p>
                <div className='flex space-x-4 mt-4 w-fit mx-auto lg:mx-0 text-red-400'>  
                    <BsFacebook/>
                    <BsInstagram/>
                    <BsTwitter/>
                </div>
            </div>

            <div className='leading-loose text-sm w-fit text-gray-500 mx-auto lg:mx-0 text-center hover:cursor-pointer lg:text-start mt-4 lg:mt-0'> 
                <h1 className='uppercase font-bold text-[#667085]'> company </h1> 
               <Link href='/#home' className='hover:cursor-pointer hover:text-[#FF0000]'> <p> About </p> </Link> 
                <p className='hover:cursor-pointer hover:text-[#FF0000]'> Pricing </p>
                <p className='hover:cursor-pointer hover:text-[#FF0000]'> How it works </p>
                <p className='hover:cursor-pointer hover:text-[#FF0000]'> Tools </p>
                <p className='hover:cursor-pointer hover:text-[#FF0000]'> Faqs </p> 
            </div>

            <div> 
                <div className='flex space-x-2 mt-4 lg:mt-0 w-fit mx-auto lg:mx-0'> 
                    <input className={theme=="light"?"lg:px-1 rounded-md lg:p-1 border border-gray-400" : "lg:px-1 rounded-md lg:p-1"} placeholder='Enter your email'/>  
                    <Button className={theme=="light"?"rounded border-0 w-fit px-2 text-xs items-center flex bg-black text-white hover:cursor-pointer hover:bg-gray-500":" rounded  w-fit px-2  text-xs items-center flex border-0 bg-gradient-to-r from-[#D32652] to-[#8466E1] hover:cursor-pointer"} > Notify me </Button>
                </div>
                <p className='sm:text-[0.6rem] text-gray-400 font-semibold text-xs text-center mt-2'> We care about the protection of your data. <br className='sm:hidden'/> Read our <span className='border-b'>  Privacy Policy. </span> </p>
            </div>

            

        </div>
    </Container>
  )
}

export default Footer