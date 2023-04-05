import React from 'react'
import { Button } from '../styles/Button'
import { Container } from '../styles/Container'
import { useTheme } from "next-themes";
import { useRouter } from "next/router";


const Hero = () => {
  
const { theme, setTheme } = useTheme();
const router = useRouter();


  return (
   <div className='herobg pb-10' > 
     <Container id='home' className='pt-10  md:pt-16' >
      <img className='h-5 absolute hidden xl:flex mt-[1rem]  lg:left-[17rem] 2xl:left-[35rem]' src='./images/homepage/ether.png' alt=' ' />
      <img className='h-8 absolute hidden xl:flex top-[7rem] left-[10rem] lg:left-[40rem] 2xl:left-[55rem]' src='./images/homepage/star.png' alt=' ' />
       <img className='h-5 absolute hidden xl:flex top-[7rem] right-[0.5rem] lg:right-[15rem] 2xl:right-[30rem]' src='./images/homepage/lite.png' alt='' />
       <img className='h-5 absolute hidden xl:flex lg:top-[15rem] left-[4rem] lg:left-[22rem] 2xl:left-[36rem]' src='./images/homepage/tether.png' alt='' />
        <img className='h-8 absolute hidden xl:flex lg:top-[20rem] left-[2rem] lg:left-[18rem] 2xl:left-[33rem]' src='./images/homepage/star2.png' alt='' />
        <img className='h-5 absolute top-[17rem] hidden xl:flex right-[24rem] 2xl:right-[38rem]' src='./images/homepage/btc.png' alt=' ' />
      <div className='lg:mt-[4rem]   mt-12 lg:mb-[4rem]'> 
          <div className='text-center'> 
              <h1 className='md:px-4 text-center  mx-auto  md:text-3xl mt-2  text-2xl font-bold'> Maximize Your <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#BE3677] to-[#A64AA2] '> Crypto Profits </span> with <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#9C52B3] to-[#B43E89]'> Be Great </span> <br className='hidden lg:block'/> <span className='text-[#BD3779]'> Finance's  </span> Live Price Analysis Dashboard </h1>
              <p className=' mx-auto lg:text-sm text-base text-center   mt-4 '>               
            Experience the power of algorithmic trend analysis and start growing your <br className='hidden md:flex'/>  crypto portfolio today.   Sign up  now and use our deluxe suite of tools to <br className='hidden md:flex'/> pinpoint the  best profit opportunities in the markets.

            </p>
          </div>

 
          <div className='flex w-fit mx-auto justify-between space-x-4 mt-8 mb-4'> 
          {/* <ButtonComp
          btnText={'Get Started '}
          btnTextClassName='bg-secondary  iconColor1 rounded-3xl px-5'
          /> */}
            <Button  onClick={() => router.push("/register")} className='bg-bk border-0 textII py-1.5 text-[0.7rem] hover:cursor-pointer hover:text-gray-300 hover:shadow-2xl transition ease-in duration-300 font-semibold '> Get Started  </Button>
            <Button onClick={()=>router.push('/pricing')} className= {theme=="light"? " ' text-[0.7rem] py-1.5 border border-red-400 hover:cursor-pointer hover:shadow-lg transition ease-in duration-300 text-transparent font-semibold bg-clip-text bg-gradient-to-r from-[#fc0542] to-[#8a76c7]" : "' text-[0.7rem] py-1.5  hover:cursor-pointer hover:text-gray-100 hover:shadow-lg transition ease-in duration-300 border border-red-400  font-semibold text-white"}> View Pricing  </Button>
          </div>

          <div className='circles '> 
              <img className= 'cover md:max-w-[35rem] mx-auto lg:mt-14 mt-10 hover:cursor-pointer z-20' src={theme=="light"?"/images/homepage/laptop.png":"/images/homepage/darklaptop.png" } alt='laptop' />
          </div>
      </div>
    </Container>
   </div>
  )
}

export default Hero