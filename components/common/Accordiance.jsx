import React, { useState } from "react";
import { AiFillSetting, AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import TwoSides from "./TwoSides";
import DropDownItem from "../ui/DropDownItem";
import Select from 'react-select';
import { setPulseTimeframe, setShiftTimeframe } from "../../helper";

export default function Accordance({ title, options, value, seyListDay, options1, value1, seyListDay1 }) {
  // Select dropdown styling
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#343334', // customize background color of input field
      border: 'none', // remove border
      outline: 'none',
      textColor: 'white', // customize text color
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#343334', // customize background color of dropdown menu
      textColor: 'white', // customize text color
      border: '1px solid #343334', // customize border color
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: 'gray', // customize background color of selected options
    }),
  };

  // setPulseTimeframe(value?.value);

  const [toggle, setToggle] = useState(false);
  return (
    <div className=" bg-white py-3 px-3 rounded-xl mb-3">
      <div className="flex items-center justify-between pb-3 pt-3 border-b-[1px] borderColor">
        <div className="flex items-center ">
          <AiFillSetting size={30} className="mr-3" />{" "}
          <div className="secondary text-[16px] lg:text-[20px] font-semibold">
            {title || "Dashboard Timeframe Settings"}
          </div>
        </div>
        <div onClick={() => setToggle(!toggle)} >
          {
            toggle ? <IoIosArrowDown size={20} /> : <IoIosArrowUp size={20}/>
          }  
        </div>
      </div>
      <div
        className={` ${
          toggle
            ? "h-0 transition-all mt-1 overflow-hidden"
            : "h-auto transition-all mt-4"
        } `}
      >
        <TwoSides
          WrapperClassName="mb-3"
          sideA={"pulse timeframe:"}
          sideAClassName={"capitalize gray font-medium"}
          sideB={
            // <DropDownItem
            //   options={options}
            //   onChange={(e) => {
            //     console.log(e,'data454')
            //     seyListDay(e)
            //   }}
            //   value={value}
            // />

            <Select 
              options={options}
              onChange={(e) => {
                console.log(e,'data454')
                seyListDay(e)
              }}
              value={value}
              styles={customStyles}
            />
          }
        />
        <TwoSides
          WrapperClassName="mb-3"
          sideA={"Shift timeframe:"}
          sideAClassName={"capitalize gray font-medium"}
          sideB={
          // <DropDownItem options={options1}
          // onChange={(e) => {
          //   console.log(e,'data454')
          //   seyListDay1(e)
          // }}
          // value={value1} />

          <Select 
              options={options1}
              onChange={(e) => {
                console.log(e,'data454')
                seyListDay1(e)
                setShiftTimeframe(e)
              }}
              value={value1}
              styles={customStyles}
            />
          }
        />
      </div>
    </div>
  );
}