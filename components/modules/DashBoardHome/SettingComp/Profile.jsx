import React, { useState } from "react";
import FallBackImage from "../../../common/FallBackImage";
import ButtonComp from "../../../ui/ButtonComp";
import TextInput from "../../../ui/TextInput";
import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useUpdateUserETHMutation, useUpdateUserEmailMutation, useUpdateUserProfileMutation } from "../../../../store/auth/authApi";
import { toast } from "react-hot-toast";
import { getUserDataS } from "../../../../helper";
import Link from "next/link";
import { Button } from "../../../styles/Button";
import { REGEX_PATTERNS } from "../../../../constants/errors";

export default function Profile({data,refetch}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl,setImageUrl] =useState()

  // console.log(imageUrl,'imageUrl')

  const handleFileSelect = (event) => {
    // console.log(event)
    setSelectedFile(event.target.files[0]);
    const reader = new FileReader();

    reader.onload = (e) => {
      const dataURL = e.target.result;

      const img = new Image();
      img.src = dataURL;

      img.onload = () => {
        // Make sure the image has loaded before using the URL
        const imageUrl = img.src;
        setImageUrl(imageUrl)
        // console.log('Image URL:', imageUrl);
        // Use the imageUrl in your code
      };
      img.onerror = (error) => {
        console.error('Error loading image:', error);
      };
    };

    reader.readAsDataURL(event.target.files[0]);
  };

  const [
    updateUser,
    { isLoading: userUpdateLoader, isSuccess: userUpdateSuccess,isError,error },
  ] = useUpdateUserProfileMutation();

  const [
    updateETH,
    { isLoading: userUpdateETH, isSuccess: userUpdateETHSuccess, isETHError, ETHerror },
  ] = useUpdateUserETHMutation();

  const [
    updateEmail,
    { isLoading: emailUpdateLoader, isSuccess: emailUpdateSuccess, isError: emailIsError, error: emailError },
  ] = useUpdateUserEmailMutation();

      
  // console.log(isError)

  useEffect(() => {
    if(isError||emailIsError){
      toast.error('oops,something went wrong refetch this page')
    }
  }, [isError])

  const { control, handleSubmit, setValue, getValues } = useForm({
    defaultValues: {
      email: "",
      ethAddress: "",
      displayName:'',
      password: "",
      backupEmail:"",
      photo:""
    },
  });

  useEffect(() => {
    if(userUpdateSuccess){
      refetch()
    }
  }, [])
  

  useEffect(() => {
    setValue('displayName',data?.displayName)
    setValue('email',data?.email)
    setValue('email',data?.email)
  }, [data?.displayName])

  const handleSubmitForm = (data) => {

    const form = new FormData();
      form.append('displayName',data?.displayName);
      selectedFile?.name&& form.append('photo',selectedFile);
      data?.displayName&&selectedFile?.name&& updateUser(form).unwrap().then((data)=>toast.success(data?.message))
      data?.email&&updateEmail(data?.email).unwrap().then((data)=>toast.success(data?.message))

    // updateUser
  }

  // const handleETHSubmission = () => {
  //   // Get the Ethereum address from the form state
  //   const ethAddress = getValues("ethAddress");

  //   if (!ethAddress) {
  //     toast.error("Ethereum address is required!");
  //     return;
  //   }
 

  //   // Validate the Ethereum address (you can use REGEX_PATTERNS.ETHEREUM_ADDRESS.value)
  //   if (REGEX_PATTERNS.ETHEREUM_ADDRESS.value.test(ethAddress)) {

  //     // Call the mutation
  //     updateETH(ethAddress).unwrap().then((data)=> {
  //       console.log("DATADOG", data)
  //       // toast.success('ETH address updated successfully!');
  //     }).catch(error => {
  //       console.error("Error updating ETH address:", error);
  //       // toast.error('Failed to update ETH address!');
  //     });
   
  //   } else {
  //       // Display an error toast if the Ethereum address is invalid
  //       toast.error(REGEX_PATTERNS.ETHEREUM_ADDRESS.message);
  //   }
  // };

  const handleETHSubmission = (data) => {

    const ethAddress = getValues("ethAddress");

    // Creating a new FormData object
    const form = new FormData();

    if (!ethAddress) {
      toast.error("Ethereum address is required!");
      return;
    }
    
    // Append the Ethereum address to the form, if it exists
    ethAddress && form.append('ethAddress', ethAddress);
    
    // Call the updateETH function and unwrap the promise
    // Display a toast notification on success
    ethAddress && updateETH(form).unwrap().then((data) => {
      // console.log("Data11", data)
      toast.success('ETH address updated successfully!');
    })
    .catch((error) => {
      // Handle the error here, e.g., display an error message
      console.error('Error updating ETH:', error);
      toast.error('Failed to update ETH');
    });
  };
  
  return (
    <section>
      <section className="mb-10">
        <div className="priceText text-[20px] font-medium ">
          Profile Information
        </div>
        <div className="priceText text-[14px] font-normal">
          Update your profile details here
        </div>
      </section>

      <form  className="overflow-hidden">
        <div className="flex items-center mb-12 flex-wrap">
          <div className="flex-grow w-full xl:w-[20%] px-3 text3 font-semibold text-[16px] mb-3 lg:mb-0">
            Name
          </div>
          <div className=" flex-grow  w-full lg:w-[80%] px-3">
            <Controller
              name="displayName"
              control={control}
              rules={{
                required: "Display Name is required",
                // //pattern: REGEX_PATTERNS?.EMAIL,
                //   maxLength: generateMaxLength(14),
              }}
              render={({
                field: { value, onChange },
                formState: { errors },
              }) => {
                const errorMessage = errors?.displayName?.message;
                return (
                  <TextInput
                    placeholder="Name"
                    containerClassName={" borderColorI border-[2px] "}
                    inputClassName={"text-[14px]"}
                    name="displayName"
                    {...{ value, onChange, errors: [errorMessage] }}
                  />
                );
              }}
            />
          </div>
          
        </div>
        {/*  */}
        <div className="flex items-center mb-12 flex-wrap">
          <div className="flex-grow  w-full lg:w-[20%] px-3 text3 font-semibold text-[16px] mb-3 lg:mb-0">
            Email Address
          </div>
          <div className="flex-grow  w-full lg:w-[80%] px-3">
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
                    inputClassName={"text-[14px] "}
                    containerClassName={" borderColorI border-[2px]"}
                    name="email"
                    {...{ value, onChange, errors: [errorMessage] }}
                  />
                );
              }}
            />
          </div>
        </div>

        {/*  */}
        <div className="flex items-center mb-12 flex-wrap">
            <div className="flex-grow w-full lg:w-[20%] px-3 text3 font-semibold text-[16px] mb-3 lg:mb-0">
                Ethereum Address
            </div>
            <div className="flex-grow w-full lg:w-[80%] px-3 flex items-center"> {/* Added flex and items-center to this div */}
                <Button
                  onClick={handleETHSubmission}
                  className="px-4 text-white mr-2 text-xs py-2 border-0 bg-gradient-to-r from-[#D32652] to-[#8466E1] hover:cursor-pointer font-semibold hover:text-gray-300 transition ease-in duration-300"
                >
                    Submit your ETH address 
                </Button>
                <Controller
                    name="ethAddress"
                    control={control}
                    rules={{
                      //required: "ETH is required",
                      pattern: REGEX_PATTERNS?.ETHEREUM_ADDRESS,
                      //   maxLength: generateMaxLength(14),
                    }}
                    render={({ field: { value, onChange }, formState: { errors } }) => {
                        const errorMessage = errors?.ethAddress?.message;
                        return (
                            <TextInput
                                placeholder="0x71C7656EC7ab88b098defB751B7401B5f6d8976F"
                                inputClassName={"text-[14px] "}
                                containerClassName={"borderColorI border-[2px] flex-grow min-w-[450px]"}
                                name="ethAddress"
                                {...{ value, onChange, errors: [errorMessage] }}
                            />
                        );
                    }}
                />
            </div>
        </div>
 
        {/*  */}
        <div className="flex items-center mb-12 flex-wrap">
          <div className="flex-grow  w-full lg:w-[20%] px-3 text3 mb-3 lg:mb-0">
            <div className=" text-[16px] font-semibold">Your Photo</div>
            <div className="text-[12px]">
              This photo will be displayed on your profile
            </div>
          </div>
          <div className="flex-grow w-full lg:w-[80%]  px-3 borderColorI ">
            <div className="flex gap-3 items-center ">
              <FallBackImage
                src={imageUrl||data?.photoURL||"/Images/Dashboard/profile.png"}
                width={87}
                height={87}
                ImageClassName='rounded-full object-cover w-[87px] h-[87px]'
              />
              <div
                onClick={() => document.getElementById("imageInput").click()}
                className="borderColorI border-[2px] rounded-lg px-3 py-8 w-[60%]"
              >
                <div className="uploadText1 text-[12px] font-semibold">
                  Click to upload{" "}
                  <span className="paymentText">or drag and drop</span>{" "}
                </div>
                <div className="text-[14px] uploadText2">
                  SVG, PNG or JPG ( max. 800x400px)
                </div>
              </div>
              <Controller
                    name="photo"
                    control={control}
                    rules={{
                      // required: "photo is required",
                      //pattern: REGEX_PATTERNS?.EMAIL,
                      //   maxLength: generateMaxLength(14),
                    }}
                    render={({
                      field: { value, onChange },
                      formState: { errors },
                    }) => {
                      const errorMessage = errors?.photo?.message;
                      return (
                        <input id="imageInput" type="file" className={"hidden"} 
                        name="photo"
                        accept="image/*"
                          {...{ value, onChange, errors: [errorMessage] }}
                          onChange={(e)=>{onChange(e); handleFileSelect(e)}}
                        />
                      );
                    }}
                  />
            </div>
          </div>
        </div>

        {/*  */}
        <div className="flex items-center mb-12 flex-wrap">
          <div className="flex-grow  w-full lg:w-[20%] px-3 text3 font-semibold text-[16px] mb-3 lg:mb-0">
            Password
          </div>

          <div className=" w-[80%] flex justify-start  px-3"> 
            <Link href={'/forget_password'}> 
              <Button
                className="px-4 text-white ml-auto  mt-4 lg:mt-0 text-xs py-2 border-0 bg-gradient-to-r from-[#D32652] to-[#8466E1] hover:cursor-pointer font-semibold  hover:text-gray-300 transition ease-in duration-300"
                
              >
                Reset Password 
              </Button>
            </Link>
          </div>

           
        </div>

        {/*  */}
        <div className="flex items-center mb-12 mt-10">
          <div className="flex-grow w-[20%] px-3 text3 font-semibold text-[16px]"></div>
          <div className="flex-grow w-[40%] px-3">
            <Link href="/dashboard"> 
              <ButtonComp
              btnText={"Cancel"}
              btnTextClassName="text-center border-[#FF0000] border-[1px] w-full text-[#FF0000] rounded"
            />
            </Link>
          </div>
          <div className="flex-grow w-[40%] px-3">
            <ButtonComp
            onClick={ handleSubmit(handleSubmitForm)
            }
              btnText={userUpdateLoader||emailUpdateLoader?"Loading...":"Save Changes"}
              btnTextClassName="text-center  btnClick border-[1px] w-full text-[#fff] rounded"
            />
          </div>
        </div>

      </form>
    </section>
  );
}
