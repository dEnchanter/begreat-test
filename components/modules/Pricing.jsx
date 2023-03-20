import { Button } from '../styles/Button'
import React from 'react'
import { Container } from '../styles/Container'

const Pricing = () => {
  return (
    <Container id='pricing' >
  <img className='h-4 absolute mt-[2rem] lg:left-[30rem] 2xl:left-[37rem] hidden lg:flex' src='./images/homepage/green.png' alt=' ' />
  <img className='h-4 absolute mt-[10rem] lg:right-[20rem] 2xl:right-[35rem] hidden lg:flex' src='./images/homepage/dash.png' alt=' ' />
  <img className='h-4 absolute mt-[17rem] lg:left-[27rem] 2xl:left-[40rem] hidden lg:flex'  src='./images/homepage/tether.png' alt=' ' />
   <img className='h-4 absolute mt-[20rem] lg:right-[27rem] 2xl:right-[40rem] hidden lg:flex'  src='./images/homepage/ether.png' alt=' ' />
  <div className='  text-center pt-10 pb-20 '> 
            <h1 className='uppercase mt-10 font-bold text-center text-sm'> pricing </h1>

            <h1 className='leading-normal text-xl lg:text-2xl lg:w-[40rem] mt-2 font-bold mx-auto sm:w-[70%] sm:mx-auto '> Access the Power of Advanced Analytics with Our Premium Cryptocurrency Pricing Plans  </h1>
            <p className=' text-base  mt-4 mx-auto sm:w-[70%] sm:mx-auto '>Our pricing plans are designed to be affordable, flexible, and scalable, <br className='hidden md:flex'/> so you can choose the plan that best fits your investment goals. </p>

            <div className='w-fit mx-auto mt-10'> 
              <Button className='py-[0.3rem] px-3 font-bold text-xs'> View Pricing </Button>
             </div>
        </div>
    </Container>
  )
}

export default Pricing