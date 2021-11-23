import React, { useEffect } from 'react'
import styled from 'styled-components'
import { soloOverlay1 } from '../../assets/index'

const quotes = [
  'you’ll fall asleep under a tree',
  'you’ll think of me',
  'won’t you linger on?',
  'make my branches strong',
  'till i can shade you'
]

const LongFade = () => {
  return (
    <>
      <FadeBackground>
        <FixedFade>
          <img src={soloOverlay1} alt="photograph" width="100%" />
        </FixedFade>
      </FadeBackground>
      {quotes.map((quote) => {
        return (
          <QuoteContainer key={Math.random() * 100000}>
            <div>{quote}</div>
          </QuoteContainer>
        )
      })}
    </>
  )
}
const FixedFade = styled.div`
  position: sticky;
  display: flex;
  justify-content: center;
  height: 100vh;
  top: 0;
  background: rgba(94, 94, 94, 0.7707457983193278);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 55%, rgba(94, 94, 94, 1) 90%);
  mix-blend-mode: color-burn;
  img {
    width: 50vw;
    max-width: 500px;
    margin: auto;
    z-index: 9;
  }
`

const FadeBackground = styled.div`
  position: relative;
  height: 500vh;
  background: rgb(255, 255, 255);
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 100%);
`
const QuoteContainer = styled.div`
  background-color: rgb(0, 0, 0);
  height: 300vh;
  position: relative;
  background: rgb(84, 84, 84);
  background: radial-gradient(circle, rgba(84, 84, 84, 1) 0%, rgba(0, 0, 0, 1) 100%);
  div {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    margin-bottom: 100vh;
    position: sticky;
  }
`
export default LongFade
