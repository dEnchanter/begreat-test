import React, { useState } from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { CiWallet } from 'react-icons/ci'
import { AiOutlineSecurityScan } from 'react-icons/ai'
import FallBackImage from '../../../common/FallBackImage'
import { useTheme } from 'next-themes'
import TextInput from '../../../ui/TextInput'
import ButtonComp from '../../../ui/ButtonComp'

export default function SettingComp() {
  const { theme, setTheme } = useTheme();
  const [pageName,setPageName] =useState('profile')
  return (
    <section className='px-5 lg:px-10'>
        <section className='flex gap-10 items-center mb-10 overflow-x-scroll lg:overflow-x-hidden pb-4 mt-4'>
          <div className={`flex gap-2 items-center text-[14px] font-medium whitespace-nowrap lg:whitespace-normal   ${pageName ==='profile'?'text-[#FF0000]':'priceText'}`}><HiOutlineUserCircle size={30}/> Profile Information</div>
          <div className='flex gap-2 items-center text-[14px] font-medium priceText whitespace-nowrap lg:whitespace-normal'><HiOutlineUserCircle size={30}/> Upgrade account</div>
          <div className='flex gap-2 items-center text-[14px] font-medium priceText whitespace-nowrap '><CiWallet size={30}/> Payment Information </div>
          <div className='flex gap-2 items-center text-[14px] font-medium priceText whitespace-nowrap '><AiOutlineSecurityScan size={30}/> Security </div>
          <div className='flex gap-2 items-center text-[14px] font-medium priceText  whitespace-nowrap '>
            <FallBackImage src={theme==='dark'?'/Images/icon/star.png':'/Images/icon/star1.png'} width={24} height={24}/>
             Referrals </div>
         
        </section>

        <section className='mb-10'>
          <div className='priceText text-[20px] font-medium '>Personal Information</div>
          <div className='priceText text-[14px] font-normal'>Update your Personal details here</div>
        </section>

        <section className='overflow-hidden'>
          <div className='flex items-center mb-12 flex-wrap'>
            <div className='flex-grow w-full xl:w-[20%] px-3 text3 font-semibold text-[16px] mb-3 lg:mb-0'>Full Name</div>
            <div className='flex-grow w-[50%] lg:w-[40%] px-3'>
              <TextInput  placeholder='Rey Idowu' containerClassName={' borderColorI border-[2px] '} inputClassName={'text-[14px]'}/>
            </div>
            <div className='flex-grow w-[50%] lg:w-[40%] px-3'>
              <TextInput placeholder='Rey Idowu' inputClassName={'text-[14px]'}  containerClassName={' borderColorI border-[2px] '}/>
            </div>
          </div>
          {/*  */}
          <div className='flex items-center mb-12 flex-wrap'>
            <div className='flex-grow  w-full lg:w-[20%] px-3 text3 font-semibold text-[16px] mb-3 lg:mb-0'>Email Address</div>
            <div className='flex-grow  w-full lg:w-[80%] px-3'>
              <TextInput  placeholder='mail@abc.com' inputClassName={'text-[14px] '}  containerClassName={' borderColorI border-[2px]'}/>
            </div>
            
          </div>
           {/*  */}
           <div className='flex items-center mb-12 flex-wrap'>
            <div className='flex-grow  w-full lg:w-[20%] px-3 text3 font-semibold text-[16px] mb-3 lg:mb-0'>Backup Email Address</div>
            <div className='flex-grow w-full lg:w-[80%] px-3'>
              <TextInput  placeholder='mail@abc.com' inputClassName={'text-[14px]'}  containerClassName={' borderColorI border-[2px]'}/>
            </div>
            
          </div>
           {/*  */}
           <div className='flex items-center mb-12 flex-wrap'>
            <div className='flex-grow  w-full lg:w-[20%] px-3 text3 mb-3 lg:mb-0'>
              <div className=' text-[16px] font-semibold'>Your Photo</div>
              <div className='text-[12px]'>This photo will be displayed on your profile</div>
            </div>
            <div className='flex-grow w-full lg:w-[80%]  px-3'>
              <TextInput  placeholder='mail@abc.com' inputClassName={'text-[14px]'}  containerClassName={' borderColorI border-[2px]'}/>
            </div>
            
          </div>
          {/*  */}
          <div className='flex items-center mb-12 flex-wrap'>
            <div className='flex-grow  w-full lg:w-[20%] px-3 text3 font-semibold text-[16px] mb-3 lg:mb-0'>Password</div>
            <div className='flex-grow w-[40%] px-3'>
              <TextInput  placeholder='New Password' inputClassName={'text-[14px]'} containerClassName={' borderColorI border-[2px]'}/>
            </div>
            <div className='flex-grow w-[40%] px-3'>
              <TextInput placeholder='Confirm Password' inputClassName={'text-[14px]'} containerClassName={' borderColorI border-[2px]'}/>
            </div>
          </div>
          {/*  */}
          <div className='flex items-center mb-12 mt-10'>
            <div className='flex-grow w-[20%] px-3 text3 font-semibold text-[16px]'></div>
            <div className='flex-grow w-[40%] px-3'>
              <ButtonComp btnText={'Cancel'} btnTextClassName='text-center border-[#FF0000] border-[1px] w-full text-[#FF0000] rounded'/>
            </div>
            <div className='flex-grow w-[40%] px-3'>
            <ButtonComp btnText={'Cancel'} btnTextClassName='text-center border-[#FF0000] bg-[#EA3943] border-[1px] w-full text-[#fff] rounded'/>
            </div>
          </div>
        </section>
    </section>
  )
}
