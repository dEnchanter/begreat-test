import React from 'react'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import FallBackImage from '../../../common/FallBackImage'
import ButtonComp from '../../../ui/ButtonComp'
import TextInput from '../../../ui/TextInput'

export default function Referrals() {
  return (
    <section className='pb-10'>
        <div className='pl-4 pr-24 py-4 rounded-lg paymentBorder border-[1.5px] inline-block mb-20'>
            <div className='priceText text-[18px] font-medium'>Total Referrals</div>
            <div className='text-[#FF0000] font-semibold text-[24px]'>10</div>
        </div>
        {/*  */}

        <div className='lg:w-[80%]'>
            <div className='mb-10'>
                <div className='text[18px] font-semibold modalText mb-2'>Invite your Friends</div>
                <div className='text-[14px]  paymentTextII mb-5'>Insert your friend’s Email address and Send them an Invitations to join <span className='text-[#FF0000] font-semibold'>Be Great Finance</span></div>
                <div className='flex items-stretch gap-3'>
                    <div className='w-[80%]'>
                    <TextInput
                    placeholder='Email Address'
                    containerClassName={'border-[1px] paymentBorder '}
                    />
                    </div>
                    <ButtonComp
                    btnText={<span className='flex items-center gap-2 text-white rounded-md text-[12px]'>Send Invite <span>
                        <FallBackImage
                        src={'/Images/icon/send.png'}
                        width={24}
                        height={24}
                        />
                        </span></span>}
                    btnTextClassName='bg-[#FF0000] px-4 rounded-md'
                    />
                </div>
            </div>
            {/*  */}
            <div className='mb-10'>
                <div className='text[18px] font-semibold modalText mb-2'>Share the Referral Link</div>
                <div className='text-[14px]  paymentTextII mb-5'>You can also share your referral link by copying and sending it to your friends to join <span className='text-[#FF0000] font-semibold'>Be Great Finance</span></div>
                <div>
                <div className='flex items-stretch gap-3'>
                    <div className='w-[80%]'>
                    <TextInput
                    placeholder='Begreatfinance.com/referral-0125455884'
                    containerClassName={'border-[1px] paymentBorder '}
                    />
                    </div>
                    <ButtonComp
                    btnText={<span className='flex items-center gap-2 text-white rounded-md text-[12px]'>Copy Link <span>
                        <FallBackImage
                        src={'/Images/icon/copy.png'}
                        width={24}
                        height={24}
                        />
                        </span></span>}
                    btnTextClassName='bg-[#FF0000] px-4 rounded-md'
                    />
                </div>
                </div>
            </div>
            {/*  */}

            <div>
                <div className='text[18px] font-semibold modalText mb-8'>Share the Referral Link</div>
                <div className='flex items-center gap-6'>
                    <div className='bg-[#FEF3F2] text-[#FF0000] rounded-full p-4'><BsTwitter size={20}/></div>
                    <div className='bg-[#FEF3F2] text-[#FF0000] rounded-full p-4'><AiFillInstagram size={25}/></div>
                    <div className='bg-[#FEF3F2] text-[#FF0000] rounded-full p-4'><AiFillLinkedin size={25}/></div>
                    <div className='bg-[#FEF3F2] text-[#FF0000] rounded-full p-4'><BsFacebook size={20}/></div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}
