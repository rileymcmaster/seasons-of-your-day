import React from 'react'

import styled from 'styled-components'
import './styles.css'
import Deck from './Components/Deck/'
import Video from './Components/Video'
import { photosetTitle, photosetDeck1, photosetDeck2, photosetDeck3, photosetFullbleed, photosetFlash, photosetEnd } from './assets/index'
import { BiChevronsDown } from 'react-icons/bi'
import LongFade from './Components/LongFade'
import GlobalStyles from './GlobalStyles'
import Flash from './Components/Flash'
import Title from './Components/Title'
import DeckAndVideo from './Components/DeckAndVideo'
import FadeToFlash from './Components/FadeToFlash'
import FullBleed from './Components/FullBleed'
import End from './Components/End'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <FullBleed data={photosetFullbleed[0]} />
      <Title data={photosetTitle} />

      <Deck data={photosetDeck1} />
      <Deck data={photosetDeck2} />
      <DeckAndVideo data={photosetDeck3} />
      <FadeToFlash data={photosetFlash} />
      <End data={photosetEnd} />
    </>
  )
}

export default App
