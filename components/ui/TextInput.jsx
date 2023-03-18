import { useTheme } from "next-themes";
import React from "react";

export default function TextInput({
  suffixIcon,
  suffixIconClassName,
  prefixIcon,
  prefixIconClassName,
  inputClassName,
  containerClassName,
  wrapperClassName,
  placeholder='Search'
}) {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`w-full md:w-auto ${wrapperClassName}`}>
      <div
        className={`flex items-center border-[#E9ECEB] border-2 rounded-lg  py-3 px-2  ${containerClassName}`}
      >
        {" "}
        {suffixIcon && (
          <div className={suffixIconClassName}> {suffixIcon} </div>
        )}{" "}
        <input
          className={`border-0 px-1 lg:px-3 outline-0 bg-transparent placeholder: ${inputClassName} ${theme==='dark' ?'placeholder-[#fff]':'placeholder-[#595959]'}`}
          placeholder={placeholder}
        />{" "}
        {prefixIcon && (
          <div className={prefixIconClassName}> {prefixIcon} </div>
        )}{" "}
      </div>{" "}
    </div>
  );
}
