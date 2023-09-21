import React, { useState } from 'react'
import { Container } from '../styles/Container'
import { useTheme } from "next-themes";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Tools = () => {

  const { theme, setTheme } = useTheme();
  const [activeButton, setActiveButton] = useState(1);

  return (
  <div className={theme=="light"?"bg-[#FFFCFB]":"toolsdarkbg"}> 
   
     <Container id='tools'  className=' md:pt-20 pt-16 lg:pt-20 pb-6'>
        <div className='text-center'>
          <h1 className='font-bold uppercase  text-transparent text-sm bg-clip-text bg-gradient-to-r from-[#D32652] to-[#8466E1] '>Tools </h1>
          <h1 className='font-bold md:text-2xl text-secondary text-xl mt-2 w-full mx-auto md:w-[60%]  lg:w-[60%] smallTextI'> Empower Your Trading Strategy with Our Suite of Advanced Tools </h1>
          <img className='w-[13rem] -mt-[8.5rem] hidden xl:flex lg:ml-2  mx-auto' src='./Images/homepage/globe.png' alt='globe'/>
          <Tabs 
            defaultValue="Analysis Tools" 
            className="w-full mx-auto -mt-10"
          >
            <TabsList className="bg-black/8">
              <TabsTrigger value="Analysis Tools" onClick={() => setActiveButton(1)} className={`${activeButton === 1 ? "bg-gradient-to-r from-[#D32652] to-[#8466E1]" : "bg-gray-600"} text-white w-[15rem]`}>Analysis Tools</TabsTrigger>
              <TabsTrigger value="Risk Management Tools" onClick={() => setActiveButton(0)} className={`${activeButton === 0 ? "bg-gradient-to-r from-[#D32652] to-[#8466E1]" : "bg-gray-600"} text-white w-[15rem]`}>Risk Management Tools</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

       

        <div className=' lg:flex lg:justify-between lg:px-10 '> 
          
          {
            activeButton === 1 ? (
              <div  className='grid sm:grid-cols-3 gap-5 lg:mx-auto mx-auto w-fit mt-6 lg:px-2 items-center'> 
                
                {/* Grid 1: Pulse Tool */}
                <div className={theme == "light" ? "w-[15rem] hover:cursor-pointer hover:shadow-2xl transition-all ease-in duration-150 text-black pb-4 px-2 pt-4 rounded-md shadow-lg bg-[#FFFCFB]" : "w-[15rem] hover:cursor-pointer text-black pb-4 px-2 pt-4 rounded-md shadow-lg bg-gradient-to-r from-[#483d64] to-[#130925]"} >
                  <h1 className='text-sm font-bold text2'> Pulse </h1>
                  <p className='lg:text-xs text-sm mt-2 text text2'> Pulse is a multi-timeframe algorithmic trend detection tool, helping users to easily detect and visualize trend strength and direction for an asset by categorizing price action into one of four possible outputs.
                  </p> 
                </div>

                {/* Grid 2: WatchlistTool and Shift Tool stacked */}
                <div className='space-y-5'>
                  <div className={theme == "light" ? "w-[15rem] hover:cursor-pointer hover:shadow-2xl transition-all ease-in duration-150 text-black pb-4 px-2 pt-4 rounded-md shadow-lg bg-[#FFFCFB]" : "w-[15rem] hover:cursor-pointer text-black pb-4 px-2 pt-4 rounded-md shadow-lg bg-gradient-to-r from-[#483d64] to-[#130925]"} >
                    <h1 className='text-sm font-bold text2'> Shift </h1>
                    <p className='lg:text-xs text-sm mt-2 text text2 '> Shift is a price momentum analysis tool that helps you quickly identify the direction and speed of price movement across multiple timeframes. With Shift, you can easily recognize market trends and potential price breakouts, shortening your reaction time in the markets. </p> 
                  </div>
                  <div className={theme == "light" ? "w-[15rem] hover:cursor-pointer hover:shadow-2xl transition-all ease-in duration-150 text-black pb-4 px-2 pt-4 rounded-md shadow-lg bg-[#FFFCFB]" : "w-[15rem] hover:cursor-pointer text-black pb-4 px-2 pt-4 rounded-md shadow-lg bg-gradient-to-r from-[#483d64] to-[#130925]"} >
                    <h1 className='text-sm font-bold text2'> TrendScan </h1>
                    <p className='lg:text-xs text-sm mt-2 text text2'> TrendScan is the ultimate custom watchlist scanner, designed to detect the best opportunities to profit in the market. With advanced analysis of trends, breakouts, and volatility on assets in your watchlists, TrendScan sorts them by your preferences to help you quickly recognize and react to the latest and most promising opportunities in the market. </p> 
                  </div>
                </div>

                {/* Grid 3: Levels Tool */}
                <div className={theme == "light" ? "w-[15rem] hover:cursor-pointer hover:shadow-2xl transition-all ease-in duration-150 text-black pb-4 px-2 pt-4 rounded-md shadow-lg bg-[#FFFCFB]" : "w-[15rem] hover:cursor-pointer text-black pb-4 px-2 pt-4 rounded-md shadow-lg bg-gradient-to-r from-[#483d64] to-[#130925]"} >
                  <h1 className='text-sm font-bold text2'> Levels </h1>
                  <p className='lg:text-xs text-sm mt-2 text text2'> Levels is a price contextualization tool, allowing users to visualize recent price extremes on various timeframes. Use these levels, along with the rise and fall percentages to easily intepret market ranges and volatility as well as adjust risk management accordingly.</p> 
                </div>

              </div>
            ) : (
              <div  className='grid sm:grid-cols-3 gap-5 lg:mx-auto mx-auto w-fit mt-10 lg:px-2'> 
                
                <div  className={theme=="light"?"w-[15rem] hover:cursor-pointer hover:shadow-2xl transition-all ease-in duration-150   text-black pb-4 px-2 pt-4 rounded-md shadow-lg bg-[#FFFCFB]":"w-[15rem] hover:cursor-pointer  text-black pb-4 px-2 pt-4 rounded-md shadow-lg bg-gradient-to-r from-[#483d64] to-[#130925]"} >
                  <h1 className='text-sm font-bold text2'> Zones  </h1>
                  <p className='lg:text-xs text-sm mt-2 text text2'> Zones is an integral risk management tool, empowering users to evaluate prospective
                    profit and loss scenarios for both long and short positions across various position sizes,
                    contingent upon the expected upcoming price levels determined by analysis of market
                    volatility and price range. 
                  </p> 
                  
                </div>

                <div  className={theme=="light"?"w-[15rem]  hover:cursor-pointer hover:shadow-2xl transition-all ease-in duration-150 text-black pb-4 px-2 pt-4 rounded-md shadow-lg bg-[#FFFCFB]":"w-[15rem] hover:cursor-pointer  text-black pb-4 px-2 pt-4 rounded-md shadow-lg bg-gradient-to-r from-[#483d64] to-[#130925]"} >
                  <h1 className='text-sm font-bold text2'> Range </h1>
                  <p className='lg:text-xs text-sm mt-2 text text2 '>
                    Range is a volatility analysis tool, displaying the Average True Range as both a value
                    and percentage for the selected timeframe on the desired asset. Easily understand
                    volatility and trend strength when using Range in conjunction with the other tools’
                    outputs. 
                  </p>                            
                </div>

                <div  className={theme=="light"?"w-[15rem] hover:cursor-pointer hover:shadow-2xl transition-all ease-in duration-150 text-black pb-4 px-2 pt-4 rounded-md shadow-lg bg-[#FFFCFB]":"w-[15rem] hover:cursor-pointer  text-black pb-4 px-2 pt-4 rounded-md shadow-lg bg-gradient-to-r from-[#483d64] to-[#130925]"} >
                  <h1 className='text-sm font-bold text2'> Surge  </h1>
                  <p className='lg:text-xs text-sm mt-2 text text2'>
                    Surge is an advanced tool for analyzing price breakouts and breakdowns, offering the
                    capability to assess surge levels across 17 different timeframes. It presents the
                    percentage difference between the current price and surge level, providing valuable
                    insights into the strength of a move and its potential for continuation.   
                  </p> 
                </div>   

              </div>
            )
          }

        </div> 
      </Container>
   </div>
  )
}

export default Tools