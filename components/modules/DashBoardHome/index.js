import React from 'react'
import TextInput from '../../ui/TextInput'
import {TbSearch} from 'react-icons/tb'
import FallBackImage from '../../common/FallBackImage'
import { AiFillSetting, AiOutlinePlus } from 'react-icons/ai'
import { HiPlus } from 'react-icons/hi'
import { IoIosArrowUp } from 'react-icons/io'

export default function DashBoardHome() {
  return (
    <section className=''>
        <div className='flex px-3 lg:px-8 flex-wrap'>
            <div className='flex-grow w-[100%] xl:w-[70%] mb-4 xl:mb-0'>
                <div className='flex items-center justify-between mx-3 flex-wrap'>
                  <div className='flex items-center gap-2 flex-wrap'>
                  <TextInput suffixIcon={<TbSearch size={25}/>}/>
                   <div className='flex gap-1 items-center'>
                   <FallBackImage
                   src={'/Images/Dashboard/coin.png'}
                   width={62}
                   height={34}
                   />
                   <h1 className='text-[25px] lg:text-[32px] font-bold text-[#080542]'>BNB/USDT</h1>
                   </div>
                  </div>
                  <div className='leading-[1.4rem]'>
                        <div className='gray mb-0'>Price</div>
                        <div className='primary text-[20px] lg:text-[24px] font-bold'>1,334.0</div>
                  </div>

                  <div>
                        <button className='bg-secondary text-white px-8 rounded-3xl py-[8px] flex items-center '><HiPlus className='mr-3' color='white'/> Watchlist</button>
                  </div>
                </div>
            </div>
            <div className='flex-grow   xl:w-[30%]'>
                <div className='mx-3  border bg-white py-3 px-3 rounded-xl'>
                <div className='flex items-center justify-between'>
                <div className='flex items-center '><AiFillSetting size={30} className='mr-3'/> <div className='secondary text-[16px] lg:text-[20px] font-semibold'>Dashboard Timeframe Settings</div></div>
                <IoIosArrowUp size={20}/>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}
