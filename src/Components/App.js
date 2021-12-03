import React from 'react'
import styled from 'styled-components'
import GlobalStyles from '../GlobalStyles'
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
} from '../assets/index'
import Title from './Sections/TitlePage'
import Deck from './Sections/Deck'
import DeckAndVideo from './Sections/DeckAndVideo'
import FadeToFlash from './Sections/FadeToFlash'
import FullBleed from './Sections/FullBleed'
import End from './Sections/End'
import Instructions from './Sections/Instructions'
import ControlBar from './Sections/ControlBar'
import FullBleedGroup from './Sections/FullBleedGroup'

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
