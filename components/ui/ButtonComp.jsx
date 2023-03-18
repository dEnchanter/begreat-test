import React from "react";

export default function ButtonComp({ btnText,btnTextClassName }) {
  return (
    <button
      className={` text-white p-2 ${btnTextClassName} `}
    >
      {btnText}
    </button>
  );
}
