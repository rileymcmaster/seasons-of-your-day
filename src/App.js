import React from 'react'

import styled from 'styled-components'
import './styles.css'
import Deck from './Components/Deck/index'
import Video from './Components/Video'
import { set0Small, set0Large, set1Small, set1Large } from './assets/index'
import { BiChevronsDown } from 'react-icons/bi'
import LongFade from './Components/LongFade'
import GlobalStyles from './GlobalStyles'
import Flash from './Components/Flash'

const App = () => {
  return (
    <>
      <GlobalStyles />

      <DeckWrapper>
        <p>Swipe pictures to see what's underneath</p>
        <p>Double tap them to see them large</p>
      </DeckWrapper>
      <DeckWrapper>
        <Deck cardsSmall={set0Small} cardsLarge={set0Large} />
        <HiddenText>catch a shape in the circles of my mind</HiddenText>
      </DeckWrapper>
      <DeckWrapper>
        <Deck cardsSmall={set1Small} cardsLarge={set1Large} />
        <Video />
      </DeckWrapper>
      <LongFade />
      <Flash />
      <Icon>
        <BiChevronsDown />
      </Icon>
    </>
  )
}

const DeckWrapper = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(153, 153, 153);

  h2 {
    margin-top: 5rem;
  }
`
const HiddenText = styled.div`
  font-size: 0.8rem;
  text-align: center;
  color: black;
  position: absolute;
`
const Icon = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.7;
  mix-blend-mode: exclusion;
  color: white;
  font-size: 1.5rem;
  z-index: 1;
`
export default App
