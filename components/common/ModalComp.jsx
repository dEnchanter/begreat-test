import React from 'react'
import ButtonComp from '../ui/ButtonComp'

export default function ModalComp({setModal}) {
  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
   
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
        
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start ">
              {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div> */}
              <div className="pt-6 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-[18px] font-semibold leading-6 modalText mb-3" id="modal-title ">Cancel Subscription plan</h3>
                <h3 className="text-[16px] font-normal leading-6 smallTextI" id="modal-title">Are you sure you want to cancel your subscription plan?</h3>
                <div className="mt-2">
                  <p className="text-[14px] text-gray-500 font-normal xl:w-[82%] leading-7">You will loose so many offers by cancelling your subscription by cancelling your subscription  your account will still be be active and you can subscribe again anytime to enjoy our premium services we can’t afford to let you go. </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white px-10 py-3 flex  justify-between gap-8 mb-5">
            <ButtonComp
            onClick={()=>setModal(false)}
            btnText={'Stay With US'}
            btnTextClassName='w-full text-[12px] rounded-md py-3 text-center border-[#fff] border-[1px] modalBtnText'
            />
              <ButtonComp
            btnText={'Cancel my Subscription'}
            btnTextClassName='w-full  text-[12px] rounded-md py-3 bg-[#FF0000] text-white text-center border-[#fff] border-[1px]'
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}
