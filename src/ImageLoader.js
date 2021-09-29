import React, { useRef, useState } from 'react'
import styled from 'styled-components'

const omit = (obj, omitKey) => {
  Object.keys(obj).reduce((result, key) => {
    if (key !== omitKey) {
      result[key] = obj[key]
    }
    return result
  }, {})
}

const overlayStyles = {
  position: 'absolute',
  filter: 'blur(1px)',
  transition: 'opacity ease-in 1000ms',
  clipPath: 'inset(0)'
}

const ImageLoader = ({ smallSrc, largeSrc }) => {
  const [highResImageLoaded, setHighResImageLoaded] = useState(false)
  const highResImageRef = useRef(null)

  return (
    <span>
      {/* <Image
        // {...filteredProps}
        onLoad={() => setHighResImageLoaded(true)}
        ref={highResImageRef}
        src={largeSrc}
      /> */}
      <Image
        className={overlayStyles}
        // {...filteredProps}
        className={overlayStyles}
        {...(highResImageLoaded && { style: { opacity: '0' } })}
        src={smallSrc}
      />
    </span>
  )
}

const Image = styled.img`
  /* img { */
  box-sizing: border-box;
  width: 90%;
  max-width: 800px;
  margin: 5%;
  max-height: 95%;
  transition: opacity 0.2s;
  transition-delay: 0.2s;
  opacity: 1;
  /* filter: blur(0px); */
  /* } */
`

export default ImageLoader
