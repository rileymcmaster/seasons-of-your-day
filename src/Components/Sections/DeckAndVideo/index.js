import React from 'react'
import styled from 'styled-components'

import Deck from '../Deck/index'
import Video from './Video'

const DeckAndVideo = ({ data, musicPlaying, handleMusicPlaying }) => {
  return (
    <Wrapper>
      <Deck data={data} />
      <Video musicPlaying={musicPlaying} handleMusicPlaying={handleMusicPlaying} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

export default DeckAndVideo
