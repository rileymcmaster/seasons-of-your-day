import React from 'react'
import styled from 'styled-components'

const LongFade = ({ data }) => {
  const { imagesSmall, text } = data

  return (
    <>
      <FadeBackground>
        <FixedFade>
          <img src={imagesSmall[0]} alt="photograph" width="100%" />
        </FixedFade>
      </FadeBackground>
      {text.map((quote) => {
        return (
          <QuoteContainer key={Math.random() * 100000}>
            <p>{quote}</p>
          </QuoteContainer>
        )
      })}
    </>
  )
}

const FadeBackground = styled.div`
  position: relative;
  height: 500vh;
  height: var(--fade-page-height);
  background: rgb(255, 255, 255);
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 100%);
`

const FixedFade = styled.div`
  position: sticky;
  display: flex;
  justify-content: center;
  height: 120vh;
  height: var(--deck-page-height);
  top: 0;
  background: rgba(94, 94, 94, 0.7707457983193278);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 55%, rgba(94, 94, 94, 1) 90%);
  mix-blend-mode: color-burn;
  img {
    transform: translateY(-40%);
    width: 50vw;
    max-width: 500px;
    margin: auto;
    z-index: 9;
  }
`

const QuoteContainer = styled.div`
  background-color: rgb(0, 0, 0);
  height: 300vh;
  height: var(--fade-content-height);
  position: relative;
  background: rgb(84, 84, 84);
  background: radial-gradient(circle, rgba(84, 84, 84, 1) 0%, rgba(0, 0, 0, 1) 100%);
  p {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    transform: translateY(-50%);
    margin-bottom: var(--full-height);
    position: sticky;
  }
`
export default LongFade
