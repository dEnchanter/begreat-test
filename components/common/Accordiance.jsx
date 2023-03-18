import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { AiFillSetting, AiOutlinePlus } from "react-icons/ai";
import TwoSides from "./TwoSides";
import DropDownItem from "../ui/DropDownItem";

export default function Accordance({ title, options, value, seyListDay }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" border bg-white py-3 px-3 rounded-xl mb-3">
      <div className="flex items-center justify-between pb-3 pt-3 border-b-[1px] borderColor">
        <div className="flex items-center ">
          <AiFillSetting size={30} className="mr-3" />{" "}
          <div className="secondary text-[16px] lg:text-[20px] font-semibold">
            {title || "Dashboard Timeframe Settings"}
          </div>
        </div>
        <IoIosArrowUp size={20} onClick={() => setToggle(!toggle)} />
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
            <DropDownItem
              options={options}
              onChange={(e) => seyListDay(e?.value)}
              value={value}
            />
          }
        />
        <TwoSides
          WrapperClassName="mb-3"
          sideA={"Shift timeframe:"}
          sideAClassName={"capitalize gray font-medium"}
          sideB={<DropDownItem options={options} value={value} />}
        />
      </div>
    </div>
  );
}
