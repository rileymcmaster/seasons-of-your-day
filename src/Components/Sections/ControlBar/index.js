import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Playlist from '../../../assets/Seasons playlist compressed.mp3'

import PlayBtn from './PlayBtn'

const ControlBar = ({ musicPlaying, handleMusicPlaying, showControlBar }) => {
  const [audio] = useState(new Audio(Playlist))

  useEffect(() => {
    musicPlaying ? audio.play() : audio.pause()
  }, [musicPlaying])

  return (
    <Wrapper className={showControlBar ? 'show' : 'hide'}>
      <PlayBtn size={'3rem'} musicPlaying={musicPlaying} handleMusicPlaying={handleMusicPlaying} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99999;
  margin: 1rem;
  transform: translateY(4rem);
  transition: transform 0.5s ease 2s;
  will-change: transform;

  &.show {
    transform: translateY(0rem);
  }
`

export default ControlBar
