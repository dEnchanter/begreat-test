import React from "react";
import Dropdown from 'react-dropdown';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import styled from "styled-components";
export default function DropDownItem({options=[],onChange,placeholder,value, border,BackgroundColor,padding}) {
  return (
    <DropDownItemStyle BackgroundColor={BackgroundColor} Border={border}Padding={padding}>
      <Dropdown
        arrowClosed={<span className="arrow-closed"><BsChevronDown/></span>}
        arrowOpen={<span className="arrow-open" ><BsChevronUp/></span>}
        options={options}
        onChange={onChange}
        value={value}
        placeholder={placeholder||"Select"}
        className='border-0'
      />
    </DropDownItemStyle>
  );
}


const DropDownItemStyle = styled.div`
.Dropdown-control {
    padding:${props=>props?.Padding?props?.Padding :' 5px 20px 5px 10px !important'};
    display:flex;
    gap:5px;
    align-items: center;
    background: ${props=>props?.BackgroundColor?props?.BackgroundColor :'var(--dropDownBg)'} ;
    border-color: ${props=>props?.Border?props?.Border :'#E9ECEB'};
    color:var(--foreground);
}
border: none;
background: transparent;
    
`