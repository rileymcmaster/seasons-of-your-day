import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import PlayBtn from './PlayBtn'

import { playlistSrc } from 'assets'

const mapStateToProps = ({ music, showSections }) => ({
  music,
  showSections
})

const ControlBar = ({ music, showSections }) => {
  const [audio] = useState(new Audio(playlistSrc))

  const musicPlaying = music.isMusicPlaying

  const showControlBar = showSections.controlbar

  useEffect(() => {
    musicPlaying ? audio.play() : audio.pause()
  }, [musicPlaying])

  return (
    <Wrapper className={showControlBar ? 'show' : 'hide'}>
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
