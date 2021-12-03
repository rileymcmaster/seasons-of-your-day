import useWindowSize from 'Components/hooks/useWindowSize'
import React, { useState } from 'react'
import styled from 'styled-components'

export default ({ imgSmall, imgLarge, styles }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  // only load the large images if they are on a desktop
  const isDesktop = useWindowSize().width >= 700

  const handleLoad = () => {
    setImageLoaded(true)
  }

  return (
    <Wrapper>
      <Image src={imgSmall} style={{ ...styles, zIndex: 1 }} />
      {isDesktop && <Image src={imgLarge} style={{ ...styles, zIndex: 2 }} onLoad={handleLoad} />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  position: absolute;
  transition: opacity 1s;
  width: 100%;
`
