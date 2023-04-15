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
import { userLogin } from "../../store/auth/";
import Link from "next/link";
import Footer from "../../components/modules/Footer";
import { toast } from "react-hot-toast";
import GoogleSignInButton from "../../components/common/GoogleSignInButton";
// import { gapi } from "gapi-script";
import { LoginGoogle } from "../../components/common/Login";
import { GoogleLogin } from "@react-oauth/google";
import {  useForgetPasswordMutation, useGetUserProfileQuery, useUserLoginGoogleMutation } from "../../store/auth/authApi";
import { getUserDataS, setToken, setUserDataS } from "../../helper";
import { googleAuth } from "../../store/auth";
import GoogleButton from "./Googlebutton";
// import { GoogleLogin } from '@react-oauth/google';

export default function Login() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const {loading,userInfo,isLoggedIn,error,} = useSelector((state) => state.auth)
  const all = useSelector((state) => state.auth);
  const [userData, setUserData] = useState();
  const dispatch  =useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
};

const handleRememberMe = (event) => {
  setRememberMe(event.target.checked);
};
const [sendEmail, { isLoading, isError, error:AuthGoogleError,isSuccess }] = useForgetPasswordMutation();


  const { control, handleSubmit, setValue,reset } = useForm({
  defaultValues: {
    email: "",
  },
});
//console.log(all,userInfo,loading,error,'userInfo')
 const HandleSubmit = (data) => {
  console.log(data,'data');
  sendEmail({email:data?.email}).unwrap() // Unwrap the response to handle success and error cases
  .then((data) => {
      
      toast.success(data?.message);
      reset()
       router.push('/login')
    console.log('Token sent successfully!',data,'data1');
  })
  .catch((err) => {
    // toast.error(err?.response?.data?.error);
    console.error('Failed to send token:', err?.response);
  });

  
};



  useEffect(() => {
    if(AuthGoogleError?.data?.error){
      toast.error(AuthGoogleError?.data?.error)
      // setToken(data?.accessToken)
      // setUserDataS(data?.user)
      // toast.success(data?.message);
    }
  }, [AuthGoogleError?.data?.error])
  
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     router.push('/dashboard')
  //   }
  // }, [router, isLoggedIn])
  useEffect(() => {
    if (error) {
      // toast.error(error)
    }
  }, [error])

  const userId =getUserDataS()?.userId

  const { data, isLoading:userloader, error:userError } = useGetUserProfileQuery({userId},{skip:userId}); // Use the generated hook


  const handleCredentialResponse = (response) => {
    // send a POST request to /api/signinWithGoogle with the token (response.credential) in the req.body
    console.log("Encoded JWT ID token: " + response);
    // setToken(response.credential)
    sendToken({token:response.credential}).unwrap() // Unwrap the response to handle success and error cases
    .then((data) => {
        setUserDataS(data?.accessToken)
        setToken(data?.accessToken?.split('Bearer ')?.join(""))
        dispatch(googleAuth(data))
        toast.success(data?.message);
        router.push('/dashboard')
      console.log('Token sent successfully!',data,'data1');
    })
    .catch((err) => {
      console.error('Failed to send token:', err);
    });
  };

  useEffect(() => {
    if(!isLoggedIn){
    const loadGoogleAccountsScript = () => {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.onload = () => {
        google.accounts.id.initialize({
          // client id should be stored in an environment variable
          client_id: "878894823674-980843piuru7or27d8enk1j4bm31t0r5.apps.googleusercontent.com",
          callback: handleCredentialResponse
        });
        google.accounts.id.renderButton(
          document.getElementById("buttonDiv"),
          { theme: "outline", size: "large" } // customization attributes
        );
        google.accounts.id.prompt(); // also display the One Tap dialog
      };
      document.head.appendChild(script);
    };
    loadGoogleAccountsScript();
  }
  }, []);
      

//   useEffect(() => {
//   const userEmail = localStorage.getItem("userEmail");
//   const userPassword = localStorage.getItem("userPassword");

//   if (userEmail && userPassword) {
//     setRememberMe(true);
//     setValue("email", userEmail);
//     setValue("password", userPassword);
//   }
// }, []);


  
  

 
      
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
                  Reset Password
                </div>
                <div className="smallText text-[14px] mb-3">
                  Please input the email address associated with your account to continue resetting your password
                </div>
                <div className="mb-5">
                {/* <div id="buttonDiv"></div>  */}
                {/* <div className="mb-5">
                  <ButtonComp
                    btnText={
                      <span  className="priceText text-[14px] font-bold flex items-center border-2  rounded-md border-[#C72E66] py-3 justify-center gap-4">
                       
                      </span>
                    }
                    btnTextClassName="w-full navBtnBorder "
                  />
                </div> */}
                </div>
              </div>
              
              <form onSubmit={handleSubmit(HandleSubmit)}>
                <div className="text-left mb-20">
                  <label className="text-left modalText text-[14px] font-semibold mb-2">
                    Email Address
                  </label>
                  <div className="h-[10px]"></div>
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
                

                <ButtonComp
                  // onClick={(e)=>{
                  //   e.preventDefault();
                  //   router.push('/dashboard')
                  // }}
                  type="submit"
                  btnText={isLoading?"Loading...":"Reset Password"}
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
