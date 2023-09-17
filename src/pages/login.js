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
import { loginUser, selectIsAuthenticated, userLogin } from "../../store/auth/authAction";
import Link from "next/link";
import Footer from "../../components/modules/Footer";
import { toast } from "react-hot-toast";
import GoogleSignInButton from "../../components/common/GoogleSignInButton";
// import { gapi } from "gapi-script";
import { LoginGoogle } from "../../components/common/Login";
import { GoogleLogin } from "@react-oauth/google";
import { useGetUserProfileQuery, useSubscribeMutation, useUserLoginGoogleMutation } from "../../store/auth/authApi";
import { DeleteAuthTokenMaster, getPath, getUserDataS, setToken, setUserDataS } from "../../helper";
import GoogleButton from "./Googlebutton";
import { useUserLoginGoogleAuthMutation } from "../../store/Coins/coinsApi";
import { googleAuth } from "../../store/auth";
// import { GoogleLogin } from '@react-oauth/google';

export default function Login() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const {loading, userInfo, isLoggedIn, error} = useSelector((state) => state.auth)
  const all = useSelector((state) => state.auth);
  const [userData, setUserData] = useState();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const IsAuthenticated = useSelector(selectIsAuthenticated); // Add isLoading from Redux store

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMe = (event) => {
    setRememberMe(event.target.checked);
  };

  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [
    subscribePlan,
    { isLoading: SubscribeUpdateLoader, isSuccess: SubscribeUpdateSuccess,isError:SubscribeIsError,error:SubscribeError },
  ] = useSubscribeMutation();

  //console.log(all,userInfo,loading,error,'userInfo')
  //console.log(data,getPath(),'userInfoLoginData');
  
  const HandleSubmit = async (data) => {
    const { email, password } = data;
    // console.log(data,'userInfoLoginData');
    await dispatch(loginUser({ email, password })).then((data)=>{ 
      // router.push('/dashboard')
      if(getPath()?.link){
        const payload={
          priceId:getPath()?.payment
        }
        subscribePlan(payload).unwrap().then((data)=>{
          window.location.href = data?.sessionURL;
          DeleteAuthTokenMaster('begreatFinace:pathlink')
        }).catch((err)=>console.log(err))
      }
      if(data?.payload?.email){
        // console.log(data.payload)
        router.push('/dashboard')
      }
    });

    if (rememberMe) {
      localStorage.setItem("userEmail", data.email);
      localStorage.setItem("userPassword", data.password);
    }
  };

  // const { data } = useUserLoginGoogleAuthMutation({
  //   token :'eyJhbGciOiJSUzI1NiIsImtpZCI6ImFjZGEzNjBmYjM2Y2QxNWZmODNhZjgzZTE3M2Y0N2ZmYzM2ZDExMWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2ODA4OTk0NzIsImF1ZCI6Ijg3ODg5NDgyMzY3NC05ODA4NDNwaXVydTdvcjI3ZDhlbmsxajRibTMxdDByNS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMDU1MTQwMjAyNTc4OTQyNzI4MiIsImVtYWlsIjoiZGFtbXltb3NlczIwMDFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF6cCI6Ijg3ODg5NDgyMzY3NC05ODA4NDNwaXVydTdvcjI3ZDhlbmsxajRibTMxdDByNS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsIm5hbWUiOiJEYW1teSBNb3NlcyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BR05teXhZdkxuSlFZRlFWWVAtdXRSVnFFTE52MDNiTUVUVUZJRVRsT3ZxeT1zOTYtYyIsImdpdmVuX25hbWUiOiJEYW1teSIsImZhbWlseV9uYW1lIjoiTW9zZXMiLCJpYXQiOjE2ODA4OTk3NzIsImV4cCI6MTY4MDkwMzM3MiwianRpIjoiZWRiMDVjMDc4NTc2MTg3ZTE5OGI0YmVlODc2OGZlNWJhZjdmZWRiYiJ9.VdOfQKC9LMsEnFxV3ANNnjnbBEyuHjQXdjKSZgKm8ZriCgjx_DWR8dqiSBAKRiIAed8PqYMRsLs43cQ6iY6k4Lko92oqY6qK8FkATQMgKJIBSlXZCHEtXnnpcoRfW5Oc24iIjDoerQuavGZcvKzbEV41o46RX24S-nQzcPbSoyah8LfT7F7JXJKLl0_eJ2iiMnj82YKAoCpjd7m_bkDOnv4cFYo9fsKYXSvYMvU7ehuliYyFl1fmumAMCoRVnQvQgnMSKKEbF22HMpg5mBNadNX-Zxup9XmnS63SB9loMLIW4g1YKUBvhVP8Beruyc1k3zT3tqiILuflLN4VbOX33g'
  // },   { refetchOnMountOrArgChange: true,skip:false});

  const [sendToken, { isLoading, isError, error:AuthGoogleError, isSuccess }] = useUserLoginGoogleAuthMutation();


  // console.log(isError,isLoading,IsAuthenticated,'IsAuthenticated')

  useEffect(() => {
    if(isSuccess){
      dispatch(googleAuth())
      setToken(data?.accessToken)
      setUserDataS(data?.user)
      toast.success(data?.message);
    }
  }, [])

  // const handleGoogleSignInSuccess = (token) => {
  //   // Send the token to your server for authentication
  //   console.log("Encoded JWT ID token: " + token);
  // }

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    const userPassword = localStorage.getItem("userPassword");

    if (userEmail && userPassword) {
      setRememberMe(true);
      setValue("email", userEmail);
      setValue("password", userPassword);
    }
  }, []);


  // useEffect(() => {
  //   function start(){
  //     gapi.client.init({
  //       client_id:clientId,
  //       scope:""
  //     })
  //   };
  //   gapi.load('client:auth2',start)
  // }, [])
  
  // const responseMessage = (response) => {
  //     console.log(response);
  // };

  // const errorMessage = (error) => {
  //     console.log(error);
  // };

  // const GoogleLoginButton = () => {
  // }

  const { data, isLoading:userloader, error:userError } = useGetUserProfileQuery({userId},{skip:!userId}); // Use the generated hook
  // console.log(data,'datadata')

  // useEffect(() => {
  //   if (error?.status === 401) {
  //     // router.push("/login");
  //     DeleteAuthTokenMaster('begreatFinace:accesskey') // deletes token from storage
  //     DeleteAuthTokenMaster('begreatFinace:user') 
  //     setGetData(false)
  //     dispatch(logout());
  //   }
  // }, [error])


  // console.log(userError,data,'userError')
  const handleCredentialResponse = (response) => {
    // send a POST request to /api/signinWithGoogle with the token (response.credential) in the req.body
    console.log("Encoded JWT ID token: " + response?.credential);
    // setToken(response.credential)
    sendToken({token:response.credential}).unwrap() // Unwrap the response to handle success and error cases
    .then((data) => {
        setUserDataS(data)
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
          client_id: "835111729100-862akcf0948la5pfj0892g8v55tbuva8.apps.googleusercontent.com",
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
                  Fill in your details to access your account.
                </div>
                <div className="mb-5">
                  <ButtonComp
                    btnText={
                      <span  className="priceText text-[14px] font-bold flex items-center border-2  rounded-md border-[#C72E66] py-3 justify-center gap-4">
                       <GoogleButton/>
                      </span>
                    }
                    btnTextClassName="w-full navBtnBorder "
                  />
                </div>
              </div>
              {/* <div id="buttonDiv"></div> */}
              {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} /> */}

              {/* <LoginGoogle/> */}
              {/* <GoogleSignInButton onSuccess={handleGoogleSignInSuccess} /> */}
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
                     <input
                    type={"checkbox"}
                    onChange={handleRememberMe}
                    checked={rememberMe}/>  Remember Me
                    </div>
                    <div >
                     <Link className="text-[12px] text-[#4830F7] font-semibold hover:text-[#676385]  hover:duration-200 hover:ease-in" href={'/forget_password'}> Forgot Password?</Link>
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
                  <span className="font-extrabold cursor-pointer text-gray-400 hover:text-[#C72E66] hover:duration-200 hover:ease-in"><Link href={'/register'}> Sign Up</Link></span>
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
