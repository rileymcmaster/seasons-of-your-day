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
    <Wrapper>
      <ImageLoader imgSmall={imgSmall} imgLarge={imgLarge} styles={styles} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  max-width: var(--max-content-width);
  margin: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default FullBleed
