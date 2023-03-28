import { Container } from '../styles/Container'
import React from 'react'
import { useTheme } from "next-themes";



const HowItWorks = () => {
 const { theme, setTheme } = useTheme();

  return (
    <div> 
    <div className={theme=="light"?"bg-[#FFFCFB] ":"processbg "}> 
    <Container id='how-it-works' className='pt-16 md:pt-20 lg:pb-10 pb-2'>
        <img className='h-6 absolute mt-12 left-[15rem] hidden xl:flex 2xl:left-[35rem]' src='./images/homepage/binance.png' alt=' ' />
        <img className='h-10 absolute mt-[17rem] left-[10rem] hidden xl:flex 2xl:left-[25rem]' src='./images/homepage/ether2.png' alt='' />
        <img className='h-8 absolute mt-[25rem] right-[18rem] hidden xl:flex 2xl:right-[34rem]' src='./images/homepage/security.png' alt=' ' />
      <div  className='  '>

          <div className='text-center '> 
            <h1 className='font-semibold uppercase text-sm lg:text-xs text-[#BF5493]'> how it works </h1>
            {/* <h1 className={theme == "dark" ? "md:text-2xl  text-xl  font-bold text " : "md:text-2xl text-[#2B2C3B]  text-xl  font-bold"}> Learn More About the Process </h1> */}
            <h1 className='md:text-2xl  text-xl smallTextI  font-black'> Learn More About the Process </h1>
            <p className='lg:text-xs  text-sm smallTextI'>Take control of your investments and start making informed  <br className='hidden md:flex'/>trading decisions today </p>
          </div>


          <div className='md:flex md:w-full space-y-8 md:space-y-0 md:px-10 w-fit mx-auto justify-around mt-10 md:mt-16 mb-20'>

              <div className='flex flex-col  lg:w-[12rem]  w-[14rem] mx-auto md:mx-0 md:mt-0 mt-4'>
                  <div className='flex bg-[#160E33] w-fit mx-auto items-center rounded-full py-2 px-2 '> 
                      <div className='items-center justify-center flex  btnbgplan rounded-full h-6 w-6 '>
                        <p className='  text-center items-center font-light text-xs  text-transparent bg-clip-text bg-gradient-to-r from-[#D32652] to-[#8466E1] '> 01 </p>
                      </div>

                      <div>
                        <h1 className='px-3 text-[0.7rem] text-white '> Create an account </h1> 
                      </div>
                  </div>

                  <div> 
                      <p className='text-center text-sm lg:text-[0.76rem] leading-4 lg:px-4 workstext mt-2'>Create an account and select a plan to begin your journey with Be Great Finance </p>
                  </div>

              </div>

               <div className='flex flex-col lg:w-[12rem] w-[14rem] mx-auto md:mx-0 md:mt-0 mt-4'>
                  <div className='flex bg-[#160E33] w-fit mx-auto items-center rounded-full py-2 px-2 '> 
                      <div className='items-center justify-center flex  btnbgplan rounded-full h-6 w-6 '>
                        <p className='  text-center items-center font-light text-xs  text-transparent bg-clip-text bg-gradient-to-r from-[#D32652] to-[#8466E1] '> 02 </p>
                      </div>

                      <div>
                        <h1 className='px-3 text-[0.7rem] text-white '> Access the Dashboard </h1> 
                      </div>
                  </div>

                  <div> 
                      <p className='text-center text-sm lg:text-[0.76rem] leading-4 lg:px-4 workstext mt-2'> Launch the app and login to access our live price analysis dashboard and its suite of
                        powerful, yet easy-to-use analysis tools</p>
                  </div>

              </div>

                <div className='flex flex-col lg:w-[12rem] w-[14rem] mx-auto md:mx-0 md:mt-0 mt-4'>
                  <div className='flex bg-[#160E33] w-fit mx-auto items-center rounded-full py-2 px-2 '> 
                      <div className='items-center justify-center flex  btnbgplan rounded-full h-6 w-6 '>
                        <p className='  text-center items-center font-light text-xs  text-transparent bg-clip-text bg-gradient-to-r from-[#D32652] to-[#8466E1] '> 03 </p>
                      </div>

                      <div>
                        <h1 className='px-3 text-[0.7rem] text-white '> Identify Profit Opportunities </h1> 
                      </div>
                  </div>

                  <div> 
                      <p className='text-center text-sm lg:text-[0.76rem] leading-4 lg:px-4 workstext
                    mt-2'> Analyze cryptocurrency prices in real-time and pinpoint the best profit opportunities.
                      Our dashboard provides everything you need to navigate the markets successfully</p>
                  </div>

              </div>
          </div>
      </div>

       </Container>   
    </div>


    <div className={theme=="light"?"bg-[#FFFCFB] pb-10":"linesbg pb-10"}> 
      <Container>
          <div className='lg:pt-[4.5rem] pt-[4rem] '> 
         
          <div className='text-center'> 
            <h1 className='uppercase text-sm lg:text-xs font-semibold text-[#BF5493]'> Our Core Features </h1> 
            <h1 className='font-semibold mt-3 md:text-2xl text-xl smallTextI '> Elevate Your Investment Strategy with <br className='hidden lg:flex'/> Our Robust Features </h1>
            <p className='lg:text-xs text-sm  lg:px-6 workstext'> 
            Our powerful dashboard provides real-time insights and analytics, <br className='hidden lg:flex'/> helping you easily
            be aware of opportunities in all market  conditions <br className='hidden lg:flex'/> and make informed decisions
          about your investments  </p>
          </div>

          {/* <div className='grid lg:mt-[4rem]  lg:gap-x-20 md:gap-x-5 gap-y-6 md:grid-cols-2 md:px-5 lg:px-10 md:mx-auto w-fit mt-10 mb-20 '>
              <div className='w-fit mx-auto md:mx-0 md:w-[22rem] lg:w-[28rem] flex space-x-2'> 
                <div>
                  <img className='cover w-10 md:w-16  mx-auto' src='./images/homepage/main.png' alt='icon' />
                </div>

                <div> 
                  <h1 className='text-[0.9rem] text-center md:text-start foreground  font-bold'> Multi-timeframe Analysis </h1>
                  <p className='lg:text-[0.75rem] mt-1 text- leading-4 sm:max-w-[70%] sm:mx-auto md:max-w-full md:mx-0  text-base text-center md:text-start'> Analyze an asset's price movement across different timeframes to gain a more comprehensive view of its trend and momentum. </p>
                </div>

              </div>

               <div className='w-fit mx-auto md:mx-0 md:w-[22rem] lg:w-[28rem] flex space-x-2'> 
                <div>
                  <img className='cover w-10 md:w-16  mx-auto' src='./images/homepage/updates.png' alt='icon' />
                </div>

                <div> 
                  <h1 className='text-[0.95rem] text-center md:text-start  font-bold'> Live Updates </h1>
                  <p className='lg:text-[0.8rem] sm:max-w-[70%] sm:mx-auto md:max-w-full md:mx-0  text-base text-center md:text-start'> Stay up-to-date with the latest developments in the fast-paced world of cryptocurrency with our live updates. </p>
                </div>

              </div>

               <div className='w-fit mx-auto md:mx-0 md:w-[22rem] lg:w-[28rem] flex space-x-2'> 
                <div className=' md:w-[9rem]'>
                  <img className='cover w-10 md:w-16  lg:mx-0 mx-auto' src='./images/homepage/trend.png' alt='icon' />
                </div>

                <div> 
                  <h1 className='text-[0.95rem] text-center md:text-start  font-bold'> Trade the Trend </h1>
                  <p className='lg:text-[0.8rem] sm:max-w-[70%] sm:mx-auto md:max-w-full md:mx-0  text-base text-center md:text-start'> Take advantage of the latest trends in the cryptocurrency market with our powerful trading platform. Our platform utilizes advanced algorithms and cutting-edge technology to help you identify and trade the latest trends in the market. </p>
                </div>

              </div>

               <div className='w-fit mx-auto md:mx-0 md:w-[22rem] lg:w-[28rem] flex space-x-2'> 
                <div className='md:w-[8rem]'>
                  <img className='cover w-10 md:w-16  mx-auto' src='./images/homepage/price.png' alt='icon' />
                </div>

                <div> 
                  <h1 className='text-[0.95rem] text-center md:text-start  font-bold'> Contextualize Pricing </h1>
                  <p className='lg:text-[0.8rem] sm:max-w-[70%] sm:mx-auto md:max-w-full md:mx-0  text-base text-center md:text-start'> Our platform provides real-time data and analysis to help you understand the factors that influence cryptocurrency prices and make informed trading decisions. </p>
                </div>

              </div>

              

              

            
          </div> */}
      
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10 lg:px-10'> 
              <div className='sm:flex sm:space-x-2'> 
                  <img className='w-[2rem mx-auto sm:mx-0] h-[2rem]' src='./images/homepage/main.png' alt=''/>

                  <div className='text-center sm:text-start'> 
                    <h1 className='foreground font-semibold' > Multi-timeframe Analysis </h1>
                    <p className='text-xs leading-5 workstext'> 
                       Price action agreement across multiple timeframes is key in assessing the strength
              and direction of market and asset price action. Our availability of multiple
              timeframes on our tools assists users in making trading decisions with speed and
            confidence. </p>
                  </div>
              </div>

               <div className='sm:flex sm:space-x-2'> 
                  <img className='w-[2rem] mx-auto sm:mx-0 h-[2rem]' src='./images/homepage/updates.png' alt=''/>

                  <div className='text-center sm:text-start'> 
                    <h1 className='foreground font-semibold ' > Individualized Market Analytics </h1>
                    <p className='text-xs leading-5 workstext'> Our dashboard is fully customizable to fit your risk management and trading speed
                    preferences. With over 700,000 possible dashboard combinations across multiple
                    tools and timeframes, confidently adapt your style to any strategy or market
                    condition.
                  </p>
                  </div>
              </div>

               <div className='sm:flex sm:space-x-2'> 
                  <img className='w-[2rem] mx-auto sm:mx-0 h-[2rem]' src='./images/homepage/trend.png' alt=''/>

                  <div className='text-center sm:text-start'> 
                    <h1 className='foreground font-semibold ' > Trade the trend </h1>
                    <p className='text-xs leading-5 workstext'> Easily identify trends early on in order to profit from smooth, fast, and consistent
                price action with minimal drawdowns. Our tools help you to stay in trades with
                confidence as price moves in your favor, maximizing your potential profits.
                 </p>
                  </div>
              </div>

               <div className='sm:flex sm:space-x-2'> 
                  <img className='w-[2rem] mx-auto sm:mx-0 h-[2rem]' src='./images/homepage/price.png' alt=''/>

                  <div className='text-center sm:text-start'> 
                    <h1 className='foreground font-semibold ' > Data VIsualization </h1>
                    <p className='text-xs leading-5 workstext '> Easily visualize multiple price action events simultaneously in order to align market
                    phenomena and react to price accordingly to yield a profit. Our color coded
                    dashboard outputs make complex price action analysis simple enough for the
                    newest of traders. </p>
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