import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import ImageLoader from '../../utils/ImageLoader'

const FullBleed = ({ data }) => {
  const [imageScrolledPast, setImageScrolledPast] = useState(false)
  const { imagesSmall, imagesLarge } = data

  const imgSmall = imagesSmall[0]
  const imgLarge = imagesLarge[0]

  const [fullBleedRef, inView] = useInView({
    threshold: 0
  })

  useEffect(() => {
    if (inView) {
      setImageScrolledPast(true)
    }
  }, [inView])

  const styles = {
    transition: 'all 1s'
  }

  return (
    <Wrapper className="scroll-snap">
      <ImageContainer id="image-container" className={imageScrolledPast ? 'blur-image' : undefined}>
        <ImageLoader imgSmall={imgSmall} imgLarge={imgLarge} styles={styles} />
      </ImageContainer>
      <div ref={fullBleedRef} className="absolute"></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  height: var(--full-height);
  width: 100%;
  background: var(--bg-colour);
  position: relative;
  div.absolute {
    visibility: none;
    position: absolute;
    bottom: -100%;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  max-width: var(--max-content-width);
  height: 100%;
  padding: 0;
  margin: 0 auto;
  user-select: none;
  pointer-events: none;
  overflow: hidden;

  &.blur-image img {
    transition: all 0s;
    filter: blur(3px) contrast(0.8) brightness(1.3);
    transform: scale(0.9);
  }
`

export default FullBleed
