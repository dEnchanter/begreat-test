import React from 'react'

export default function FlexContainer({children,wrapperContainer,innerContainer}) {
  return (
    <div className={` ${wrapperContainer}`}>
        <div className={`mx-2 ${innerContainer}`}>{children}</div>
    </div>
  )
}
