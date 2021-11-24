import React from 'react'
import styled from 'styled-components'
import ImageLoader from '../../utils/ImageLoader'

const FullBleed = ({ data }) => {
  const { imagesSmall, imagesLarge } = data

  const imgSmall = imagesSmall[0]
  const imgLarge = imagesLarge[0]

  const styles = {
    transition: 'all 1s'
  }

  return (
    <Wrapper className="scroll-snap">
      <ImageContainer>
        <ImageLoader imgSmall={imgSmall} imgLarge={imgLarge} styles={styles} />
      </ImageContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  height: var(--full-height);
  width: 100%;
`

const ImageContainer = styled.div`
  max-width: var(--max-content-width);
  height: 100%;
  padding: 0;
  margin: 0 auto;
  user-select: none;
  pointer-events: none;
`

export default FullBleed
