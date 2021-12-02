import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import PlayBtn from './PlayBtn'

import { playlistSrc, playlistTimestamps } from 'assets'
import { incTrack } from 'actions/isMusicPlaying'

const mapStateToProps = ({ music, showSections }) => ({
  music,
  showSections
})

const mapDispatchToProps = (dispatch) => ({
  incTrackAction: (track) => dispatch(incTrack(track))
})

const ControlBar = ({ music, showSections, incTrackAction }) => {
  const [audio] = useState(new Audio(playlistSrc))

  let { isMusicPlaying: musicPlaying, trackNum } = music

  const { controlBar: showControlBar } = showSections

  useEffect(() => {
    if (trackNum) {
      audio.currentTime = playlistTimestamps[trackNum]
    }
  }, [])

  useEffect(() => {
    musicPlaying ? audio.play() : audio.pause()
  }, [musicPlaying])

  useEffect(() => {
    if (!musicPlaying) {
      return
    }
    const updateAudioProgress = setInterval(() => {
      if (audio.currentTime >= playlistTimestamps[trackNum + 1]) {
        incTrackAction(trackNum + 1)
        clearInterval(updateAudioProgress)
      }
      if (audio.currentTime >= audio.duration) {
        incTrackAction(1)
        audio.currentTime = 0
        audio.play()
        clearInterval(updateAudioProgress)
      }
    }, 10000)
  }, [musicPlaying, trackNum])

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

export default connect(mapStateToProps, mapDispatchToProps)(ControlBar)
