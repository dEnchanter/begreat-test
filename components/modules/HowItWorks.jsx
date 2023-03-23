import { Container } from '../styles/Container'
import React from 'react'



const HowItWorks = () => {
 

  return (
    <div> 
    <div className='worksbg'> 
    <Container id='how-it-works' className='pt-16 pb-10 '>
        <img className='h-5 absolute mt-16 left-[15rem] hidden lg:flex 2xl:left-[35rem]' src='./images/homepage/binance.png' alt=' ' />
        <img className='h-8 absolute mt-[20rem] left-[10rem] hidden lg:flex 2xl:left-[25rem]' src='./images/homepage/ether2.png' alt='' />
        <img className='h-8 absolute mt-[25rem] right-[18rem] hidden lg:flex 2xl:right-[34rem]' src='./images/homepage/security.png' alt=' ' />
      <div  className='  '>

          <div className='text-center '> 
            <h1 className='font-semibold uppercase text-sm text-[#BF5493]'> how it works </h1>
            {/* <h1 className={theme == "dark" ? "md:text-2xl  text-xl  font-bold text " : "md:text-2xl text-[#2B2C3B]  text-xl  font-bold"}> Learn More About the Process </h1> */}
            <h1 className='md:text-2xl  text-xl smallTextI  font-black'> Learn More About the Process </h1>
            <p className='lg:text-xs  text-base smallTextI'> Get familiar with the steps for using our product to manage <br/> your cryptocurrency  activities. </p>
          </div>


          <div className='md:flex md:w-full md:px-10 w-fit mx-auto justify-around mt-10 md:mt-16 mb-20'>

              <div className='flex flex-col lg:w-[12rem] w-[14rem] mx-auto md:mx-0 md:mt-0 mt-4'>
                  <div className='flex bg-[#160E33] w-fit mx-auto items-center rounded-full py-2 px-2 '> 
                      <div className='items-center justify-center flex  btnbgplan rounded-full h-6 w-6 '>
                        <p className='  text-center items-center font-light text-xs  text-transparent bg-clip-text bg-gradient-to-r from-[#D32652] to-[#8466E1] '> 01 </p>
                      </div>

                      <div>
                        <h1 className='px-3 text-[0.7rem] text-white '> Create an account </h1> 
                      </div>
                  </div>

                  <div> 
                      <p className='text-center text-base lg:text-[0.76rem] leading-4 lg:px-4 text-[#667085] mt-2'> The possibilities are endless! Sign up for an account today and start exploring </p>
                  </div>

              </div>

               <div className='flex flex-col lg:w-[12rem] w-[14rem] mx-auto md:mx-0 md:mt-0 mt-4'>
                  <div className='flex bg-[#160E33] w-fit mx-auto items-center rounded-full py-2 px-2 '> 
                      <div className='items-center justify-center flex  btnbgplan rounded-full h-6 w-6 '>
                        <p className='  text-center items-center font-light text-xs  text-transparent bg-clip-text bg-gradient-to-r from-[#D32652] to-[#8466E1] '> 02 </p>
                      </div>

                      <div>
                        <h1 className='px-3 text-[0.7rem] text-white '> Select any Plan </h1> 
                      </div>
                  </div>

                  <div> 
                      <p className='text-center text-base lg:text-[0.76rem] leading-4 lg:px-4 text-[#667085] mt-2'> The possibilities are endless! Sign up for an account today and start exploring </p>
                  </div>

              </div>

                <div className='flex flex-col lg:w-[12rem] w-[14rem] mx-auto md:mx-0 md:mt-0 mt-4'>
                  <div className='flex bg-[#160E33] w-fit mx-auto items-center rounded-full py-2 px-2 '> 
                      <div className='items-center justify-center flex  btnbgplan rounded-full h-6 w-6 '>
                        <p className='  text-center items-center font-light text-xs  text-transparent bg-clip-text bg-gradient-to-r from-[#D32652] to-[#8466E1] '> 03 </p>
                      </div>

                      <div>
                        <h1 className='px-3 text-[0.7rem] text-white '> Start trading/Exploring </h1> 
                      </div>
                  </div>

                  <div> 
                      <p className='text-center text-base lg:text-[0.76rem] leading-4 lg:px-4 text-[#667085]
]  mt-2'> The possibilities are endless! Sign up for an account today and start exploring </p>
                  </div>

              </div>
          </div>
      </div>

       </Container>   
    </div>


    <div className='herobg pb-10'> 
      <Container>
          <div className='pt-[4.5rem]'> 
         
          <div className='text-center'> 
            <h1 className='uppercase text-sm font-semibold text-[#BF5493]'> Our Core Features </h1> 
            <h1 className='font-semibold mt-3 md:text-2xl text-xl smallTextI '> Elevate Your Investment Strategy with <br/> Our Robust Features </h1>
            <p className='lg:text-xs text-base lg:px-6 text-[#667085]'> Our powerful dashboard provides real-time insights and analytics, helping <br/> you make informed decisions about your investments </p>
          </div>

          <div className='grid lg:mt-[4rem]  lg:gap-x-20 md:gap-x-5 gap-y-6 md:grid-cols-2 md:px-5 lg:px-10 md:mx-auto w-fit mt-10 mb-20 '>
              <div className='w-fit mx-auto md:mx-0 md:w-[22rem] lg:w-[28rem] md:flex space-x-2'> 
                <div>
                  <img className='cover w-10 md:w-16  mx-auto' src='./images/homepage/main.png' alt='icon' />
                </div>

                <div> 
                  <h1 className='text-[0.9rem] text-center md:text-start foreground  font-bold'> Multi-timeframe Analysis </h1>
                  <p className='lg:text-[0.75rem] mt-1 text- leading-4 sm:max-w-[70%] sm:mx-auto md:max-w-full md:mx-0  text-base text-center md:text-start'> Analyze an asset's price movement across different timeframes to gain a more comprehensive view of its trend and momentum. </p>
                </div>

              </div>

               <div className='w-fit mx-auto md:mx-0 md:w-[22rem] lg:w-[28rem] md:flex space-x-2'> 
                <div>
                  <img className='cover w-10 md:w-16  mx-auto' src='./images/homepage/main.png' alt='icon' />
                </div>

                <div> 
                  <h1 className='text-[0.95rem] text-center md:text-start  font-bold'> Multi-timeframe Analysis </h1>
                  <p className='lg:text-[0.8rem] sm:max-w-[70%] sm:mx-auto md:max-w-full md:mx-0  text-base text-center md:text-start'> Analyze an asset's price movement across different timeframes to gain a more comprehensive view of its trend and momentum. </p>
                </div>

              </div>

               <div className='w-fit mx-auto md:mx-0 md:w-[22rem] lg:w-[28rem] md:flex space-x-2'> 
                <div>
                  <img className='cover w-10 md:w-16  mx-auto' src='./images/homepage/main.png' alt='icon' />
                </div>

                <div> 
                  <h1 className='text-[0.95rem] text-center md:text-start  font-bold'> Multi-timeframe Analysis </h1>
                  <p className='lg:text-[0.8rem] sm:max-w-[70%] sm:mx-auto md:max-w-full md:mx-0  text-base text-center md:text-start'> Analyze an asset's price movement across different timeframes to gain a more comprehensive view of its trend and momentum. </p>
                </div>

              </div>

               <div className='w-fit mx-auto md:mx-0 md:w-[22rem] lg:w-[28rem] md:flex space-x-2'> 
                <div>
                  <img className='cover w-10 md:w-16  mx-auto' src='./images/homepage/main.png' alt='icon' />
                </div>

                <div> 
                  <h1 className='text-[0.95rem] text-center md:text-start  font-bold'> Multi-timeframe Analysis </h1>
                  <p className='lg:text-[0.8rem] sm:max-w-[70%] sm:mx-auto md:max-w-full md:mx-0  text-base text-center md:text-start'> Analyze an asset's price movement across different timeframes to gain a more comprehensive view of its trend and momentum. </p>
                </div>

              </div>

              

              

            
          </div>
      
      </div>
      </Container>
    </div>

    </div>
  )
}

export default HowItWorks