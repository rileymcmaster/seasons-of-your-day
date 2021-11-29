import React from 'react'
import styled from 'styled-components'
import CardAll from './CardAll'

const Deck = ({ data }) => {
  const { text, imagesSmall, imagesLarge, notes } = data
  console.log('NOTES', notes)
  return (
    <Wrapper className="scroll-snap">
      <CardAll cardsSmall={imagesSmall} cardsLarge={imagesLarge} notes={notes} />
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
    z-index: 1;
    max-width: 650px;
    text-align: center;
  }
`

export default Deck
