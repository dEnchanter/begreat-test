import React from 'react'
import FallBackImage from './FallBackImage'
import {HiOutlineMoon, HiOutlineSun, HiUser} from 'react-icons/hi'
import {BsMoon, BsSun} from 'react-icons/bs'
import { AiFillSetting } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'

export default function DashBoardNav() {
  return (
    <nav>
        <div className='flex justify-between items-center px-3 xl:px-5 py-5 shadow-xl'>
            <div>
                <FallBackImage
                src={'/Images/Dashboard/logo.png'}
                width={199}
                height={59}
                />
            </div>
            <div className='flex items-center gap-3 xl:gap-7'>
                <div className='bg-[#F4F4F4] px-[5px] rounded-xl flex gap-1 items-center'>
                <div className='py-1 px-2 bg-white  rounded-lg text-center'><BsSun size={18} color='#292D32'/></div>
                <div className='p-2   rounded-lg'><HiOutlineMoon size={18} color='#929292'/></div>
                </div>
                <div className='border p-[8px] border-[#F4F4F4]-4 rounded'>
                    <AiFillSetting size={24}/>
                </div>
                <div className='bg-[#EFEFEF] p-3 rounded-full'>
                    <HiUser size={20}/>
                </div>
            </div>
        </div>
    </nav>
  )
}
