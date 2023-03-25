import React from "react";

export default function ButtonComp({ btnText,btnTextClassName,onClick,...props}) {
  return (
    <button
      className={` p-2 ${btnTextClassName} `}
      onClick={onClick}
      {...props}
    >
      {btnText}
    </button>
  );
}
