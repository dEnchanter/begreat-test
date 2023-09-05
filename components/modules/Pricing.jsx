import { Button } from '../styles/Button'
import React from 'react'
import { Container } from '../styles/Container'
import { useTheme } from "next-themes";
import { useRouter } from 'next/router';


const Pricing = () => {
   const { theme, setTheme } = useTheme();
   const router =useRouter()
  return (
    <div className={theme=="light"?"bg-[#FFF]":"pricebg"}> 
    <Container id='pricing' >
  <img className='h-5 absolute mt-[2rem] lg:left-[30rem] 2xl:left-[37rem] hidden xl:flex' src='./Images/homepage/btc.png' alt=' ' />
  <img className='h-20 absolute mt-[rem] lg:right-[20rem] 2xl:right-[35rem] hidden xl:flex' src='./Images/homepage/red.png' alt=' ' />
  <img className='h-5 absolute mt-[10rem] lg:right-[20rem] 2xl:right-[35rem] hidden xl:flex' src='./Images/homepage/dash.png' alt=' ' />
  <img className='h-20 absolute mt-[10rem] lg:left-[15rem] 2xl:left-[30rem] hidden xl:flex'  src='./Images/homepage/green.png' alt=' ' />
  <img className='h-5 absolute mt-[17rem] lg:left-[27rem] 2xl:left-[40rem] hidden xl:flex'  src='./Images/homepage/tether.png' alt=' ' />
   <img className='h-5 absolute mt-[18rem] lg:right-[27rem] 2xl:right-[40rem] hidden xl:flex'  src='./Images/homepage/ether.png' alt=' ' />
  <div className='text-center pt-10 pb-10 '> 
            <h1 className='uppercase mt-10 font-bold text-center text-sm text-transparent  bg-clip-text bg-gradient-to-r from-[#fc0542] to-[#8a76c7]'> Pricing </h1>

            <h1 className='leading-normal smallTextI text-xl lg:text-2xl lg:w-[40rem] mt-4 font-bold mx-auto md:w-[70%] sm:mx-auto '> Unlock the Power of Advanced Analytics with Our Premium Plans  </h1>
            <p className=' text-sm  mt-4 mx-auto sm:w-[70%] sm:mx-auto smallTextI leading-5 '>            
            Take advantage of our discounted pricing for premium <br className='hidden md:flex'/> accounts while our
            community begins to grow. </p>

            <div className='w-fit mx-auto mt-10'> 
              <Button onClick={()=>router.push('/pricing')} className= {theme=="light"? " ' text-[0.7rem] py-1.5 border border-red-400 hover:cursor-pointer hover:shadow-lg transition ease-in duration-300 text-transparent font-semibold bg-clip-text bg-gradient-to-r from-[#fc0542] to-[#8a76c7]" : "' text-[0.7rem] py-1.5  hover:cursor-pointer hover:text-gray-100 hover:shadow-lg transition ease-in duration-300  border-red-400 border-0 bg-gradient-to-r from-[#D32652] to-[#8466E1]   font-semibold text-white"}> View Pricing  </Button>
             </div>
        </div>
    </Container>
    </div>
  )
}

export default Pricing