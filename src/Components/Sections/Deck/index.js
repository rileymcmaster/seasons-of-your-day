import React from 'react'
import styled from 'styled-components'
import CardAll from './CardAll'

const Deck = ({ data }) => {
  const { text, imagesSmall, imagesLarge } = data
  return (
    <Wrapper>
      <CardAll cardsSmall={imagesSmall} cardsLarge={imagesLarge} />
      {text && <p>{text}</p>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 120vh;
  height: var(--deck-page-height);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    position: absolute;
    width: 80vw;
    max-width: 600px;
    text-align: center;
  }
`

export default Deck
