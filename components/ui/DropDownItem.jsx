import React from "react";
import Dropdown from 'react-dropdown';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import styled from "styled-components";
export default function DropDownItem({options=[],onChange,placeholder,value}) {
  return (
    <DropDownItemStyle>
      <Dropdown
        arrowClosed={<span className="arrow-closed"><BsChevronDown/></span>}
        arrowOpen={<span className="arrow-open" ><BsChevronUp/></span>}
        options={options}
        onChange={onChange}
        value={value}
        placeholder={placeholder||"Select"}
      />
    </DropDownItemStyle>
  );
}


const DropDownItemStyle = styled.div`
.Dropdown-control {
    padding: 5px 20px 5px 10px !important;
    display:flex;
    gap:5px;
    align-items: center;
    background: var(--dropDownBg);
    border-color: #E9ECEB;
    color:var(--foreground);
}

    
`