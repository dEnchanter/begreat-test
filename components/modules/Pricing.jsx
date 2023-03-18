import { Button } from '../styles/Button'
import React from 'react'
import { Container } from '../styles/Container'

const Pricing = () => {
  return (
    <Container id='pricing' >
        <div className='border-2 text-center mt-10 pb-20'> 
            <h1 className='uppercase mt-10 font-bold text-sm'> pricing </h1>

            <h1 className='leading-normal text-3xl lg:w-[40rem] mt-4 font-bold mx-auto'> Access the Power of Advanced Analytics with Our Premium Cryptocurrency Pricing Plans  </h1>
            <p className='lg:w-[34rem] mt-4 mx-auto'>Our pricing plans are designed to be affordable, flexible, and scalable, so you can choose the plan that best fits your investment goals. </p>

            <div className='w-fit mx-auto mt-10'> 
              <Button className='py-2'> View Pricing </Button>
             </div>
        </div>
    </Container>
  )
}

export default Pricing