import React from "react";
import Dropdown from 'react-dropdown';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import styled from "styled-components";
export default function NavDropDownItem({options=[],onChange,placeholder,value, border,BackgroundColor,padding,noIcon,borderRadius}) {
  return (
    <NavDropDownItemStyle BackgroundColor={BackgroundColor} Border={border} Padding={padding} NoIcon={noIcon} BorderRadius={borderRadius}>
      <Dropdown
        arrowClosed={noIcon?false:<span className="arrow-closed"><BsChevronDown/></span>}
        arrowOpen={noIcon?false:<span className="arrow-open" ><BsChevronUp/></span>}
        options={options}
        onChange={onChange}
        value={value}
        placeholder={placeholder||"Community"}
        className='border-0'
      />
    </NavDropDownItemStyle>
  );
}


const NavDropDownItemStyle = styled.div`
.Dropdown-control {
    padding:${props=>props?.Padding?props?.Padding :'  !important'};
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