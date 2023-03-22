import { useTheme } from 'next-themes'
import React from 'react'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { BsSun } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { HiOutlineMoon } from 'react-icons/hi'
import FallBackImage from '../../components/common/FallBackImage'
import ButtonComp from '../../components/ui/ButtonComp'
import DropDownItem from '../../components/ui/DropDownItem'
import TextInput from '../../components/ui/TextInput'

export default function Login() {
  const { theme, setTheme } = useTheme();

  return (
    <section className='animated__animated animate-spin'>
      <nav className='px-5 lg:px-28 py-4 flex justify-between items-center mb-[3rem] lg:mb-[7rem]'>
        <FallBackImage
        src={'/Images/Dashboard/logo.png'}
        width={227}
        height={227}
        />
        <div className=' hidden lg:flex items-center gap-20'>
          <div className=''>
            <ul className='flex gap-10 items-center text-[14px] paymentTextI font-medium'>
              <li>Home</li>
              <li>How it works</li>
              <li><DropDownItem padding={'0px'} BackgroundColor={'transparent'} border='transparent' value={{label:<span className='paymentTextI'>Tools</span>,value:'Tools'}} options={[{label:'Tools',value:'Tools'}]} /></li>
              <li className='flex gap-4 items-center'>Pricing <span> <div className='bgMode px-[8px] rounded-full  gap-2  items-center hidden md:flex'>
                <div className={`   ${theme ==="light" ? 'bg-modeIconBackSelect py-1 px-2 my-1 rounded-lg text-center ':'text-white'}`}><BsSun onClick={()=>setTheme('light')} size={18} className='background'/></div>
                <div className={`   rounded-lg ${theme ==="dark" ? 'bg-modeIconBackSelect py-1 my-1 px-2 rounded-lg text-center ':'text-white'}`}><HiOutlineMoon onClick={()=>setTheme('dark')} size={18} className='background'/></div>
                </div></span></li>
            </ul>
          </div>
          <div>
          <ul className='flex gap-10 items-center text-[14px]'>
              <li className='paymentTextI font-semibold'>Login</li>
              <li>
                <ButtonComp
                btnText={'Get Started'}
                btnTextClassName='border-1 rounded-full navBtnBG text-white px-8 py-3'
                />
              </li>
              </ul>
          </div>
        </div>
      </nav>

      <main className='mb-[7rem]'>
        <section className='mb-[2rem]'>
          <div className='text-center text-[30px] lg:text-[36px] font-semibold font-3 leading-10'>Revolutionize Your <span className='check'>Finances </span>with <br/> Our Powerful Platform</div>
        </section>
        {/*  */}
        <section className='flex justify-center'>
          <div className='loginBack border-[1.5px] w-full mx-3 lg:mx-0 lg:max-w-[578px] text-center rounded-lg px-5 lg:px-10'>
            <div className='py-[2rem]'></div>
            <div>
            <div className='text-[30px] font-bold secondary mb-1'>
            Login to your Account
            </div>
            <div className='smallText text-[14px] mb-3'>Please fill your detail to access your account.</div>
            <div className='mb-5'>
            <ButtonComp
            btnText={<span className='priceText text-[14px] font-bold flex items-center  py-3 justify-center gap-4'><FcGoogle size={20}/> Continue with Google</span>}
            btnTextClassName='w-full navBtnBorder '
            />
            </div>
            </div>

            <form>
              <div className='text-left mb-5'>
                <label className='text-left modalText text-[14px] font-thin mb-1'>Email Address</label>
              <TextInput
                placeholder='mail@abc.com'
                containerClassName={'loginInputBorder border-[1px]'}
              />
              </div>
              <div className='text-left mb-8'>
                <label className='text-left modalText text-[14px] font-semibold mb-1'>Password</label>
              <TextInput
                placeholder='••••••••'
                containerClassName={'loginInputBorder border-[1px]'}
                prefixIcon={<AiOutlineEyeInvisible size={20}/>}
              />
              <div className='flex justify-between mt-1'>
                <div className='text-[12px] text-[#A1A1A1] flex items-center gap-2'> <input type={'checkbox'}/> Remember Me</div>
                <div className='text-[12px] text-[#4830F7]'>Forgot Password?</div>
              </div>
              </div>

              <ButtonComp
              btnText={'Login'}
              btnTextClassName={'navBtnBG rounded-full text-white w-full py-3 font-extrabold text-[18px]'}
              />

              <div className='mt-7 priceText font-normal text-[18px] mb-5'>
              Don’t Have an Account?<span className='font-thin cursor-pointer'> Sign Up</span>
              </div>
            </form>
            <div className='py-[1rem]'></div>
          </div>
        </section>
      </main>
    </section>
  )
}
