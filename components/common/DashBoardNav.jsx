import React, { useState } from 'react';
import FallBackImage from './FallBackImage'
import {HiOutlineMoon, HiOutlineSun, HiUser} from 'react-icons/hi'
import {BsMoon, BsSun} from 'react-icons/bs'
import { AiFillSetting } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { useTheme } from 'next-themes'
import ButtonComp from '../ui/ButtonComp'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { logout } from "../../store/auth";
import { logoutUser, logoutUserI } from '../../store/auth/';
import Link from 'next/link';

export default function DashBoardNav({change}) {
  const { theme, setTheme } = useTheme();
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const dispatch  = useDispatch();

  const handleLogoutClick = () => {
    dispatch(logoutUser());
     router.push('/login');
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
    
  return (
    <nav>
        <div className='flex justify-between items-center px-3 xl:px-5 pt-4  pb-8 shadow-xl bg-header '>
            <div  className="hover:cursor-pointer"  onClick={()=>router.push('/dashboard')}>
                <img
                // src={'/Images/Dashboard/Logo1.png'}
                 src={theme=="dark"?'/Images/Dashboard/Logo1.png':'/Images/Dashboard/logo.png'}
                // width={199}
                // height={59}
                className='h-8 sm:h-16 '
                />
                
            </div>
            <div className='flex items-center   gap-3 xl:gap-7 '>
            <Link href=" https://docs.begreat.finance" >
            <ButtonComp
                      
                      btnText={'Docs'}
                      btnTextClassName='iconColor1  text-xs md:text-base rounded-xl px-2'
                      />
            </Link>
                <div className='bg-modeBackground px-[8px] rounded-xl  gap-2  items-center whitespace-nowrap flex'> 
                <div className={`   ${theme ==="light" && 'bg-modeIconBackSelect py-1 px-2 my-1 rounded-lg text-center '}`}><BsSun onClick={()=>setTheme('light')} size={18} className='iconColor hover:cursor-pointer'/></div>
                <div className={`   rounded-lg ${theme ==="dark" && 'hover:cursor-pointer bg-modeIconBackSelect py-1 my-1 px-2 rounded-lg text-center '}`}><HiOutlineMoon onClick={()=>setTheme('dark')} size={18} className='iconColor'/></div>
                </div>
               {!change? <div className='border hover:bg-gray-500  borderColor  rounded'>
                    <ButtonComp
                    onClick={()=>router.push('/dashboard/settings')}
                    btnText={<AiFillSetting size={20}/>}
                    />
                </div>
                :
                <div>
                    <ButtonComp
                      onClick={()=>router.push('/dashboard')}
                    btnText={'Go to Dashboard'}
                    btnTextClassName='iconColor2 textII text-xs md:text-base rounded-xl px-4 py-2'
                    />
                    </div>}
                  <div className="relative">
                    <div
                        className="iconColor1 p-2 rounded-full hover:bg-gray-500 cursor-pointer"
                        onClick={toggleDropdown}
                    >
                        <HiUser size={20} className="hover:cursor-pointer" />
                    </div>
                    
                    {showDropdown && (
                        <div
                        className="absolute z-10 right-0  w-[6rem]  mt-2  bg-modeBackground  border border-gray-500 rounded shadow-lg"
                        >
                        <div
                            className="px-2   text-left  text-base cursor-pointer pt-2 pb-2 "
                           
                        >   
                             <a href="https://discord.gg/2n5X59eeg2"  target='blank' className='hover:text-red-700'  >  Discord </a> 
                              <a href="mailto:support@begreat.finance" className='hover:text-red-700 w-full'  > Support </a> 
                            <h1 className='hover:text-red-700' onClick={handleLogoutClick}> Sign Out </h1>
                        </div>
                        </div>
                        )}
                        </div>
            </div>
        </div>
    </nav>
  )
}
