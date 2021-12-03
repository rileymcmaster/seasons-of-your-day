import React from 'react'
import styled from 'styled-components'
import GlobalStyles from './GlobalStyles'
import { connect } from 'react-redux'

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

const mapStateToProps = ({ showSections }) => ({
  showSections
})

const App = ({ showSections }) => {
  const { mainContent } = showSections
  return (
    <>
      <GlobalStyles />
      <ControlBar />
      <Wrapper>
        <Title data={photosetTitle} />
        <SpacerDiv />
        <Instructions data={instructions} />
        {mainContent && (
          <>
            <Deck data={photosetDeck1} />
            <FullBleed data={photosetFullbleed[0]} />
            <Deck data={photosetDeck2} />
            <FullBleed data={photosetFullbleed[1]} />
            <DeckAndVideo data={photosetDeck3} />
            <FullBleedGroup data={{ photos: photosetFullbleed, text: fullBleedText }} />
            <FadeToFlash data={photosetFlash} />
            <End data={{ photo: photosetEnd, text: endText }} />
          </>
        )}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div``

const SpacerDiv = styled.div`
  height: 20vh;
  height: var(--spacer-height);
`

export default connect(mapStateToProps)(App)
