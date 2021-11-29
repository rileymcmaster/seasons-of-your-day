import React, { useState, Suspense } from 'react'
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

const MainContent = () => {
  const [musicPlaying, setMusicPlaying] = useState(false)
  const [showControlBar, setShowControlBar] = useState(false)

  const { endSection } = useSelector((state) => state.showSections)

  const handleMusicPlaying = () => {
    setMusicPlaying(!musicPlaying)
  }

  return (
    <>
      <Deck data={photosetDeck1} />
      <FullBleed data={photosetFullbleed[0]} />
      <Deck data={photosetDeck2} />
      <FullBleed data={photosetFullbleed[1]} />
      <DeckAndVideo data={photosetDeck3} musicPlaying={musicPlaying} handleMusicPlaying={handleMusicPlaying} />
      <FullBleedGroup data={{ photos: photosetFullbleed, text: fullBleedText }} />
      <FadeToFlash data={photosetFlash} />
      {/* todo - move the conditional rendering into End/> */}
      {endSection && <End data={{ photo: photosetEnd, text: endText }} />}
      <ControlBar showControlBar={showControlBar} />
    </>
  )
}

const Wrapper = styled.div``

const SpacerDiv = styled.div`
  height: 20vh;
  height: var(--spacer-height);
`

export default MainContent
