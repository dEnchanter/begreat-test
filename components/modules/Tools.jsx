import React from 'react'
import { Container } from '../styles/Container'

const Tools = () => {
  return (
    <Container id='tools' >
        <div className='border-2 flex justify-between px-14 '> 
           <div className='mt-2'>
              <h1>Tools </h1>
              <h1 className='font-bold text-2xl lg:w-[22rem]'> Empower Your Trading Strategy with Our Suite of Advanced Tools </h1>
              <img className='w-[13rem] ml-2 mt-4  mx-auto' src='./images/homepage/globe.png' alt='globe'/>
           </div>

           <div className='grid lg:grid-cols-2 gap-5 ml-10 mt-6'> 
              <div className='w-[15rem] bg-red text-black pb-4 px-2 pt-4 rounded-md shadow-lg'>
                <h1 className='text-sm font-semibold'> Pulse Tool </h1>
                <p className='text-[0.65rem] mt-2'> The Pulse tool in our SAAS finance dashboard for cryptocurrency provides a real-time overview of market sentiment and activity.  the Pulse tool helps you stay up-to-date on the latest developments in the cryptocurrency market and gain insights into investor sentiment. </p> 
                <p className='flex items-center text-xs mt-2'> Learn More <span className='ml-2 w-2'> <img src='./images/homepage/arrow.png' alt='icon'/> </span>  </p>

              </div>

               <div className='w-[15rem] bg-red text-black pb-4 px-2 pt-4 rounded-md shadow-lg'>
                <h1 className='text-sm font-semibold'> Pulse Tool </h1>
                <p className='text-[0.65rem] mt-2'> The Pulse tool in our SAAS finance dashboard for cryptocurrency provides a real-time overview of market sentiment and activity.  the Pulse tool helps you stay up-to-date on the latest developments in the cryptocurrency market and gain insights into investor sentiment. </p> 
                <p className='flex items-center text-xs mt-2'> Learn More <span className='ml-2 w-2'> <img src='./images/homepage/arrow.png' alt='icon'/> </span>  </p>

              </div>

               <div className='w-[15rem] bg-red text-black pb-4 px-2 pt-4 rounded-md shadow-lg'>
                <h1 className='text-sm font-semibold'> Pulse Tool </h1>
                <p className='text-[0.65rem] mt-2'> The Pulse tool in our SAAS finance dashboard for cryptocurrency provides a real-time overview of market sentiment and activity.  the Pulse tool helps you stay up-to-date on the latest developments in the cryptocurrency market and gain insights into investor sentiment. </p> 
                <p className='flex items-center text-xs mt-2'> Learn More <span className='ml-2 w-2'> <img src='./images/homepage/arrow.png' alt='icon'/> </span>  </p>

              </div>

               <div className='w-[15rem] bg-red text-black pb-4 px-2 pt-4 rounded-md shadow-lg'>
                <h1 className='text-sm font-semibold'> Pulse Tool </h1>
                <p className='text-[0.65rem] mt-2'> The Pulse tool in our SAAS finance dashboard for cryptocurrency provides a real-time overview of market sentiment and activity.  the Pulse tool helps you stay up-to-date on the latest developments in the cryptocurrency market and gain insights into investor sentiment. </p> 
                <p className='flex items-center text-xs mt-2'> Learn More <span className='ml-2 w-2'> <img src='./images/homepage/arrow.png' alt='icon'/> </span>  </p>

              </div>
           </div>

          </div> 
      </Container>
  )
}

export default Tools