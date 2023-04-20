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
                <h1 className='text-sm font-bold text2'> Pulse  </h1>
                <p className='lg:text-xs text-sm mt-2 text text2'> Pulse is a multi-timeframe algorithmic trend detection tool, helping users to easily detect and visualize trend strength and direction for an asset by categorizing price action into one of four possible outputs.
                  </p> 
               

              </div>

           <div  className={theme=="light"?"w-[15rem]  hover:cursor-pointer hover:shadow-2xl transition-all ease-in duration-150 text-black pb-4 px-2 pt-4 rounded-md shadow-lg bg-[#FFFCFB]":"w-[15rem] hover:cursor-pointer  text-black pb-4 px-2 pt-4 rounded-md shadow-lg bg-gradient-to-r from-[#483d64] to-[#130925]"} >
                <h1 className='text-sm font-bold text2'> Shift </h1>
                <p className='lg:text-xs text-sm mt-2 text text2 '> Shift is a price momentum analysis tool that helps you quickly identify the direction and speed of price movement across multiple timeframes. With Shift, you can easily recognize market trends and potential price breakouts, shortening your reaction time in the markets. </p> 
                                

              </div>

              <div  className={theme=="light"?"w-[15rem] hover:cursor-pointer hover:shadow-2xl transition-all ease-in duration-150 text-black pb-4 px-2 pt-4 rounded-md shadow-lg bg-[#FFFCFB]":"w-[15rem] hover:cursor-pointer  text-black pb-4 px-2 pt-4 rounded-md shadow-lg bg-gradient-to-r from-[#483d64] to-[#130925]"} >
                <h1 className='text-sm font-bold text2'> Levels </h1>
                <p className='lg:text-xs text-sm mt-2 text text2'> Levels is a price contextualization tool, allowing users to visualize recent price extremes on various timeframes. Use these levels, along with the rise and fall percentages to easily intepret market ranges and volatility as well as adjust risk management accordingly.</p> 
               

              </div>

              <div  className={theme=="light"?"w-[15rem] hover:cursor-pointer hover:shadow-2xl transition-all ease-in duration-150 text-black pb-4 px-2 pt-4 rounded-md shadow-lg bg-[#FFFCFB]":"w-[15rem]  hover:cursor-pointer text-black pb-4 px-2 pt-4 rounded-md shadow-lg bg-gradient-to-r from-[#483d64] to-[#130925]"} >
                <h1 className='text-sm font-bold text2'> TrendScan </h1>
                <p className='lg:text-xs text-sm mt-2 text text2'> TrendScan is the ultimate custom watchlist scanner, designed to detect the best opportunities to profit in the market. With advanced analysis of trends, breakouts, and volatility on assets in your watchlists, TrendScan sorts them by your preferences to help you quickly recognize and react to the latest and most promising opportunities in the market. </p> 
               

              </div>
              
                           
           </div>

          </div> 
      </Container>
   </div>
  )
}

export default Tools