import React, { useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { AiFillSetting, AiOutlinePlus } from "react-icons/ai";
import TwoSides from './TwoSides';
import DropDownItem from '../ui/DropDownItem';

export default function Accordance({title,options,value}) {
    const [toggle,setToggle]=useState(false)
  return (
    <div className="mx-3  border bg-white py-3 px-3 rounded-xl mb-3">
            <div className="flex items-center justify-between pb-4 pt-3 border-b-[1px] border-[#E9ECEB]">
              <div className="flex items-center ">
                <AiFillSetting size={30} className="mr-3" />{" "}
                <div className="secondary text-[16px] lg:text-[20px] font-semibold">
               {  title|| 'Dashboard Timeframe Settings'}
                </div>
              </div>
              <IoIosArrowUp size={20} onClick={()=>setToggle(!toggle)} />
            </div>
           <div className={`mt-4 ${toggle? 'h-0 transition-all':'h-auto transition-all'} overflow-hidden`}>
              <TwoSides
              WrapperClassName='mb-3'
              sideA={'pulse timeframe:'}
              sideAClassName={'capitalize gray font-medium'}
              sideB={<DropDownItem options={options}  value={value}/>}
              
              />
              <TwoSides
              WrapperClassName='mb-3'
              sideA={'Shift timeframe:'}
              sideAClassName={'capitalize gray font-medium'}
              sideB={<DropDownItem options={options} value={value}/>}
              
              />
           </div>
          </div>
  )
}
