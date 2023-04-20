import React, { useState } from 'react'
import { GrCheckmark, GrFormCheckmark } from 'react-icons/gr'
import { FcCheckmark } from 'react-icons/fc'
import ButtonComp from '../../../ui/ButtonComp'
import ModalComp from '../../../common/ModalComp'
import { useSubscribeMutation } from '../../../../store/auth/authApi'
import { useEffect } from 'react'

export default function UpgradeAccount({theme}) {
    const [modal,setModal] =useState();
    const [paymentType,setPaymentType]=useState()
    const WhatInCludes =[
        'Pulse tool',
        'Shift tool',
        'Rise and Fall tool',
        'TrendScan',
        'Additional Timeframes'
    ]

    const [
        subscribePlan,
        { isLoading: SubscribeUpdateLoader, isSuccess: SubscribeUpdateSuccess,isError:SubscribeIsError,error:SubscribeError },
      ] = useSubscribeMutation();

      const handleSubscribePlan =(planID)=>{
        const payload={
            priceId:planID
        }
        subscribePlan(payload).unwrap().then((data)=>{
             window.location.href = data?.sessionURL;
        }).catch((err)=>console.log(err))
      }

      useEffect(() => {
        if(SubscribeUpdateSuccess){
            // window.location.href = 'https://www.example.com';
        }
      }, [SubscribeUpdateSuccess])
      
    
    
  return (
    <section>
        {modal && <ModalComp setModal={setModal}/>}
        <section className='flex flex-wrap  justify-between pb-10'>
            <div className=' w-ful lg:w-[30%] mb-5 lg:mb-0'>
                <div className='text-[24px] secondary font-bold'>
                Pricing Plans
                </div>
                <div className='text-[14px] smallText'>
                Our pricing plans are designed to be affordable, flexible, and scalable, so you can choose the plan that best fits your investment goals.
                </div>
            </div>
            {/*  */}
            <div className='w-full lg:w-[60%]'>
            <div className='flex flex-wrap gap-5 justify-center  mb-10 overflow-hidden'>
                    <div className='py-5 px-5 lg:px-10 shadow-lg planBG rounded-md w-[391px] animate__fadeInRight animate__animated'>
                        <div className='text-[22px] secondary flex gap-8 items-center font-semibold mb-2' >Standard Plan 
                         <ButtonComp btnText={'Current Plan'} btnTextClassName='text-[12px] CurrentPlanBtn px-5 py-1 rounded-xl font-extrabold font-2'/></div>
                         <div className='text-[14px] smallText mb-5'>All the basics for starting a new business</div>

                         <div className='text-[40px] font-bold secondary mb-8'>$50<span className='smallTextI text-[16px]'>/mo</span></div>

                         <div className='mb-8'>
                            <ButtonComp
                            btnText={SubscribeUpdateLoader && paymentType==="monthly"?'Loading...':' Subscription'}
                            btnTextClassName={'CurrentPlanBtnI text-[14px] border-[1px] w-full rounded-md'}
                            onClick={()=>{
                                setPaymentType('monthly')
                                handleSubscribePlan(process.env.NEXT_PUBLIC_PAYMENTI)
                            }}
                            />
                         </div>

                         <div>
                            <div className='text-[15px] mb-5 smallTextI font-medium'>What’s included</div>
                            <ul className='text-[14px] smallTextI'>
                                {WhatInCludes?.slice(0,3)?.map((item)=><li className='flex gap-4 items-center mb-3 '>
                                    <div className={`${theme ==="dark" && 'bgII p-1 rounded-full'}`}><FcCheckmark color='#10B981'/></div>
                                     {item}</li>)}
                              
                            </ul>
                         </div>
                    </div>
                    {/*  */}
                    <div className='py-5 px-5 lg:px-10 shadow-lg planBG rounded-md w-[391px] animate__fadeInRight animate__animated'>
                        <div className='text-[22px] secondary flex gap-8 items-center font-semibold mb-2' >Premium Plan
                         {/* <ButtonComp btnText={'Current Plan'} btnTextClassName='text-[12px] CurrentPlanBtn px-5 py-1 rounded-xl font-extrabold font-2'/> */}
                         </div>
                         <div className='text-[14px] smallText mb-5'>Highest precision and maximum data to capture all all opportunities</div>

                         <div className='text-[40px] font-bold secondary mb-8'>$100<span className='smallTextI text-[16px]'>/mo</span></div>

                         <div className='mb-8'>
                            <ButtonComp
                                onClick={()=>{
                                    setPaymentType('yearly')

                                    handleSubscribePlan(process.env.NEXT_PUBLIC_PAYMENTII)
                                }}
                                btnText={SubscribeUpdateLoader && paymentType==="yearly"?'Loading...':' Subscription'}
                                btnTextClassName={'currentPlanBtnBgI text-white text-[14px] border-[1px] w-full rounded-md'}
                            />
                         </div>

                         <div>
                            <div className='text-[15px] mb-5 smallTextI font-medium'>What’s included</div>
                            <ul className='text-[14px] smallTextI'>
                                {WhatInCludes?.map((item)=><li className='flex gap-4 items-center mb-3 '>
                                    <div className={`${theme ==="dark" && 'bgII p-1 rounded-full'}`}><FcCheckmark color='#10B981'/></div>
                                     {item}</li>)}
                              
                            </ul>
                         </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                <ButtonComp
                onClick={()=>setModal(true)}
                            btnText={'Cancel Subscription'}
                            btnTextClassName={'CurrentPlanBtnI text-[16px] border-[1px] py-3 w-[60%] rounded-md'}
                            />
                </div>
            </div>
        </section>
    </section>
  )
}
