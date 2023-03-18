import { Container } from '../styles/Container'
import React from 'react'

const HowItWorks = () => {
  return (
    <Container id='how-it-works'>
      <div  className=' border-2 pt-10'>
          <div className='text-center '> 
            <h1> how it works </h1>
            <h1> Learn More About theProcess </h1>
            <p> Get familiar with the steps for using our product to manage <br/> your cryptocurrency  activities. </p>
          </div>


          <div className='lg:flex lg:w-full lg:px-10 w-fit mx-auto justify-around mt-10 lg:mt-16 mb-20'>

              <div className='flex flex-col w-[12rem] lg:mt-0 mt-4'>
                  <div className='flex bg-darkblue w-fit mx-auto items-center rounded-full py-2 px-2 '> 
                      <div className='w-fit  '>
                        <p className=' bg-white rounded-full h-6 w-6 text-center items-center '> 01 </p>
                      </div>

                      <div>
                        <h1 className='px-3 text-[0.79rem] text-white '> Create an account </h1> 
                      </div>
                  </div>

                  <div> 
                      <p className='text-center text-[0.78rem] lg:px-4  mt-2'> The possibilities are endless! Sign up for an account today and start exploring </p>
                  </div>

              </div>

               <div className='flex flex-col w-[12rem] lg:mt-0 mt-4'>
                  <div className='flex bg-darkblue w-fit mx-auto items-center rounded-full py-2 px-2 '> 
                      <div className='w-fit  '>
                        <p className=' bg-white rounded-full h-6 w-6 text-center items-center '> 01 </p>
                      </div>

                      <div>
                        <h1 className='px-3 text-[0.79rem] text-white'> Create an account </h1> 
                      </div>
                  </div>

                  <div> 
                      <p className='text-center text-[0.78rem] lg:px-4  mt-2'> The possibilities are endless! Sign up for an account today and start exploring </p>
                  </div>

              </div>

               <div className='flex flex-col w-[12rem] lg:mt-0 mt-4'>
                  <div className='flex bg-darkblue w-fit mx-auto items-center rounded-full py-2 px-2 '> 
                      <div className='w-fit  '>
                        <p className=' bg-white rounded-full h-6 w-6 text-center items-center '> 01 </p>
                      </div>

                      <div>
                        <h1 className='px-3 text-[0.79rem] text-white'> Create an account </h1> 
                      </div>
                  </div>

                  <div> 
                      <p className='text-center text-[0.78rem] lg:px-4  mt-2'> The possibilities are endless! Sign up for an account today and start exploring </p>
                  </div>

              </div>
          </div>
      </div>


      <div className='mt-10'> 
         
          <div className='text-center'> 
            <h1> Our Core Features </h1> 
            <h1> Elevate Your Investment Strategy with Our Robust Features </h1>
            <p> Our powerful dashboard provides real-time insights and analytics, helping you make informed decisions about your investments </p>
          </div>

          <div className='grid gap-10 lg:grid-cols-2 lg:px-8 mt-10 mb-10 border-2'>
              <div className='w-fit flex space-x-2'> 
                <div>
                  <img className='cover w-16' src='./images/homepage/main.png' alt='icon' />
                </div>

                <div> 
                  <h1 className='text-[0.95rem]  font-semibold'> Multi-timeframe Analysis </h1>
                  <p className='text-[0.8rem]'> Analyze an asset's price movement across different timeframes to gain a more comprehensive view of its trend and momentum. </p>
                </div>

              </div>

              <div className='w-fit flex space-x-2'> 
                <div>
                  <img className='cover w-16' src='./images/homepage/main.png' alt='icon' />
                </div>

                <div> 
                  <h1 className='text-[0.95rem] font-semibold'> Multi-timeframe Analysis </h1>
                  <p className='text-[0.8rem]'> Analyze an asset's price movement across different timeframes to gain a more comprehensive view of its trend and momentum. </p>
                </div>

              </div>

              <div className='w-fit flex space-x-2'> 
                <div>
                  <img className='cover w-16' src='./images/homepage/main.png' alt='icon' />
                </div>

                <div> 
                  <h1 className='text-[0.95rem] font-semibold'> Multi-timeframe Analysis </h1>
                  <p className='text-[0.8rem]'> Analyze an asset's price movement across different timeframes to gain a more comprehensive view of its trend and momentum. </p>
                </div>

              </div>

              <div className='w-fit flex space-x-2'> 
                <div>
                  <img className='cover w-16' src='./images/homepage/main.png' alt='icon' />
                </div>

                <div> 
                  <h1 className='text-[0.95rem] font-semibold'> Multi-timeframe Analysis </h1>
                  <p className='text-[0.8rem]'> Analyze an asset's price movement across different timeframes to gain a more comprehensive view of its trend and momentum. </p>
                </div>

              </div>
          </div>
      
      </div>
    </Container>
  )
}

export default HowItWorks