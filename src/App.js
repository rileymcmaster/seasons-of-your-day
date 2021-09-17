import React, { useState, useEffect, useRef } from 'react'

import styled from 'styled-components'
import './styles.css'
import Deck from './Components/Deck'
import Video from './Components/Video'

const App = () => {
  return (
    <>
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
  overflow: hidden;
  background: rgb(153, 153, 153);
  /* background: radial-gradient(circle, rgba(153, 153, 153, 1) 0%, rgba(62, 62, 62, 1) 79%); */
`

export default App
