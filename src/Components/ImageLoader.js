import React, { useState } from 'react'
import styled from 'styled-components'

const ImageLoader = ({ imgSmall, imgLarge }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoad = () => {
    setIsLoaded(true)
  }

  return (
    <Wrapper>
      <img src={imgSmall} class="image-thumb" style={{ visibility: isLoaded ? 'hidden' : 'visible' }} />
      <img onLoad={handleLoad} className="image-full" src={imgLarge} style={{ opacity: isLoaded ? 1 : 0 }} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;

  img {
    position: absolute;
    min-height: 100%;
    min-width: 100%;
  }
  .image-thumb {
    transition: visibility 0ms ease 400ms;
    /* filter: blur(5px); */
    /* transform: scale(1.01); */
  }
  .image-full {
    transition: opacity 400ms ease 0ms;
  }
`

export default ImageLoader
