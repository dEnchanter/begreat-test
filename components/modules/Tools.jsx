import React from 'react'
import { Container } from '../styles/Container'
import { useTheme } from "next-themes";





const Tools = () => {
    const { theme, setTheme } = useTheme();
  return (
  <div className={theme=="light"?"bg-[#FFFCFB]":"toolsdarkbg"}> 
   
     <Container id='tools'  className=' md:pt-20 pt-12 pb-6'>
        <div className=' lg:flex lg:justify-between   lg:px-10 '> 
           <div className='mt-2 text-center lg:text-start'>
              <h1 className='font-bold   uppercase  text-transparent text-sm bg-clip-text bg-gradient-to-r from-[#D32652] to-[#8466E1] '>Tools </h1>
              <h1 className='font-bold  md:text-2xl text-secondary text-xl mt-2 w-full mx-auto md:w-[70%]  lg:w-[22rem] smallTextI'> Empower Your Trading Strategy with Our Suite of Advanced Tools </h1>
              <img className='w-[13rem] lg:ml-2 lg:mt-4  mx-auto' src='./images/homepage/globe.png' alt='globe'/>
           </div>

           <div  className='grid  sm:grid-cols-2 gap-5 lg:mx-0  mx-auto w-fit mt-6 lg:px-2'> 
              <div  className={theme=="light"?"w-[15rem]  hover:cursor-pointer hover:shadow-2xl transition-all ease-in duration-150   text-black pb-4 px-2 pt-4 rounded-md shadow-lg bg-[#FFFCFB]":"w-[15rem] hover:cursor-pointer  text-black pb-4 px-2 pt-4 rounded-md shadow-lg bg-gradient-to-r from-[#483d64] to-[#130925]"} >
                <h1 className='text-sm font-bold text2'> Pulse Tool </h1>
                <p className='lg:text-xs text-sm mt-2 text text2'> The Pulse tool in our SAAS finance dashboard for cryptocurrency provides a real-time overview of market sentiment and activity.  the Pulse tool helps you stay up-to-date on the latest developments in the cryptocurrency market and gain insights into investor sentiment. </p> 
                <p className='flex items-center text-xs mt-2 bg-clip-text bg-gradient-to-r from-[#D32652] to-[#8466E1] '> Learn More <span className='ml-2 w-2'> <img src='./images/homepage/arrow.png' alt='icon'/> </span>  </p>

              </div>

           <div  className={theme=="light"?"w-[15rem]  hover:cursor-pointer hover:shadow-2xl transition-all ease-in duration-150 text-black pb-4 px-2 pt-4 rounded-md shadow-lg bg-[#FFFCFB]":"w-[15rem] hover:cursor-pointer  text-black pb-4 px-2 pt-4 rounded-md shadow-lg bg-gradient-to-r from-[#483d64] to-[#130925]"} >
                <h1 className='text-sm font-bold text2'> Watchlist Tool </h1>
                <p className='lg:text-xs text-sm mt-2 text text2 '> Stay up-to-date with the latest market trends and monitor price changes in real-time with our Watchlist feature. Never miss a buying or selling opportunity again with our instant price updates and easy-to-use interface. </p> 
                <p className='flex items-center text-xs mt-2 bg-clip-text bg-gradient-to-r from-[#D32652] to-[#8466E1] '> Learn More <span className='ml-2 w-2'> <img src='./images/homepage/arrow.png' alt='icon'/> </span>  </p>

              </div>

              <div  className={theme=="light"?"w-[15rem] hover:cursor-pointer hover:shadow-2xl transition-all ease-in duration-150 text-black pb-4 px-2 pt-4 rounded-md shadow-lg bg-[#FFFCFB]":"w-[15rem] hover:cursor-pointer  text-black pb-4 px-2 pt-4 rounded-md shadow-lg bg-gradient-to-r from-[#483d64] to-[#130925]"} >
                <h1 className='text-sm font-bold text2'> Rise/Fall Tool </h1>
                <p className='lg:text-xs text-sm mt-2 text text2'> This allows you to quickly and easily identify the top gainers and losers in the cryptocurrency market. By tracking real-time price movements and percentage changes across different cryptocurrencies, the Rise/Fall tool provides valuable insights into market trends and potential opportunities. </p> 
                <p className='flex items-center text-xs mt-2 bg-clip-text bg-gradient-to-r from-[#D32652] to-[#8466E1] '> Learn More <span className='ml-2 w-2'> <img src='./images/homepage/arrow.png' alt='icon'/> </span>  </p>

              </div>

              <div  className={theme=="light"?"w-[15rem] hover:cursor-pointer hover:shadow-2xl transition-all ease-in duration-150 text-black pb-4 px-2 pt-4 rounded-md shadow-lg bg-[#FFFCFB]":"w-[15rem]  hover:cursor-pointer text-black pb-4 px-2 pt-4 rounded-md shadow-lg bg-gradient-to-r from-[#483d64] to-[#130925]"} >
                <h1 className='text-sm font-bold text2'> Shift Tool </h1>
                <p className='lg:text-xs text-sm mt-2 text text2'> The Shift tool in our finance dashboard for cryptocurrency provides advanced technical analysis capabilities to help you identify potential market opportunities and make informed trading decisions. By analyzing historical price data and market trends, the Shift tool helps you identify potential shifts in market sentiment and direction. </p> 
                <p className='flex items-center text-xs mt-2 bg-clip-text bg-gradient-to-r from-[#D32652] to-[#8466E1] '> Learn More <span className='ml-2 w-2'> <img src='./images/homepage/arrow.png' alt='icon'/> </span>  </p>

              </div>
              
                           
           </div>

          </div> 
      </Container>
   </div>
  )
}

export default Tools