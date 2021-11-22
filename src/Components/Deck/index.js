import React from 'react'
import styled from 'styled-components'
import CardAll from './CardAll'

const Deck = ({ data }) => {
  const { text, imagesSmall, imagesLarge } = data
  return (
    <Wrapper>
      <CardAll cardsSmall={imagesSmall} cardsLarge={imagesLarge} />
      <p>{text}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow-y: visible;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  p {
    position: absolute;
    padding: 10vh 10vw;
  }
`

export default Deck
