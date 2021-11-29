import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import PlayBtn from './PlayBtn'

import { playlistSrc } from 'assets'

const mapStateToProps = ({ music }) => ({
  music
})

const ControlBar = ({ showControlBar, music }) => {
  const audioRef = useRef(null)
  const musicPlaying = music.isMusicPlaying

  useEffect(() => {
    if (audioRef.current) {
      musicPlaying ? audioRef.current.play() : audioRef.current.pause()
    }
  }, [musicPlaying])

  return (
    <Wrapper className={showControlBar ? 'show' : 'hide'}>
      <audio ref={audioRef} src={playlistSrc} style={{ display: 'none' }} />
      <PlayBtn size={'3rem'} />
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

export default connect(mapStateToProps)(ControlBar)
