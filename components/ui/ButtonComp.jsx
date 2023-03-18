import React from "react";

export default function ButtonComp({ btnText,btnTextClassName,onClick}) {
  return (
    <button
      className={` p-2 ${btnTextClassName} `}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
}
