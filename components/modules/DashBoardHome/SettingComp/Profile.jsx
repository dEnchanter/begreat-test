import React from 'react'
import ButtonComp from '../../../ui/ButtonComp'
import TextInput from '../../../ui/TextInput'

export default function Profile() {
  return (
    <section>
        
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
            <ButtonComp btnText={'Cancel'} btnTextClassName='text-center  btnClick border-[1px] w-full text-[#fff] rounded'/>
            </div>
          </div>
        </section>
    </section>
  )
}
