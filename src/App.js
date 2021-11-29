import React, { useState } from 'react'
import styled from 'styled-components'
import GlobalStyles from './GlobalStyles'

import { useSelector } from 'react-redux'

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
import MainContent from './MainContent'
// import MainContent from './Components/MainContent'

// const OtherComponent = React.lazy(() => import('./MainContent'))

const App = () => {
  const [musicPlaying, setMusicPlaying] = useState(false)
  const [showControlBar, setShowControlBar] = useState(false)
  const [showLastPart, setShowLastPart] = useState(false)

  const { endSection } = useSelector((state) => state.showSections)

  const handleMusicPlaying = () => {
    setMusicPlaying(!musicPlaying)
  }

  const handleShowControlBar = () => {
    setShowControlBar(true)
  }

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Title data={photosetTitle} />
        <SpacerDiv />
        <Instructions data={instructions} handleShowControlBar={handleShowControlBar} />
        {/* <OtherComponent /> */}
        <MainContent />
        {/* <Deck data={photosetDeck1} />
        <FullBleed data={photosetFullbleed[0]} />
        <Deck data={photosetDeck2} />
        <FullBleed data={photosetFullbleed[1]} />
        <DeckAndVideo data={photosetDeck3} musicPlaying={musicPlaying} handleMusicPlaying={handleMusicPlaying} />
        <FullBleedGroup data={{ photos: photosetFullbleed, text: fullBleedText }} />
        <FadeToFlash data={photosetFlash} />
        {endSection && <End data={{ photo: photosetEnd, text: endText }} />} */}
      </Wrapper>
      <ControlBar showControlBar={showControlBar} />
    </>
  )
}

const Wrapper = styled.div``

const SpacerDiv = styled.div`
  height: 20vh;
  height: var(--spacer-height);
`

export default App
