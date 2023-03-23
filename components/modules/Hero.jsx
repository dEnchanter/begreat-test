import React from 'react'
import { Button } from '../styles/Button'
import { Container } from '../styles/Container'
import { useTheme } from "next-themes";


const Hero = () => {
  
const { theme, setTheme } = useTheme();


  return (
   <div className='herobg pb-10' > 
     <Container id='home' >
      <img className='h-5 absolute hidden lg:flex mt-[1rem] left-[3rem] lg:left-[17rem] 2xl:left-[35rem]' src='./images/homepage/ether.png' alt=' ' />
       <img className='h-5 absolute hidden lg:flex top-[7rem] right-[0.5rem] lg:right-[15rem] 2xl:right-[30rem]' src='./images/homepage/lite.png' alt='' />
       <img className='h-5 absolute hidden lg:flex lg:top-[15rem] left-[4rem] lg:left-[22rem] 2xl:left-[36rem]' src='./images/homepage/tether.png' alt='' />
        <img className='h-5 absolute top-[17rem] hidden lg:flex right-[24rem] 2xl:right-[38rem]' src='./images/homepage/btc.png' alt=' ' />
      <div className='lg:mt-[4rem] md:pt-16 pt-8  mt-10 lg:mb-[4rem]'> 
          <div className='text-center'> 
              <h1 className='md:px-4 text-center  mx-auto  md:text-3xl  text-2xl font-bold'> Maximize Your <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#BE3677] to-[#A64AA2] '> Crypto Profits </span> with <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#9C52B3] to-[#B43E89]'> Be Great </span> <br className='hidden lg:block'/> <span className='text-[#BD3779]'> Finance's  </span> Live Price Analysis Dashboard </h1>
              <p className=' mx-auto lg:text-sm text-base text-center   mt-4 '> Experience the power of Finance SaaS and take control of your finances today. Sign up <br/> now for a free trial and see how we can help take your business to the next level. </p>
          </div>

 
          <div className='flex w-fit mx-auto justify-between space-x-4 mt-8 mb-4'> 
          {/* <ButtonComp
          btnText={'Get Started '}
          btnTextClassName='bg-secondary  iconColor1 rounded-3xl px-5'
          /> */}
            <Button className='bg-bk border-0 textII py-1.5 text-[0.7rem] hover:cursor-pointer hover:text-gray-300 hover:shadow-lg transition ease-in duration-300'> Get Started  </Button>
            <Button className=' text-[0.7rem] py-1.5  hover:cursor-pointer hover:text-gray-300 hover:shadow-lg transition ease-in duration-300'> View Pricing  </Button>
          </div>

          <div> 
              <img className='cover md:max-w-[35rem] mx-auto lg:mt-14 mt-10' src={theme=="light"?"/images/homepage/laptop.png":"/images/homepage/darklaptop.png" } alt='laptop' />
          </div>
      </div>
    </Container>
   </div>
  )
}

export default Hero