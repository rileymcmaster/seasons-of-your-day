import React, { useState } from 'react'
import styled from 'styled-components'
import GlobalStyles from './GlobalStyles'

import {
  photosetTitle,
  photosetDeck1,
  photosetDeck2,
  photosetDeck3,
  photosetFullbleed,
  photosetFlash,
  photosetEnd,
  instructions,
  fullBleedText,
  endText
} from './assets/index'
import Title from './Components/Sections/TitlePage/'
import Deck from './Components/Sections/Deck/'
import DeckAndVideo from './Components/Sections/DeckAndVideo/'
import FadeToFlash from './Components/Sections/FadeToFlash/'
import FullBleed from './Components/Sections/FullBleed/'
import End from './Components/Sections/End/'
import Instructions from './Components/Sections/Instructions'
import ControlBar from './Components/Sections/ControlBar'
import FullBleedGroup from './Components/Sections/FullBleedGroup'

const App = () => {
  const [musicPlaying, setMusicPlaying] = useState(false)
  const [showControlBar, setShowControlBar] = useState(false)

  const handleMusicPlaying = () => {
    setMusicPlaying(!musicPlaying)
  }

  const handleShowControlBar = () => {
    setShowControlBar(true)
  }

  return (
    <>
      <GlobalStyles />
      <Title data={photosetTitle} />
      <Spacer />
      <Instructions
        data={instructions}
        musicPlaying={musicPlaying}
        handleMusicPlaying={handleMusicPlaying}
        handleShowControlBar={handleShowControlBar}
      />
      <Deck data={photosetDeck1} />
      <FullBleed data={photosetFullbleed[0]} />
      <Deck data={photosetDeck2} />
      <FullBleed data={photosetFullbleed[1]} />
      <DeckAndVideo data={photosetDeck3} />
      <FullBleedGroup data={{ photos: photosetFullbleed, text: fullBleedText }} />
      <FadeToFlash data={photosetFlash} />
      <End data={{ photo: photosetEnd, text: endText }} />
      {/* {showControlBar && <ControlBar musicPlaying={musicPlaying} handleMusicPlaying={handleMusicPlaying} showControlBar={showControlBar} />} */}
      <ControlBar musicPlaying={musicPlaying} handleMusicPlaying={handleMusicPlaying} showControlBar={showControlBar} />
    </>
  )
}

const Spacer = styled.div`
  height: 20vh;
`

export default App
