import React from 'react'
import FallBackImage from './FallBackImage'
import {HiOutlineMoon, HiOutlineSun, HiUser} from 'react-icons/hi'
import {BsMoon, BsSun} from 'react-icons/bs'
import { AiFillSetting } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { useTheme } from 'next-themes'

export default function DashBoardNav() {
    const { theme, setTheme } = useTheme();

    
  return (
    <nav>
        <div className='flex justify-between items-center px-3 xl:px-5 py-5 shadow-xl bg-header'>
            <div>
                <FallBackImage
                // src={'/Images/Dashboard/Logo1.png'}
                 src={theme=="dark"?'/Images/Dashboard/Logo1.png':'/Images/Dashboard/logo.png'}
                width={199}
                height={59}
                />
            </div>
            <div className='flex items-center gap-3 xl:gap-7'>
                <div className='bg-modeBackground px-[8px] rounded-xl flex gap-2  items-center'>
                <div className={`   ${theme ==="light" && 'bg-modeIconBackSelect py-1 px-2 my-1 rounded-lg text-center '}`}><BsSun onClick={()=>setTheme('light')} size={18} className='iconColor'/></div>
                <div className={`   rounded-lg ${theme ==="dark" && 'bg-modeIconBackSelect py-1 my-1 px-2 rounded-lg text-center '}`}><HiOutlineMoon onClick={()=>setTheme('dark')} size={18} className='iconColor'/></div>
                </div>
                <div className='border p-[8px] border-[#F4F4F4]-4 rounded'>
                    <AiFillSetting size={24}/>
                </div>
                <div className='iconColor1 p-3 rounded-full'>
                    <HiUser size={20} className=''/>
                </div>
            </div>
        </div>
    </nav>
  )
}
