import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import { FcGoogle } from "react-icons/fc";
import Layout from "../../components/Layout";
import ButtonComp from "../../components/ui/ButtonComp";
import TextInput from "../../components/ui/TextInput";
import { generateMaxLength, generateMinLength, REGEX_PATTERNS } from "../../constants/errors";
import { userLogin } from "../../store/auth/authAction";
import Link from "next/link";
import Footer from "../../components/modules/Footer";
import { toast } from "react-hot-toast";

export default function Login() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const {loading,userInfo,isLoggedIn,error,} = useSelector((state) => state.auth)
  const all = useSelector((state) => state.auth);
  const [userData, setUserData] = useState();
  const dispatch  =useDispatch();
  const [showPassword, setShowPassword] = useState(false);

const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
};

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
//console.log(all,userInfo,loading,error,'userInfo')
  const HandleSubmit = (data)=>{
    console.log(data)
    dispatch(userLogin(data))
  }

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/dashboard')
    }
  }, [router, isLoggedIn])
  useEffect(() => {
    if (error) {
      toast.error(error)
    }
  }, [error])
      
  return (
    <Layout >
      <section className="px-2 animated__animated animate-fadeIn bg-transparent">
      

        <main className="pb-[7rem] pt-[5rem] lg:pt-[6rem] bg-transparent">
          <section className="mb-[2rem]">
            <div className="text-center text-[1.8rem] font-semibold font-3 leading-10">
              {/* Revolutionize Your <span className="check">Finances </span>with{" "}
              <br className="hidden lg:block" /> Our Powerful Platform */}

              Simplify Your Investments, <br className=" hidden lg:block" /> <span className="check"> Maximize </span>Your Profits
            </div>
          </section>
          {/*  */}
          <section className="flex justify-center">
            <div className="loginBack border-[1.5px] w-full mx-3 lg:mx-0 lg:max-w-[578px] text-center rounded-lg px-5 lg:px-10">
              <div className="py-[2rem] bg-transparent"></div>
              <div>
                <div className="text-[25px] lg:text-[30px] font-bold secondary mb-1">
                  Login to your Account
                </div>
                <div className="smallText text-[14px] mb-3">
                  Please fill your detail to access your account.
                </div>
                <div className="mb-5">
                  <ButtonComp
                    btnText={
                      <span className="priceText text-[14px] font-bold flex items-center border-2  rounded-md border-[#C72E66] py-3 justify-center gap-4">
                        <FcGoogle size={20} /> Continue with Google
                      </span>
                    }
                    btnTextClassName="w-full navBtnBorder "
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit(HandleSubmit)}>
                <div className="text-left mb-5">
                  <label className="text-left modalText text-[14px] font-semibold mb-1">
                    Email Address
                  </label>
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: "Email is required",
                      pattern: REGEX_PATTERNS?.EMAIL,
                      //   maxLength: generateMaxLength(14),
                    }}
                    render={({
                      field: { value, onChange },
                      formState: { errors },
                    }) => {
                      const errorMessage = errors?.email?.message;
                      return (
                        <TextInput
                          placeholder="mail@abc.com"
                          containerClassName={"loginInputBorder border-[1px]"}
                          name="email"
                          {...{ value, onChange, errors: [errorMessage] }}
                        />
                      );
                    }}
                  />
                </div>
                <div className="text-left mb-8">
                  <label className="text-left modalText text-[14px] font-semibold mb-1">
                    Password
                  </label>
                  <Controller
                    name="password"
                    control={control}
                    rules={{
                      required: "Password is required",

                      minLength: generateMinLength(6),
                    }}
                    render={({
                      field: { value, onChange },
                      formState: { errors },
                    }) => {
                      const errorMessage = errors?.password?.message;
                      return (
                        <TextInput
                         type={showPassword ? 'text' : 'password'}
                          placeholder="••••••••"
                          containerClassName={"loginInputBorder border-[1px]"}
                           prefixIcon={
                            showPassword ? (
                              <AiOutlineEye size={20} onClick={togglePasswordVisibility} />
                            ) : (
                              <AiOutlineEyeInvisible size={20} onClick={togglePasswordVisibility} />
                            )
                          }
                          name="password"
                          {...{ value, onChange, errors: [errorMessage] }}                       />
                      );
                    }}
                  />
                  <div className="flex justify-between mt-1">
                    <div className="text-[12px] text-[#A1A1A1] flex items-center gap-2">
                      {" "}
                      <input type={"checkbox"} /> Remember Me
                    </div>
                    <div className="text-[12px] text-[#4830F7]">
                      Forgot Password?
                    </div>
                  </div>
                </div>

                <ButtonComp
                  // onClick={(e)=>{
                  //   e.preventDefault();
                  //   router.push('/dashboard')
                  // }}
                  type="submit"
                  btnText={loading?"Loading...":"Login"}
                  btnTextClassName={
                    "navBtnBG rounded-full text-white w-full py-3 font-extrabold text-[18px]"
                  }
                />

                <div className="mt-7 priceText font-normal text-[13px] lg:text-[14px] mb-5">
                  Don’t Have an Account?
                  <span className="font-extrabold cursor-pointer text-gray-400"><Link href={'/register'}> Sign Up</Link></span>
                </div>
              </form>
              <div className="py-[1rem]"></div>
            </div>
          </section>
        </main>
      </section>
      <Footer/>
    </Layout>
  );
}
