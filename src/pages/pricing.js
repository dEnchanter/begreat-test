import React from 'react'
import Layout from '../../components/Layout'
import Footer from '../../components/modules/Footer'
import { Container } from '../../components/styles/Container'
import {FcCheckmark} from 'react-icons/fc'

export default function pricing() {
  return (
    <Layout>
       <Container> 
         <div className='text-secondary  pt-20  '> 
          <h1 className='text-center text-2xl font-bold'> Pricing Plans </h1>
          <p className='text-center text-sm'> Our pricing plans are designed to be affordable, flexible, and scalable, so you can <br className='hidden md:flex'/> choose the plan that best fits your investment goals. </p>
        </div>

       <div className='flex md:flex-row flex-col justify-center space-y-4 md:space-y-0 md:space-x-6 mt-10 pb-10'> 
           <div className=' rounded-md shadow-lg  lg:hover:shadow-2xl hover:cursor-pointer h-[23rem]  w-full  md:mx-0 mx-auto max-w-[19rem] sm:max-w-[18rem] px-6 priceback'> 
          <h1 className='font-bold text-xl pt-4'>Monthly Plan </h1>
          <p className='text-xs mt-2'> All the basics for starting a new business </p>
          <h1 className='mt-4 text-xs'> <span className='text-3xl font-bold'>$50</span>/MO </h1>
          <button className='border border-[#4F46E5] text-white hover:text-white  bg-[#4F46E5] mt-4 rounded-md py-2 text-xs w-full hover:bg-[#635ce9] transition duration-300 ease-in'> Buy Plan </button> 
          <div className='mt-5 text-xs space-y-3 '> 
             <p className='uppercase font-semibold'> What's Included </p>
             <p className='flex items-center'> <span> <FcCheckmark className='mr-3'/> </span> Pulse Tool </p>
             <p className='flex items-center'> <span> <FcCheckmark className='mr-3'/> </span> Shift Tool </p>
             <p className='flex items-center'> <span> <FcCheckmark className='mr-3'/> </span> Rise and Fall Tool </p>
          </div>
        </div>

        <div className=' rounded-md shadow-lg  lg:hover:shadow-2xl hover:cursor-pointer h-[23rem]  w-full md:mx-0 mx-auto max-w-[19rem] sm:max-w-[18rem] px-6 priceback'> 
          <h1 className='font-bold text-xl pt-4'>Yearly Plan </h1>
          <p className='text-xs mt-2'> All the basics for starting a new business </p>
          <h1 className='mt-4 text-xs'> <span className='text-3xl font-bold'>$500</span>/YR </h1>
          <button className='border border-[#4F46E5] text-white hover:text-white  bg-[#4F46E5] mt-4 rounded-md py-2 text-xs w-full hover:bg-[#635ce9] transition duration-300 ease-in'> Buy Plan </button> 
          <div className='mt-5 text-xs space-y-3 '> 
             <p className='uppercase font-semibold'> What's Included </p>
             <p className='flex items-center'> <span> <FcCheckmark className='mr-3'/> </span> Pulse Tool </p>
             <p className='flex items-center'> <span> <FcCheckmark className='mr-3'/> </span> Shift Tool </p>
             <p className='flex items-center'> <span> <FcCheckmark className='mr-3'/> </span> Rise and Fall Tool </p>
              <p className='flex items-center'> <span> <FcCheckmark className='mr-3'/> </span> Trend Scan  </p>
               <p className='flex items-center'> <span> <FcCheckmark className='mr-3'/> </span> Additonal Timeframes </p>
          </div>
        </div>
       </div>
       </Container>
     
        <Footer/>
    </Layout>
  )
}
