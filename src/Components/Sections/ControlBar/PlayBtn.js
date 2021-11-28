import React from 'react'
import styled from 'styled-components'

import { connect, useDispatch, useSelector } from 'react-redux'
import { playMusic } from '../../../actions/isMusicPlaying'

import { BiPlay, BiPause } from 'react-icons/bi'

const PlayBtn = ({ size, styles }) => {
  const dispatch = useDispatch()
  const musicPlaying = useSelector((state) => state.music.isMusicPlaying)

  const handleClick = () => {
    dispatch(playMusic())
  }

  return (
    <Wrapper size={size} onClickCapture={handleClick} style={{ ...styles }}>
      {musicPlaying ? <BiPause className="icon" /> : <BiPlay className="icon  play" />}
    </Wrapper>
  )
}

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-colour);
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.5);
  opacity: 0.2;
  width: ${(props) => props.size};
  height: ${(props) => props.size};

  transition: opacity 5s ease-in;
  .icon {
    transition: all 0.2s;
    color: var(--primary-colour);
    font-size: ${(props) => props.size};
  }
  .play {
    margin-left: 0.3rem;
  }

  &:hover {
    transition: opacity 1s ease;
    opacity: 1;
    background: var(--primary-colour);
    border-color: rgba(0, 0, 0, 0.8);
  }
  &:hover .icon {
    color: var(--bg-colour);
  }
`
const mapStateToProps = (state) => {
  return {
    isMusicPlaying: state.music.isMusicPlaying
  }
}
export default connect(mapStateToProps)(PlayBtn)
