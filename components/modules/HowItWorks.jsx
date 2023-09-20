import { Container } from '../styles/Container'
import React from 'react'
import { useTheme } from "next-themes";



const HowItWorks = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <div className={theme == "light" ? "bg-[#FFFCFB] " : "processbg "}>
        <Container id='how-it-works' className='pt-20 md:pt-20 lg:pb-10 pb-2'>
          <img className='h-6 absolute mt-12 left-[15rem] hidden xl:flex 2xl:left-[35rem]' src='./Images/homepage/binance.png' alt=' ' />
          <img className='h-10 absolute mt-[17rem] left-[10rem] hidden xl:flex 2xl:left-[25rem]' src='./Images/homepage/ether2.png' alt='' />
          <img className='h-8 absolute mt-[25rem] right-[18rem] hidden xl:flex 2xl:right-[34rem]' src='./Images/homepage/security.png' alt=' ' />
          <div className='  '>

            <div className='text-center '>
              <h1 className='font-semibold uppercase text-sm lg:text-xs text-[#BF5493]'> how it works </h1>
              {/* <h1 className={theme == "dark" ? "md:text-2xl  text-xl  font-bold text " : "md:text-2xl text-[#2B2C3B]  text-xl  font-bold"}> Learn More About the Process </h1> */}
              <h1 className='md:text-2xl  text-xl smallTextI  font-black'> Learn More About the Process </h1>
              <p className='lg:text-xs  text-sm smallTextI'>Take control of your investments and start making informed  <br className='hidden md:flex' />trading decisions today </p>
            </div>


            <div className='md:flex md:w-full space-y-8 md:space-y-0 md:px-10 w-fit mx-auto justify-around mt-10 md:mt-16 mb-20'>

              <div className='flex flex-col  lg:w-[12rem]  w-[14rem] mx-auto md:mx-0 md:mt-0 mt-4'>
                <div className='flex bg-[#160E33] w-fit mx-auto items-center rounded-full py-2 px-2 '>
                  <div className='items-center justify-center flex  btnbgplan rounded-full h-6 w-6 '>
                    <p className='  text-center items-center font-light text-xs  text-transparent bg-clip-text bg-gradient-to-r from-[#D32652] to-[#8466E1] '> 01 </p>
                  </div>

                  <div>
                    <h1 className='ml-1 text-[0.7rem] text-white '> Create an account </h1>
                  </div>
                </div>

                <div>
                  <p className='text-center text-sm lg:text-[0.76rem] leading-4 workstext mt-2'>Create an account and select a plan to begin your journey with Be Great Finance </p>
                </div>

              </div>

              <div className='flex flex-col lg:w-[12rem] w-[14rem] mx-auto md:mx-0 md:mt-0 mt-4'>
                <div className='flex bg-[#160E33] w-fit mx-auto items-center rounded-full py-2 px-2 '>
                  <div className='items-center justify-center flex  btnbgplan rounded-full h-6 w-6 '>
                    <p className='  text-center items-center font-light text-xs  text-transparent bg-clip-text bg-gradient-to-r from-[#D32652] to-[#8466E1] '> 02 </p>
                  </div>

                  <div>
                    <h1 className='ml-1 text-[0.7rem] text-white '> Customize Your Dashboard </h1>
                  </div>
                </div>

                <div>
                  <p className='text-center text-sm lg:text-[0.76rem] leading-4  workstext mt-2'> Launch the app and log in to explore our premium suite of tools and customize the dashboard to match your trading style</p>
                </div>

              </div>

              <div className='flex flex-col lg:w-[13rem] w-[14rem] mx-auto md:mx-0 md:mt-0 mt-4'>
                <div className='flex bg-[#160E33] w-fit mx-auto items-center rounded-full py-2 px-4 '>
                  <div className='items-center justify-center flex  btnbgplan rounded-full h-6 w-6 '>
                    <p className='  text-center items-center font-light text-xs  text-transparent bg-clip-text bg-gradient-to-r from-[#D32652] to-[#8466E1] '> 03 </p>
                  </div>

                  <div>
                    <h1 className=' text-[0.7rem] text-white ml-1'> Identify Profit Opportunities </h1>
                  </div>
                </div>

                <div>
                  <p className='text-center text-sm lg:text-[0.76rem] leading-4  workstext
                    mt-2'> Analyze cryptocurrency prices in real-time and pinpoint the best profit opportunities.
                    Our dashboard provides everything you need to navigate the markets successfully</p>
                </div>

              </div>
            </div>
          </div>

        </Container>
      </div>


      <div className={theme == "light" ? "bg-[#FFFCFB] pb-10" : "linesbg pb-10"}>
        <Container>
          <div className='lg:pt-[4.5rem] pt-[4rem] '>

            <div className='text-center'>
              <h1 className='uppercase text-sm  font-semibold text-[#BF5493]'> Our Core Features </h1>
              <h1 className='font-semibold mt-3 md:text-2xl text-xl smallTextI '> Elevate Your Investment Strategy with <br className='hidden lg:flex' /> Our Robust Features </h1>
              <p className='lg:text-xs text-sm  lg:px-6 workstext'>
                Our comprehensive and intuitive dashboard helps you  make informed  decisions about <br className='hidden lg:flex' />  your  investments by providing real-time insights and analytics. Save time analyzing <br className='hidden lg:flex' />   and easily identify  profit opportunities in a variety of market conditions.
              </p>

              <p className='foreground font-semibold mt-2'> Browse our extensive <span className='text-blue-500 hover:underline'> <a href='https://docs.begreat.finance/' target='blank'> Documentation </a> </span> for a complete overview </p>

            </div>



            <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10 lg:px-10'>
              <div className='sm:flex sm:space-x-2'>
                <img className='w-[2rem mx-auto sm:mx-0] h-[2rem]' src='./Images/homepage/main.png' alt='' />

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
                <img className='w-[2rem] mx-auto sm:mx-0 h-[2rem]' src='./Images/homepage/updates.png' alt='' />

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
                <img className='w-[2rem] mx-auto sm:mx-0 h-[2rem]' src='./Images/homepage/trend.png' alt='' />

                <div className='text-center sm:text-start'>
                  <h1 className='foreground font-semibold ' > Trade the trend </h1>
                  <p className='text-xs leading-5 workstext'> Easily identify trends early on in order to profit from smooth, fast, and consistent
                    price action with minimal drawdowns. Our tools help you to stay in trades with
                    confidence as price moves in your favor, maximizing your potential profits.
                  </p>
                </div>
              </div>

              <div className='sm:flex sm:space-x-2'>
                <img className='w-[2rem] mx-auto sm:mx-0 h-[2rem]' src='./Images/homepage/price.png' alt='' />

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