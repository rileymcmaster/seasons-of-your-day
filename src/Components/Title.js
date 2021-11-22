import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Deck from './Deck/index'
import { Transition } from 'react-transition-group'

const Title = ({ data }) => {
  const [showCard, setShowCard] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowCard(true)
    }, 3000)
  }, [])

  return (
    <Wrapper>
      {showCard && <Deck data={data} />}
      <h1>Seasons of your day</h1>
      <Instructions>
        <p>Swipe a picture to discover what’s underneath</p>
        <p>Double tap it to view it large</p>
      </Instructions>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  h1 {
    position: absolute;
    text-align: center;
    max-width: var(--max-content-width);
  }
`

const Instructions = styled.div`
  max-width: var(--max-content-width);
  /* border: 2px solid red; */
  margin: auto 2rem 2rem;
  position: absolute;
  bottom: 0%;
  p ~ p {
    /* border: 2px solid blue; */
    margin-top: 2rem;
  }
`
export default Title
