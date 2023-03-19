import React from 'react'
import { Container } from '../styles/Container'

const Tools = () => {
  return (
    <Container id='tools'  className=' md:pt-20 pt-10 pb-6'>
        <div className=' lg:flex lg:justify-between   lg:px-10 '> 
           <div className='mt-2 text-center lg:text-start'>
              <h1 className='font-bold text-sm  uppercase'>Tools </h1>
              <h1 className='font-bold md:text-2xl text-xl mt-2 w-full mx-auto md:w-[70%]  lg:w-[22rem]'> Empower Your Trading Strategy with Our Suite of Advanced Tools </h1>
              <img className='w-[13rem] lg:ml-2 lg:mt-4  mx-auto' src='./images/homepage/globe.png' alt='globe'/>
           </div>

           <div className='grid  md:grid-cols-2 gap-5 lg:mx-0  mx-auto w-fit mt-6 lg:px-2'> 
              <div className='w-[15rem]  bg-red text-black pb-4 px-2 pt-4 rounded-md shadow-lg'>
                <h1 className='text-sm font-bold'> Pulse Tool </h1>
                <p className='lg:text-xs text-sm mt-2'> The Pulse tool in our SAAS finance dashboard for cryptocurrency provides a real-time overview of market sentiment and activity.  the Pulse tool helps you stay up-to-date on the latest developments in the cryptocurrency market and gain insights into investor sentiment. </p> 
                <p className='flex items-center text-xs mt-2'> Learn More <span className='ml-2 w-2'> <img src='./images/homepage/arrow.png' alt='icon'/> </span>  </p>

              </div>

              <div className='w-[15rem]  bg-red text-black pb-4 px-2 pt-4 rounded-md shadow-lg'>
                <h1 className='text-sm font-bold'> Pulse Tool </h1>
                <p className='lg:text-xs text-sm mt-2'> The Pulse tool in our SAAS finance dashboard for cryptocurrency provides a real-time overview of market sentiment and activity.  the Pulse tool helps you stay up-to-date on the latest developments in the cryptocurrency market and gain insights into investor sentiment. </p> 
                <p className='flex items-center text-xs mt-2'> Learn More <span className='ml-2 w-2'> <img src='./images/homepage/arrow.png' alt='icon'/> </span>  </p>

              </div>

              <div className='w-[15rem]  bg-red text-black pb-4 px-2 pt-4 rounded-md shadow-lg'>
                <h1 className='text-sm font-bold'> Pulse Tool </h1>
                <p className='lg:text-xs text-sm mt-2'> The Pulse tool in our SAAS finance dashboard for cryptocurrency provides a real-time overview of market sentiment and activity.  the Pulse tool helps you stay up-to-date on the latest developments in the cryptocurrency market and gain insights into investor sentiment. </p> 
                <p className='flex items-center text-xs mt-2'> Learn More <span className='ml-2 w-2'> <img src='./images/homepage/arrow.png' alt='icon'/> </span>  </p>

              </div>

              <div className='w-[15rem]  bg-red text-black pb-4 px-2 pt-4 rounded-md shadow-lg'>
                <h1 className='text-sm font-bold'> Pulse Tool </h1>
                <p className='lg:text-xs text-sm mt-2'> The Pulse tool in our SAAS finance dashboard for cryptocurrency provides a real-time overview of market sentiment and activity.  the Pulse tool helps you stay up-to-date on the latest developments in the cryptocurrency market and gain insights into investor sentiment. </p> 
                <p className='flex items-center text-xs mt-2'> Learn More <span className='ml-2 w-2'> <img src='./images/homepage/arrow.png' alt='icon'/> </span>  </p>

              </div>

             
           </div>

          </div> 
      </Container>
  )
}

export default Tools