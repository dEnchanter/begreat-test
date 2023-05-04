import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiFillSetting, AiOutlinePlus } from "react-icons/ai";
import TwoSides from "./TwoSides";
import DropDownItem from "../ui/DropDownItem";
import Select from 'react-select';

export default function Accordance2({ 
  title, 
  options6, 
  value, 
  seyListDay,
  options7, 
  value1, 
  seyListDay1, 
  selectedOptions, 
  setSelectedOptions, 
  selectedOptions2, 
  setSelectedOptions2 
}) {
  const [toggle, setToggle] = useState(false);

  const handleOptionChange = (selectedOptions) => {
    // console.log(selectedOptions,'selectedOptions')
    setSelectedOptions(selectedOptions);
  }

  const handleOptionChange2 = (selectedOptions2) => {
    // console.log(selectedOptions2,'selectedOptions2')
    setSelectedOptions2(selectedOptions2);
  }

  // Custom styles for react-select
  
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
      textColor: 'black', // customize text color
      border: '1px solid #343334', // customize border color
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: 'gray', // customize background color of selected options
    }),
  };

  return (
    <div className="bg-white py-3 px-3 rounded-xl mb-3">
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
              isMulti
              options={options6}
              value={selectedOptions || defaultOption}
              onChange={handleOptionChange}
              styles={customStyles}
            />
          }
        />
        <TwoSides
          WrapperClassName="mb-3"
          sideA={"Shift timeframe:"}
          sideAClassName={"capitalize gray font-medium"}
          sideB={
          <Select
            isMulti
            options={options7}
            value={selectedOptions2}
            onChange={handleOptionChange2}
            styles={customStyles}
            />
          }
        />
      </div>
    </div>
  );
}