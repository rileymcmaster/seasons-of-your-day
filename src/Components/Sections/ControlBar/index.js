import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import Playlist from 'assets/Seasons playlist compressed.mp3'

import PlayBtn from './PlayBtn'

const PlaylistSrc =
  'https://res.cloudinary.com/bodyofwater/video/upload/v1638149120/Seasons/assets/audio/Seasons_playlist_compressed_s1hcwi.mp3'

const ControlBar = ({ showControlBar }) => {
  const [audio] = useState(new Audio(PlaylistSrc))

  const musicPlaying = useSelector((state) => state.music.isMusicPlaying)

  useEffect(() => {
    musicPlaying ? audio.play() : audio.pause()
  }, [musicPlaying])

  return (
    <Wrapper className={showControlBar ? 'show' : 'hide'}>
      <PlayBtn size={'3rem'} musicPlaying={musicPlaying} />
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
const ButtonWrapper = styled.button`
  outline: none;
  border: none;
  z-index: 999999;
  position: relative;
  top: 0;
  left: 0;
`

export default ControlBar
