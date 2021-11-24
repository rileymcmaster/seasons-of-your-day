import React from 'react'
import styled from 'styled-components'
import Credits from './Credits'
import ImageLoader from '../../utils/ImageLoader'

const End = ({ data }) => {
  const {
    photo: { imagesSmall, imagesLarge },
    text
  } = data

  const imgSmall = imagesSmall[0]
  const imgLarge = imagesLarge[0]

  return (
    <Wrapper>
      <Container className="scroll-snap">
        {text.map((phrase) => {
          return <p key={phrase.split(' ')[0]}>{phrase}</p>
        })}
      </Container>
      <Container className="scroll-snap">
        <ImageLoader imgSmall={imgSmall} imgLarge={imgLarge} styles={{}} />
      </Container>
      <Credits />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  background: var(--primary-colour);
`

const Container = styled.div`
  height: 100vh;
  height: var(--full-height);
  width: 100%;
  max-width: var(--max-content-width);
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: white;
  }
`

export default End
