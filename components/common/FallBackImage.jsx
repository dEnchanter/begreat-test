import Image from 'next/image'
import React from 'react'

export default function FallBackImage({src,width,height,blurDataURL,ImageClassName,alt}) {
  return (
    <div>
        <Image
        src={src}
        width={width}
        height={height}
        placeholder='blur'
        blurDataURL={blurDataURL||src}
        className={ImageClassName}
        alt={alt}
        />
    </div>
  )
}
