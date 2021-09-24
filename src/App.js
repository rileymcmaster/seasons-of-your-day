import React from 'react'

import styled from 'styled-components'
import './styles.css'
import Deck from './Components/Deck'
import Video from './Components/Video'
import Gesture from './Components/Gesture'

const App = () => {
  return (
    <>
      {/* <DeckWrapper>
        <Gesture />
      </DeckWrapper> */}
      <DeckWrapper>
        <Deck />
        <Video />
      </DeckWrapper>
      <DeckWrapper style={{ backgroundColor: 'darkblue' }}></DeckWrapper>
    </>
  )
}

const DeckWrapper = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  background: rgb(153, 153, 153);
`

export default App
