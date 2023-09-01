import React from 'react'

export default function TwoSides({sideA,sideAClassName,sideB,sideBClassName,WrapperClassName}) {
  return (
    <div className={`flex justify-between items-center ${WrapperClassName}`}>
      <div className={sideAClassName}>{sideA}</div>
      <div className={sideBClassName}>{sideB}</div>
    </div>
  )
}
