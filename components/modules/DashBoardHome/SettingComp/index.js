import React, { useState } from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { CiWallet } from 'react-icons/ci'
import { AiOutlineSecurityScan } from 'react-icons/ai'
import FallBackImage from '../../../common/FallBackImage'
import { useTheme } from 'next-themes'
import PageSwitch from '../../../common/PageSwitch'
import Profile from './Profile'
import UpgradeAccount from './UpgradeAccount'
import PaymentInformation from './PaymentInformation'
import ButtonComp from '../../../ui/ButtonComp'
import Referrals from './Referrals'
import { useGetUserMutation, useGetUserProfileQuery } from '../../../../store/auth/authApi'
import { getToken, getUserDataS } from '../../../../helper'

export default function SettingComp() {
  const { theme, setTheme } = useTheme();
  const [pageName,setPageName] =useState('profile');
  const userId =getUserDataS()?.userId
  const { data, isLoading, error,refetch,isError, } = useGetUserProfileQuery(); // Use the generated hook


  // console.log(error,isError
  //   ,'userId')

  //   const {displayName,email,} =data?.userRecord

const usePage =[
  {
    name:'profile',
    component:<Profile data={data?.userRecord} refetch={refetch}/>
  },
  {
    name:'Upgrade account',
    component:<UpgradeAccount theme={theme}/>
  },
  {
    name:'Payment Information',
    component:<PaymentInformation theme={theme}/>
  },
  {
    name:'Referrals',
    component:<Referrals theme={theme}/>
  }
]

const Header=[
  {
    name:'profile',
    label:'Profile Information',
    icon:<HiOutlineUserCircle size={30}/>
  },
  {
    name:'Upgrade account',
    label:'Upgrade account',
    icon:<HiOutlineUserCircle size={30}/>
  },
  {
    name:'Payment Information',
    label:'Payment Information',
    icon:<CiWallet size={30}/>
  },
  // {
  //   name:'Security',
  //   label:'Security',
  //   icon:<AiOutlineSecurityScan size={30}/>
  // },
  {
    name:'Referrals',
    label:'Referrals',
    image:true
  },
]

  return (
    <section className='px-3 lg:px-10'>
        <section className='mb-10'>
          <div className='flex flex-wrap items-start'>
            <div className='flex-grow w-full xl:w-[80%]'>
              <div className='flex gap-10 items-center  overflow-x-scroll md:overflow-x-hidden pb-4 mt-4'>
              {Header?.map(({name,label,icon,image})=>
           <div onClick={()=>setPageName(name)} className={`flex gap-2 items-center text-[14px] hover:opacity-80 cursor-pointer font-medium whitespace-nowrap lg:whitespace-normal   ${pageName ===name?'text-[#FF0000]':'priceText'}`}>
              {icon?icon: <FallBackImage src={theme==='dark'?'/Images/icon/star.png':'/Images/icon/star1.png'} width={24} height={24}/>}
            {label}
            
            </div>

          )}
          </div></div>
          {false && <div className='flex-grow xl:w-[20%] mt-1'>
              <div className='flex gap-2 items-center'>
                <ButtonComp
                btnText={'Current Plan'}
                btnTextClassName='paymentTextI text-[20px]'
                />
                <ButtonComp
                btnText={'Standard plan'}
                btnTextClassName=' text-[16px] border-[#FF0000] border-[1px] rounded-lg px-4 text-[#FF0000]'
                />
              </div>
          </div>}
          </div>
          {/* <div className={`flex gap-2 items-center text-[14px] font-medium whitespace-nowrap lg:whitespace-normal   ${pageName ==='profile'?'text-[#FF0000]':'priceText'}`}><HiOutlineUserCircle size={30}/> Profile Information</div>
          <div className='flex gap-2 items-center text-[14px] font-medium priceText whitespace-nowrap lg:whitespace-normal'><HiOutlineUserCircle size={30}/> Upgrade account</div>
          <div className='flex gap-2 items-center text-[14px] font-medium priceText whitespace-nowrap '><CiWallet size={30}/> Payment Information </div>
          <div className='flex gap-2 items-center text-[14px] font-medium priceText whitespace-nowrap '><AiOutlineSecurityScan size={30}/> Security </div>
          <div className='flex gap-2 items-center text-[14px] font-medium priceText  whitespace-nowrap '>
            <FallBackImage src={theme==='dark'?'/Images/icon/star.png':'/Images/icon/star1.png'} width={24} height={24}/>
             Referrals </div> */}
         
        </section>
            <PageSwitch
            arrayComp={usePage}
            pageName={pageName}
            />
    </section>
  )
}
