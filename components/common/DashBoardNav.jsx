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
export default function DashBoardNav({change}) {
    const { theme, setTheme } = useTheme();
     const [showDropdown, setShowDropdown] = useState(false);
    const router =useRouter();
    const dispatch  =useDispatch();

     const handleLogoutClick = () => {
    dispatch(logoutUser());
    // router.push('/login');
  };

    const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
    
  return (
    <nav>
        <div className='flex justify-between items-center px-3 xl:px-5 py-7 shadow-xl bg-header '>
            <div  className="hover:cursor-pointer"  onClick={()=>router.push('/dashboard')}>
                <img
                // src={'/Images/Dashboard/Logo1.png'}
                 src={theme=="dark"?'/Images/Dashboard/Logo1.png':'/Images/Dashboard/logo.png'}
                // width={199}
                // height={59}
                className='h-10 sm:h-16'
                />
                
            </div>
            <div className='flex items-center  gap-3 xl:gap-7 '>
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
                    btnTextClassName='iconColor2 textII rounded-xl px-4'
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
                        className="absolute right-0  w-fit mt-[3px]    border border-gray-500 rounded shadow-lg"
                        >
                        <div
                            className="px-2  py-0.5 text-left  text-base cursor-pointer hover:bg-gray-700 "
                            onClick={()=>dispatch(logoutUser())}
                        >
                            Logout
                        </div>
                        </div>
                        )}
                        </div>
            </div>
        </div>
    </nav>
  )
}
