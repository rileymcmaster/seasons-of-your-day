import React from 'react'
import styled from 'styled-components'
import { MdPlayCircleFilled, MdPlayCircleOutline, MdPauseCircleFilled, MdPauseCircleOutline } from 'react-icons/md'

import { BiChevronsDown } from 'react-icons/bi'
import PlayBtn from './PlayBtn'

const ControlBar = ({ musicPlaying, handleMusicPlaying }) => {
  return (
    <Wrapper>
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
`

const Icon = styled.div`
  font-size: 2rem;
  /* position: -webkit-sticky; /* Safari */
  /* position: sticky; */
  /* bottom: 0;  */
`

export default ControlBar
