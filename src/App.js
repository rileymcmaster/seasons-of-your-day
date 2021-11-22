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
  instructions
} from './assets/index'
import Title from './Components/Sections/TitlePage/'
import Deck from './Components/Sections/Deck/'
import DeckAndVideo from './Components/Sections/DeckAndVideo/'
import FadeToFlash from './Components/Sections/FadeToFlash/'
import FullBleed from './Components/Sections/FullBleed/'
import End from './Components/Sections/End/'
import Instructions from './Components/Sections/Instructions'
import ControlBar from './Components/Sections/ControlBar'

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
      {showControlBar && <ControlBar musicPlaying={musicPlaying} handleMusicPlaying={handleMusicPlaying} />}
      <Title data={photosetTitle} />
      <Instructions
        data={instructions}
        musicPlaying={musicPlaying}
        handleMusicPlaying={handleMusicPlaying}
        handleShowControlBar={handleShowControlBar}
      />
      <Deck data={photosetDeck1} />
      <FullBleed data={photosetFullbleed[0]} />
      <Deck data={photosetDeck2} />
      <DeckAndVideo data={photosetDeck3} />
      <FadeToFlash data={photosetFlash} />
      <End data={photosetEnd} />
    </>
  )
}

export default App
