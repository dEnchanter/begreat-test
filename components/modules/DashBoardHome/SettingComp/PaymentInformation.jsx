import React, { useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import FallBackImage from '../../../common/FallBackImage'
import ButtonComp from '../../../ui/ButtonComp'
import TextInput from '../../../ui/TextInput'
import { usePaymentInputs,formatCardNumber  } from 'react-payment-inputs';
import { useTheme } from 'next-themes'
import TableList from './TableList'


export default function PaymentInformation() {
  const { theme, setTheme } = useTheme();
  const [cardNumber,setCardNumber] =useState()

  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs();

  const handleChangeCVC = () =>{

  }
 
  const [cardNumberValue, setCardNumberValue] = useState(meta.cardNumber?.value);

  const handleCardNumberChange = (e) => {
    const rawValue = e.target.value.replace(/\s/g, ''); // remove any existing spaces
    const formattedValue = rawValue.replace(/(\d{4})/g, '$1 '); // add spaces after every 4 digits
    setCardNumberValue(formattedValue); // update the component state with the formatted value
    meta.cardNumber?.onChange(formattedValue); // update the cardNumber value in the meta object
  };

  console.log(cardNumberValue)
  

  return (
    <section className='pb-20'>
      
        <section className='flex flex-wrap items-start'>
            <div className='w-full lg:w-[70%] mb-5 lg:mb-0'>
                <div className='mx-3'>
                    <div className='flex justify-between paymentBorder border-[1.5px] py-4 px-3 lg:px-5 rounded-lg items-center mb-4'>
                        <div>
                            <div className='paymentSmallText text-[12px] font-medium mb-3'>YOUR PLAN</div>
                            <div className='modalText font-semibold text-[20px]'>Standard</div>
                        </div>
                        <div>
                            <ButtonComp
                            btnText={'Upgrade Plan'}
                            btnTextClassName='bg-[#FF0000] text-white text-[12px] rounded-md px-4 py-3'
                            />
                        </div>
                    </div>
                    {/*  */}
                    <div className='paymentBorder border-[1.5px] py-4 px-3 lg:px-5 rounded-md'>
                    <div className='flex justify-between   rounded-lg items-center mb-4'>
                       
                       <div className='text-[12px] font-medium'>PAYMENT METHOD</div>
                       <div className='flex gap-3 items-center'>
                    
                       <ButtonComp
                       btnText={'Debit Card'}
                       btnTextClassName='text-[12px] font-normal text-[#FF0000]'
                       />
                    
                      <ButtonComp
                       btnText={'Cryptocurrency'}
                       btnTextClassName='text-[12px] font-normal paymentText'
                       />
                       </div>
                  
               </div>
               {/*  */}
               <div className='flex  flex-wrap justify-between  mb-5'>
                   <div className='paymentBorder border-[1px] w-full lg:w-[49%] px-4 py-3 rounded-md mb-3 lg:mb-0'>
                       <div className='mx-3'>
                       <div className='mb-3'>
                           <FallBackImage
                           src={'/Images/icon/mastercard.png'}
                           width={36}
                           height={23}
                           />
                       </div>

                       <div className='flex items-center gap-6 smallTextI font-semibold'>
                        <div>****</div>
                        <div>****</div>
                        <div>****</div>
                        <div>8986</div>
                        </div>
                       </div>
                   </div>
                   <div className='paymentBorder border-[1px] w-full lg:w-[49%] px-4 py-3 rounded-md '>
                       <div className='mx-3'>
                       <div className='mb-3'>
                           <FallBackImage
                           src={'/Images/icon/visa.png'}
                           width={36}
                           height={23}
                           />
                       </div>

                       <div className='flex items-center gap-6 smallTextI font-semibold'>
                        <div>****</div>
                        <div>****</div>
                        <div>****</div>
                        <div>1234</div>
                        </div>
                       </div>
                   </div>
                   <div></div>
               </div>
               {/*  */}
               <div className='mb-4'>
                <ButtonComp
                btnText={<span className='text-[#FF0000]  font-semibold flex gap-2 items-center'><BiPlus size={25}/> Add New Card</span>}
                />
               </div>
               {/*  */}
               <div className='paymentBorder rounded-md border-[1px] px-3 lg:px-5 py-4 mb-5'>
                <div className='text3 text-[18px] font-semibold mb-5'>Add new card</div>
                {/*  */}
                <div className='flex items-center mb-6 flex-wrap'>
            <div className='flex-grow w-full lg:w-[50%] lg:pr-3 mb-6 lg:mb-0'>
              <TextInput  placeholder='Name on Card' containerClassName={' paymentBorder border-[1px] '} inputClassName={'text-[14px]'}/>
            </div>
            <div className='flex-grow w-full lg:w-[50%] lg:pl-3'>
            <input className={`  lg:px-3 outline-0 bg-transparent  paymentBorder border-[1px]  h-[46.6px] rounded-md px-3 w-full ${theme==='dark' ?'placeholder-[#fff]':'placeholder-[#595959]'}`} {...getCardNumberProps({ onChange: handleCardNumberChange,value: cardNumberValue })} 
            
            // value={cvc}
             />            </div>
          </div>
          {/*  */}
          <div className='flex items-center mb-12 flex-wrap'>
            <div className='flex-grow w-[50%] lg:w-[50%] pr-3'>
            <input className={`  lg:px-3 outline-0 bg-transparent  paymentBorder border-[1px]  h-[46.6px] rounded-md px-3 w-full ${theme==='dark' ?'placeholder-[#fff]':'placeholder-[#595959]'}`} {...getExpiryDateProps({ onChange: handleChangeCVC })} 
            // value={cvc}
             />            </div>
            <div className='flex-grow w-[50%] lg:w-[50%] pl-3'>
            <input className={`  lg:px-3 outline-0 bg-transparent  paymentBorder border-[1px]  h-[46.6px] rounded-md px-3 w-full ${theme==='dark' ?'placeholder-[#fff]':'placeholder-[#595959]'}`} {...getCVCProps({ onChange: handleChangeCVC })} 
            // value={cvc}
             />

              {/* <TextInput placeholder='Card Number' inputClassName={'text-[14px]'}  containerClassName={' paymentBorder border-[1px] '}/> */}
            </div>
          </div>
          {/*  */}
          <div className='mt-10 flex justify-end gap-6'>
            <ButtonComp
            btnText={'Cancel'}
            btnTextClassName='paymentText   paymentBorder border-[1px] px-6 rounded-md'
            />
            <ButtonComp
            btnText={'Save Changes'}
            btnTextClassName='   bg-[#FF0000] border-[#FF0000] text-white border-[1px] px-6 rounded-md'

            />
          </div>
               </div>
               {/*  */}
             
               <div>
             
               </div>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-[30%]'>
              <div className=' paymentBorder border-[1.5px] px-4 rounded-md pt-4 pb-10 mx-3'>
              <div className='modalText text-[14px] font-medium mb-5'>Payment History</div>

              {/*  */}

              <div>
                <TableList/>
                <TableList/>
                <TableList/>
                <TableList/>
              </div>
              </div>
            
            </div>
        </section>
    </section>
  )
}
