import React from 'react'
import { Container } from '../styles/Container'
import {BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs' 
import { Button } from '../styles/Button'
import Link from 'next/link'

const Footer = () => {
  return (
    <Container> 
        <div className=' lg:flex justify-between pb-10 lg:px-10'>
            <div className='lg:w-[15rem] w-fit mx-auto lg:mx-0  lg:mt-0'> 
                <img className='h-12 w-fit mx-auto lg:mx-0'  src='./images/homepage/Logo.png' alt='logo'/>
                <p className='text-[0.79rem] mt-4 text-center lg:text-start'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa aut explicabo natus aliquid nostrum! Totam harum aspernatur </p>
                <div className='flex space-x-4 mt-4 w-fit mx-auto lg:mx-0'>  
                    <BsFacebook/>
                    <BsInstagram/>
                    <BsTwitter/>
                </div>
            </div>

            <div className='leading-loose text-sm w-fit mx-auto lg:mx-0 text-center lg:text-start mt-4 lg:mt-0'> 
                <h1 className='uppercase'> company </h1> 
               <Link href='/#home'> <p> About </p> </Link> 
                <p> Pricing </p>
                <p> How it works </p>
                <p> Tools </p>
                <p> Faqs </p> 
            </div>

            <div> 
                <div className='flex space-x-2 mt-4 lg:mt-0 w-fit mx-auto lg:mx-0'> 
                    <input className='lg:px-8 border-2' placeholder='Enter your email'/>  
                    <Button className='rounded w-fit px-2 text-sm'> Notify me </Button>
                </div>
                <p className='sm:text-xs text-xs text-center mt-1'> We care about the protection of your data. Read our <span className='border-b'> Privacy Policy. </span> </p>
            </div>

            

        </div>
    </Container>
  )
}

export default Footer