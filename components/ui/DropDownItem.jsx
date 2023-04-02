import React from "react";
import Dropdown from 'react-dropdown';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import styled from "styled-components";
export default function DropDownItem({options=[],onChange,placeholder,value, border,BackgroundColor,padding,noIcon,borderRadius}) {
  return (
    <DropDownItemStyle BackgroundColor={BackgroundColor} Border={border}Padding={padding} NoIcon={noIcon} BorderRadius={borderRadius}>
      <Dropdown
        arrowClosed={noIcon?false:<span className="arrow-closed"><BsChevronDown/></span>}
        arrowOpen={noIcon?false:<span className="arrow-open" ><BsChevronUp/></span>}
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
    justify-content:center;
    gap:5px;
    align-items: center;
    background: ${props=>props?.BackgroundColor?props?.BackgroundColor :'var(--dropDownBg)'} ;
    border-color: ${props=>props?.Border?props?.Border :'#E9ECEB'};
    color:var(--foreground);
    border: ${props=>props?.NoIcon?'none' :''};
    background: transparent;
    border-radius:${props=>props?.BorderRadius?props?.BorderRadius :'0px'};
}
border: none;
background: transparent;
text-align: center;
.Dropdown-root{
  display: inline-block;
}
`