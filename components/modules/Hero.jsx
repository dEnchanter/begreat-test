import React from 'react'
import { Button } from '../styles/Button'
import { Container } from '../styles/Container'


const Hero = () => {
  return (
    <Container id='home'>
      <div className='lg:mt-[6rem] pt-16 border-2 mt-10 lg:mb-20'> 
          <div className='text-center'> 
              <h1 className='lg:px-4 lg:w-[45rem] mx-auto  lg:text-3xl text-xl font-bold'> Maximize Your Crypto Profits with Be Great  Finance's Live Price Analysis Dashboard </h1>
              <p className='lg:px-20 lg:w-[43rem] mx-auto lg:text-sm text-base   mt-4 '> Experience the power of Finance SaaS and take control of your finances today. Sign up  now for a free trial and see how we can help take your business to the next level. </p>
          </div>

 
          <div className='flex w-fit mx-auto justify-between space-x-4 mt-8 mb-4'> 
            <Button className='bg-red'> Get Started  </Button>
            <Button> View Pricing  </Button>
          </div>

          <div> 
              <img className='cover lg:max-w-[36rem] mx-auto lg:mt-14 mt-10' src='./images/homepage/laptop.png' alt='laptop' />
          </div>
      </div>
    </Container>
  )
}

export default Hero