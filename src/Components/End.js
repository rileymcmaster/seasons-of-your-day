import React from 'react'
import styled from 'styled-components'
import Credits from './Credits'
import ImageLoader from './utils/ImageLoader'

const End = ({ data }) => {
  const { imagesSmall, imagesLarge } = data

  const imgSmall = imagesSmall[0]
  const imgLarge = imagesLarge[0]

  return (
    <Wrapper>
      <ImageContainer>
        <ImageLoader imgSmall={imgSmall} imgLarge={imgLarge} styles={{}} />
      </ImageContainer>
      <Credits />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  background: var(--primary-color);
`

const ImageContainer = styled.div`
  height: 100vh;
  width: 100%;
  max-width: var(--max-content-width);
  margin: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default End
