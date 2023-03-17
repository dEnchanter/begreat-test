import React from 'react'

export default function TextInput({suffixIcon,suffixIconClassName,prefixIcon,prefixIconClassName,inputClassName,containerClassName}) {
  return (
    <div>
         <div className={`flex items-center border-[#E9ECEB] border-2 rounded-lg bg-white py-3 px-2  ${containerClassName}`}>
                       {suffixIcon && <div className={suffixIconClassName}>{suffixIcon}</div>}
                        <input className={`border-0 px-3 outline-0 ${inputClassName}`} placeholder='Search'/>
                        {prefixIcon && <div className={prefixIconClassName}>{prefixIcon}</div>}
                    </div>
    </div>
  )
}
