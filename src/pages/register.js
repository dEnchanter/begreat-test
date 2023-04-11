import { useTheme } from "next-themes";
import React, { useEffect ,useState} from "react";
import { BsSun } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMoon } from "react-icons/hi";
import FallBackImage from "../../components/common/FallBackImage";
import ButtonComp from "../../components/ui/ButtonComp";
import DropDownItem from "../../components/ui/DropDownItem";
import TextInput from "../../components/ui/TextInput";
import { useUserSignUpMutation } from "../../store/auth/authApi";
import { Controller, useForm } from "react-hook-form";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import {
  generateMaxLength,
  generateMinLength,
  REGEX_PATTERNS,
} from "../../constants/errors";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import Link from "next/link";
import GoogleButton from "./Googlebutton";
import Footer from "../../components/modules/Footer";

export default function Login() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);


const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
};
  const [userSignUp, { isLoading, isError, isSuccess }] =
    useUserSignUpMutation();
  const { control, handleSubmit, reset,getValues } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword : "",
    },
  });

  useEffect(() => {
    if (isSuccess) {
      reset();
      toast.success("User Created Successfully...");
      // console.log(dataResponse, "dataResponse");
      router.push("/login");
    }
  }, [isSuccess, reset, router]);

 const handleSignUp = (data) => {
  // setHoldEmail(data?.email)
  userSignUp(data)
    .unwrap()
    .then(() => {
      if (rememberMe) {
        localStorage.setItem("email", data.email);
        localStorage.setItem("password", data.password);
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }
    })
    .catch((error = "oops,something went wrong") => {
      console.log(error.data.message);
      toast.error(error.data.message);
      error?.data?.errors?.length > 0 &&
        error?.data?.errors?.map((item) => toast.error(item?.message));
      //  toast.error(error.data.message);
    });
};


  const handleConfirmPassword = (value) => {
    if(value!==getValues('password')){
      return false
    }
    return true

  }

  return (
    <Layout>
        <main className="pb-[7rem] pt-[5rem] lg:pt-[6rem] bg-transparent px-2">
        <section className="mb-[2rem]">
        <div className="text-center text-[1.8rem] font-semibold font-3 leading-10">
              {/* Revolutionize Your with{" "}
              <br className=" hidden lg:block" /> Our Powerful Platform */}

              Simplify Your Investments, <br className=" hidden lg:block" /> <span className="check"> Maximize </span>Your Profits
            </div>
        </section>
        {/*  */}
        <section className="flex justify-center">
          <div className="loginBack border-[1.5px] w-full mx-3 lg:mx-0 lg:max-w-[578px] text-center rounded-lg px-5 lg:px-10">
            <div className="py-[2rem]"></div>
            <div>
            <div className="text-[25px] lg:text-[30px] font-bold secondary mb-1">
                Create an Account
              </div>
              <div className="smallText text-[14px] mb-3">
                Input your information to get started.
              </div>
              <div className="mb-5">
                <ButtonComp
                  btnText={
                    <span  className="priceText text-[14px] font-bold border-2  rounded-md border-[#C72E66] flex items-center  py-3 justify-center gap-4">
                       <GoogleButton  />
                    </span>
                  }
                  btnTextClassName="w-full navBtnBorder "
                />
              </div>
            </div>

            <form onSubmit={handleSubmit(handleSignUp)}>
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
              <div className="text-left mb-5">
                <label className="text-left modalText text-[14px] font-semibold mb-1">
                  Password
                </label>
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: "Password is required",
                    // pattern: REGEX_PATTERNS?.EMAIL,
                    minLength: generateMinLength(6),
                  }}
                  render={({
                    field: { value, onChange },
                    formState: { errors },
                  }) => {
                    const errorMessage = errors?.password?.message;
                    return (
                      <TextInput
                      placeholder="Enter Password"
                      type={showPassword ? 'text' : 'password'}
                        containerClassName={"loginInputBorder border-[1px]"}
                        prefixIcon={ showPassword ? (
              <AiOutlineEye size={20} onClick={togglePasswordVisibility} />
            ) : (
              <AiOutlineEyeInvisible size={20} onClick={togglePasswordVisibility} />
            )}
                        name="password"
                        {...{ value, onChange, errors: [errorMessage] }}
                      />
                    );
                  }}
                />
                
              </div>
              <div className="text-left mb-8">
                <label className="text-left modalText text-[14px] font-semibold mb-1">
                  Confirm Password
                </label>
                <Controller
                  name="confirmPassword"
                  control={control}
                  rules={{
                    required: "confirm Password  is required",
                    // pattern: REGEX_PATTERNS?.EMAIL,
                    minLength: generateMinLength(6),
                    validate:(value)=>handleConfirmPassword(value)||'Password does not match'
                  }}
                  render={({
                    field: { value, onChange },
                    formState: { errors },
                  }) => {
                    const errorMessage = errors?.confirmPassword?.message;
                    return (
                      <TextInput
                      placeholder="Enter Password to confirm"

                      type={showPassword ? 'text' : 'password'}
                        containerClassName={"loginInputBorder border-[1px]"}
                        prefixIcon={ showPassword ? (
              <AiOutlineEye size={20} onClick={togglePasswordVisibility} />
            ) : (
              <AiOutlineEyeInvisible size={20} onClick={togglePasswordVisibility} />
            )}
                        name="password"
                        {...{ value, onChange, errors: [errorMessage] }}
                      />
                    );
                  }}
                />
                <div className="flex justify-between mt-1">
                  <div className="text-[12px] text-[#A1A1A1] flex items-center gap-2">
                    {" "}
                       <input
                      type={"checkbox"}
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    Remember Me
                  </div>
                
                </div>
              </div>
              <ButtonComp
                btnText={isLoading ? "Loading..." : "Sign Up"}
                type="submit"
                btnTextClassName={
                  "navBtnBG rounded-full text-white w-full py-3 font-extrabold text-[18px]"
                }
              />

<div className="mt-7 priceText font-normal text-[13px] lg:text-[14px] mb-5">
                  Already Have an Account?
                  <span className="font-extrabold cursor-pointer text-gray-400"><Link href={'/login'}> Login </Link></span>
                </div>
            </form>
            <div className="py-[1rem]"></div>
          </div>
        </section>
      </main>
      <Footer/>
    </Layout>
  );
}
