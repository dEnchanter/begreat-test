import React from 'react'
import FallBackImage from './FallBackImage'
import {HiOutlineMoon, HiOutlineSun, HiUser} from 'react-icons/hi'
import {BsMoon, BsSun} from 'react-icons/bs'
import { AiFillSetting } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { useTheme } from 'next-themes'
import ButtonComp from '../ui/ButtonComp'
import { useRouter } from 'next/router'

export default function DashBoardNav({change}) {
    const { theme, setTheme } = useTheme();
    const router =useRouter()
    
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
            <div className='flex items-center gap-3 xl:gap-7 '>
                <div className='bg-modeBackground px-[8px] rounded-xl  gap-2  items-center whitespace-nowrap md:flex'>
                <div className={`   ${theme ==="light" && 'bg-modeIconBackSelect py-1 px-2 my-1 rounded-lg text-center '}`}><BsSun onClick={()=>setTheme('light')} size={18} className='iconColor'/></div>
                <div className={`   rounded-lg ${theme ==="dark" && 'bg-modeIconBackSelect py-1 my-1 px-2 rounded-lg text-center '}`}><HiOutlineMoon onClick={()=>setTheme('dark')} size={18} className='iconColor'/></div>
                </div>
               {!change? <div className='border p-[5px] borderColor  rounded'>
                    <ButtonComp
                    onClick={()=>router.push('/dashboard/settings')}
                    btnText={<AiFillSetting size={24}/>}
                    />
                </div>
                :
                <div>
                    <ButtonComp
                      onClick={()=>router.push('/dashboard')}
                    btnText={'Go to Dashboard'}
                    btnTextClassName='iconColor2 textII rounded-xl px-4'
                    />
                    </div>}
                <div className='iconColor1 p-3 rounded-full'>
                    <HiUser size={20} className=''/>
                </div>
            </div>
        </div>
    </nav>
  )
}
