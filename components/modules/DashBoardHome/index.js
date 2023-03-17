import React from "react";
import TextInput from "../../ui/TextInput";
import { TbSearch } from "react-icons/tb";
import FallBackImage from "../../common/FallBackImage";
import { AiFillSetting, AiOutlinePlus } from "react-icons/ai";
import { HiPlus } from "react-icons/hi";
import { IoIosArrowUp } from "react-icons/io";
import Dropdown from 'react-dropdown';
import DropDownItem from "../../ui/DropDownItem";
import TwoSides from "../../common/TwoSides";
import Accordance from "../../common/Accordiance";
export default function DashBoardHome() {

  
  const options = [
    { 
      value: 1,
      label: <span className="secondary font-semibold">1</span>
    },
    {
      value:  2,
      label:  <span className="secondary font-semibold">2</span>
    },
    {
      value:  3,
      label:  <span className="secondary font-semibold">3</span>
    },
    {
      value:  4,
      label:  <span className="secondary font-semibold">4</span>
    },
    {
      value:  5,
      label:  <span className="secondary font-semibold">5</span>
    }
  ];
const defaultOption = options[0];



  return (
    <section className="">
      <div className="flex px-3 lg:px-8 flex-wrap">
        <div className="flex-grow w-[100%] xl:w-[70%] mb-4 xl:mb-0  px-3">
          <div className="flex items-center justify-between flex-wrap mb-3">
            <div className="flex items-center gap-2 flex-wrap">
              <TextInput suffixIcon={<TbSearch size={25} wrapperClassName=' xl:w-[29%]' />} />
              <div className="flex gap-1 items-center">
                <FallBackImage
                  src={"/Images/Dashboard/coin.png"}
                  width={62}
                  height={34}
                />
                <h1 className="text-[25px] lg:text-[32px] font-bold text-[#080542]">
                  BNB/USDT
                </h1>
              </div>
            </div>
            <div className="leading-[1.4rem]">
              <div className="gray mb-0">Price</div>
              <div className="primary text-[20px] lg:text-[24px] font-bold">
                1,334.0
              </div>
            </div>

            <div>
              <button className="bg-secondary text-white px-8 rounded-3xl py-[8px] flex items-center ">
                <HiPlus className="mr-3" color="white" /> Watchlist
              </button>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-wrap">
            <div className="flex-grow w-full md:w-[39%] xl:w-[29%] mx-1">
             <div className="bg-white py-3 px-3 border-[#E9ECEB] border-[0.6px] rounded-lg">
             <div className="mb-5">
                <div className="text-[14px] font-semibold gray mb-4">Last 60 Minutes high price: <span className="font-bold secondary">10</span></div>
                <div className="h-[308px] bg-[#EA3943] rounded-xl text-white text-[24px] font-bold flex justify-center items-center">+75%</div>
              </div>

              <div>
                <div className="text-[16px] font-semibold gray mb-4">Current Price : <span className="font-bold secondary"> 1,334.0</span></div>
                <div className="h-[209px] bg-[#16C782] rounded-xl mb-2 text-white text-[24px] font-bold flex justify-center items-center">+35%</div>
                <div className="text-[14px] font-semibold gray mb-4">Last 60 Minutes high price: <span className="font-bold secondary">10</span></div>

              </div>
             </div>
            </div>
            <div className="flex-grow w-full md:w-[60%] xl:w-[70%]">Hello</div>
          
          </div>
        </div>
        <div className="flex-grow   xl:w-[30%]">
          <Accordance options={options} value={defaultOption}/>
          <Accordance options={options} value={defaultOption} title='Watchlist Timeframe Settings'/>
        </div>
      </div>
    </section>
  );
}
