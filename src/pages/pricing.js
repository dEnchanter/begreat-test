// import React from 'react'
// import Layout from '../../components/Layout'
// import Footer from '../../components/modules/Footer'
// import { Container } from '../../components/styles/Container'
// import {FcCheckmark} from 'react-icons/fc'
// import {RxDotFilled} from 'react-icons/rx'
// import { useGetUserProfileQuery } from '../../store/auth/authApi'
// import { useRouter } from 'next/router'
// import { setPath } from '../../helper'
// import { toast } from 'react-hot-toast'

// export default function pricing() {

//   const router = useRouter();
//   const { data, isLoading, error, refetch, isError, status} = useGetUserProfileQuery(); // Use the generated hook
  
//   // console.log(data?.userRecord?.email,'isLoggedIn')

//   const handlePayment1 =(paymentId) =>{
//     const payload ={
//       link:'https://payments.begreat.finance/b/eVa3fNdHr5lr8N24gg',
//       payment:paymentId
//     }
//     // if(data?.userRecord?.email){
//       if(!data?.userRecord?.email) {
//         // router.push('https://app.begreat.finance')
//         router.push('https://payments.begreat.finance/b/eVa3fNdHr5lr8N24gg')
//     }
//     else{
//       toast.error('You have to Sign In to Buy Plan')
//       setPath(payload)
//       router.push('https://app.begreat.finance')
//     }
//   }

//   const handlePayment2 =(paymentId) =>{
//     const payload ={
//       link:'https://payments.begreat.finance/b/aEU5nV32NbJP1kA289',
//       payment:paymentId
//     }
//     if(data?.userRecord?.email){
//       router.push('https://app.begreat.finance')
//       //router.push('https://payments.begreat.finance/b/aEU5nV32NbJP1kA289')
//     }
//     else{
//       toast.error('You have to Sign In to Buy Plan')
//       setPath(payload)
//       router.push('https://app.begreat.finance')
//     }
//   }

//   return (
//     <Layout>
//        <Container> 
//          <div className='text-secondary  pt-20  '> 
//           <h1 className='text-center text-2xl font-bold'> Pricing Plans </h1>
//           <p className='text-center text-sm'>
//             Unlock the full potential of our platform with our premium account, <br className='hidden md:flex'/>  available
//           at a discounted rate for a limited time.
//         </p>
//         </div>

//        <div className='flex md:flex-row flex-col justify-center space-y-4 md:space-y-0 md:space-x-6 mt-10 pb-10'> 
//            <div className=' rounded-md shadow-lg  lg:hover:shadow-2xl hover:cursor-pointer h-[27rem]  w-full  md:mx-0 mx-auto max-w-[19rem] sm:max-w-[18rem] px-6 priceback'> 
//           <h1 className='font-bold text-xl pt-4'>Monthly Plan </h1>
//           <p className='text-xs mt-2 h-[4rem] flex items-center'> <span> <RxDotFilled className='text-[1.7rem]'/>  </span>Everything you need to navigate the markets successfully </p>
//           <h1 className='mt-3 text-xs'> <span className='text-3xl font-bold'>$50</span>/MO </h1>
//           <button className='border border-[#4F46E5] text-white hover:text-white  bg-[#4F46E5] mt-4 rounded-md py-2 text-xs w-full hover:bg-[#635ce9] transition duration-300 ease-in' onClick={()=>handlePayment1(process.env.NEXT_PUBLIC_PAYMENTI)}> Buy Plan </button> 
//           <div className='mt-5 text-xs space-y-3 '> 
//              <p className='uppercase font-semibold'> What's Included </p>
//                <p className='flex items-center'> <span> <FcCheckmark className='mr-3'/> </span> Pulse Tool </p>
//              <p className='flex items-center'> <span> <FcCheckmark className='mr-3'/> </span> Shift Tool </p>
//              <p className='flex items-center'> <span> <FcCheckmark className='mr-3'/> </span> Levels Tool </p>
//               <p className='flex items-center'> <span> <FcCheckmark className='mr-3'/> </span> TrendScan Watchlists  </p>
//                <p className='flex items-center'> <span> <FcCheckmark className='mr-3'/> </span> Additonal Timeframes </p>
//           </div>
//         </div>

//         <div className=' rounded-md shadow-lg  lg:hover:shadow-2xl hover:cursor-pointer h-[27rem]  w-full md:mx-0 mx-auto max-w-[19rem] sm:max-w-[18rem] px-6 priceback'> 
//           <h1 className='font-bold text-xl pt-4'>Yearly Plan </h1>
//          <div className='h-[4rem]'> 
//            <p className='text-xs mt-2 flex items-center'> <span> <RxDotFilled className='text-[1.7rem]'/> </span> Everything you need to navigate the markets successfully   </p>
//           <p className='text-xs mt-2  flex items-center'> <span> <RxDotFilled className='text-[1.7rem]'/> </span> Save over 15% on the premium plan over the course of one year </p>
//          </div>
//           <h1 className='mt-3 text-xs'> <span className='text-3xl font-bold'>$500</span>/YR </h1>
//           <button className='border border-[#4F46E5] text-white hover:text-white  bg-[#4F46E5] mt-4 rounded-md py-2 text-xs w-full hover:bg-[#635ce9] transition duration-300 ease-in' onClick={()=>handlePayment2(process.env.NEXT_PUBLIC_PAYMENTII)}> Buy Plan </button> 
//           <div className='mt-5 text-xs space-y-3 '> 
//              <p className='uppercase font-semibold'> What's Included </p>
//              <p className='flex items-center'> <span> <FcCheckmark className='mr-3'/> </span> Pulse Tool </p>
//              <p className='flex items-center'> <span> <FcCheckmark className='mr-3'/> </span> Shift Tool </p>
//              <p className='flex items-center'> <span> <FcCheckmark className='mr-3'/> </span> Levels Tool </p>
//               <p className='flex items-center'> <span> <FcCheckmark className='mr-3'/> </span> TrendScan Watchlists  </p>
//                <p className='flex items-center'> <span> <FcCheckmark className='mr-3'/> </span> Additonal Timeframes </p>
//           </div>
//         </div>
//        </div>
//        </Container>
     
//         <Footer/>
//     </Layout>
//   )
// }

import React from 'react'
import Layout from '../../components/Layout'
import Footer from '../../components/modules/Footer'
import { Container } from '../../components/styles/Container'
import {FcCheckmark} from 'react-icons/fc'
import {RxDotFilled} from 'react-icons/rx'
import { useGetUserProfileQuery } from '../../store/auth/authApi'
import { useRouter } from 'next/router'
import { setPath } from '../../helper'
import { toast } from 'react-hot-toast'

export default function pricing() {
  const router =useRouter();
  const { data, isLoading, error,refetch,isError, status} = useGetUserProfileQuery(); // Use the generated hook
  // console.log(data?.userRecord?.email,isError,status,error,isLoading,'isLoggedIn')

  const handlePayment =(paymentId) =>{
    const payload ={
      link:'https://app.begreat.finance',
      payment:paymentId
    }
    if(data?.userRecord?.email){
      router.push('https://app.begreat.finance')
    }
    else{
      toast.error('You have to Sign In to Buy Plan')
      setPath(payload)
      router.push('/login')
      router.push('https://app.begreat.finance')
    }
  }
  return (
    <Layout>
       <Container> 
         <div className='text-secondary  pt-20  '> 
          <h1 className='text-center text-2xl font-bold'> Pricing Plans </h1>
          <p className='text-center text-sm'>
            Unlock the full potential of our platform with our premium account, <br className='hidden md:flex'/>  available
          at a discounted rate for a limited time.
        </p>
        </div>

       <div className='flex md:flex-row flex-col justify-center space-y-4 md:space-y-0 md:space-x-6 mt-10 pb-10'> 
           <div className=' rounded-md shadow-lg  lg:hover:shadow-2xl hover:cursor-pointer h-[27rem]  w-full  md:mx-0 mx-auto max-w-[19rem] sm:max-w-[18rem] px-6 priceback'> 
          <h1 className='font-bold text-xl pt-4'>Monthly Plan </h1>
          <p className='text-xs mt-2 h-[4rem] flex items-center'> <span> <RxDotFilled className='text-[1.7rem]'/>  </span>Everything you need to navigate the markets successfully </p>
          <h1 className='mt-3 text-xs'> <span className='text-3xl font-bold'>$50</span>/MO </h1>
          <button className='border border-[#4F46E5] text-white hover:text-white  bg-[#4F46E5] mt-4 rounded-md py-2 text-xs w-full hover:bg-[#635ce9] transition duration-300 ease-in' onClick={()=>handlePayment(process.env.NEXT_PUBLIC_PAYMENTI)}> Buy Plan </button> 
          <div className='mt-5 text-xs space-y-3 '> 
             <p className='uppercase font-semibold'> What's Included </p>
               <p className='flex items-center'> <span> <FcCheckmark className='mr-3'/> </span> Pulse Tool </p>
             <p className='flex items-center'> <span> <FcCheckmark className='mr-3'/> </span> Shift Tool </p>
             <p className='flex items-center'> <span> <FcCheckmark className='mr-3'/> </span> Levels Tool </p>
              <p className='flex items-center'> <span> <FcCheckmark className='mr-3'/> </span> TrendScan Watchlists  </p>
               <p className='flex items-center'> <span> <FcCheckmark className='mr-3'/> </span> Additonal Timeframes </p>
          </div>
        </div>

        <div className=' rounded-md shadow-lg  lg:hover:shadow-2xl hover:cursor-pointer h-[27rem]  w-full md:mx-0 mx-auto max-w-[19rem] sm:max-w-[18rem] px-6 priceback'> 
          <h1 className='font-bold text-xl pt-4'>Yearly Plan </h1>
         <div className='h-[4rem]'> 
           <p className='text-xs mt-2 flex items-center'> <span> <RxDotFilled className='text-[1.7rem]'/> </span> Everything you need to navigate the markets successfully   </p>
          <p className='text-xs mt-2  flex items-center'> <span> <RxDotFilled className='text-[1.7rem]'/> </span> Save over 15% on the premium plan over the course of one year </p>
         </div>
          <h1 className='mt-3 text-xs'> <span className='text-3xl font-bold'>$500</span>/YR </h1>
          <button className='border border-[#4F46E5] text-white hover:text-white  bg-[#4F46E5] mt-4 rounded-md py-2 text-xs w-full hover:bg-[#635ce9] transition duration-300 ease-in' onClick={()=>handlePayment(process.env.NEXT_PUBLIC_PAYMENTII)}> Buy Plan </button> 
          <div className='mt-5 text-xs space-y-3 '> 
             <p className='uppercase font-semibold'> What's Included </p>
             <p className='flex items-center'> <span> <FcCheckmark className='mr-3'/> </span> Pulse Tool </p>
             <p className='flex items-center'> <span> <FcCheckmark className='mr-3'/> </span> Shift Tool </p>
             <p className='flex items-center'> <span> <FcCheckmark className='mr-3'/> </span> Levels Tool </p>
              <p className='flex items-center'> <span> <FcCheckmark className='mr-3'/> </span> TrendScan Watchlists  </p>
               <p className='flex items-center'> <span> <FcCheckmark className='mr-3'/> </span> Additonal Timeframes </p>
          </div>
        </div>
       </div>
       </Container>
     
        <Footer/>
    </Layout>
  )
}

