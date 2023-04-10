import React, { useState } from "react";
import FallBackImage from "../../../common/FallBackImage";
import ButtonComp from "../../../ui/ButtonComp";
import TextInput from "../../../ui/TextInput";

export default function Profile() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <section>
      <section className="mb-10">
        <div className="priceText text-[20px] font-medium ">
          Profile Information
        </div>
        <div className="priceText text-[14px] font-normal">
          Update your Profile details here
        </div>
      </section>

      <section className="overflow-hidden">
        <div className="flex items-center mb-12 flex-wrap">
          <div className="flex-grow w-full xl:w-[20%] px-3 text3 font-semibold text-[16px] mb-3 lg:mb-0">
            Name
          </div>
          <div className=" flex-grow  w-full lg:w-[80%] px-3">
            <TextInput
              placeholder="Name"
              containerClassName={" borderColorI border-[2px] "}
              inputClassName={"text-[14px]"}
            />
          </div>
          
        </div>
        {/*  */}
        <div className="flex items-center mb-12 flex-wrap">
          <div className="flex-grow  w-full lg:w-[20%] px-3 text3 font-semibold text-[16px] mb-3 lg:mb-0">
            Email Address
          </div>
          <div className="flex-grow  w-full lg:w-[80%] px-3">
            <TextInput
              placeholder="mail@abc.com"
              inputClassName={"text-[14px] "}
              containerClassName={" borderColorI border-[2px]"}
            />
          </div>
        </div>
        {/*  */}
        <div className="flex items-center mb-12 flex-wrap">
          <div className="flex-grow  w-full lg:w-[20%] px-3 text3 font-semibold text-[16px] mb-3 lg:mb-0">
            Backup Email Address
          </div>
          <div className="flex-grow w-full lg:w-[80%] px-3">
            <TextInput
              placeholder="mail@abc.com"
              inputClassName={"text-[14px]"}
              containerClassName={" borderColorI border-[2px]"}
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
                src={"/Images/Dashboard/profile.png"}
                width={87}
                height={87}
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
              <input id="imageInput" type="file" className={"hidden"} />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex items-center mb-12 flex-wrap">
          <div className="flex-grow  w-full lg:w-[20%] px-3 text3 font-semibold text-[16px] mb-3 lg:mb-0">
            Password
          </div>
          <div className="flex-grow w-[40%] px-3">
            <TextInput
              placeholder="New Password"
              inputClassName={"text-[14px]"}
              containerClassName={" borderColorI border-[2px]"}
            />
          </div>
          <div className="flex-grow w-[40%] px-3">
            <TextInput
              placeholder="Confirm Password"
              inputClassName={"text-[14px]"}
              containerClassName={" borderColorI border-[2px]"}
            />
          </div>
        </div>
        {/*  */}
        <div className="flex items-center mb-12 mt-10">
          <div className="flex-grow w-[20%] px-3 text3 font-semibold text-[16px]"></div>
          <div className="flex-grow w-[40%] px-3">
            <ButtonComp
              btnText={"Cancel"}
              btnTextClassName="text-center border-[#FF0000] border-[1px] w-full text-[#FF0000] rounded"
            />
          </div>
          <div className="flex-grow w-[40%] px-3">
            <ButtonComp
              btnText={"Save Changes"}
              btnTextClassName="text-center  btnClick border-[1px] w-full text-[#fff] rounded"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
