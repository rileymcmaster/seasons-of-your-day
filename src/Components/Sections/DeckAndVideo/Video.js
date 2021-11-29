import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { connect, useDispatch, useSelector } from 'react-redux'
import { playMusic } from '../../../actions/isMusicPlaying'

import { AiFillPlayCircle } from 'react-icons/ai'
import { loopVideo } from '../../../assets/index'

const videoSrc = 'https://res.cloudinary.com/bodyofwater/video/upload/v1638149442/Seasons/assets/video/loopVideo_pzpuwu.mp4'

const mapStateToProps = (state) => {
  return {
    isMusicPlaying: state.music.isMusicPlaying
  }
}

const Video = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const [muted, setMuted] = useState(false)
  const [fullscreenVideo, setFullScreenVideo] = useState(false)

  const videoRef = useRef(null)

  const dispatch = useDispatch()
  let musicPlaying = useSelector((state) => state.music.isMusicPlaying)

  const handleMute = () => {
    if (musicPlaying) {
      dispatch(playMusic())
    }
    setFullScreenVideo(false)
    setMuted(true)
    window.removeEventListener('scroll', handleMute)
  }

  const handlePlay = () => {
    if (musicPlaying) {
      dispatch(playMusic())
    }
    setPlayVideo(true)
    setFullScreenVideo(true)
    let currentVideo = document.querySelector('video')
    currentVideo.play()
    window.addEventListener('scroll', handleMute)
  }

  return (
    <Wrapper ref={videoRef}>
      <video className={fullscreenVideo ? 'fullscreen' : undefined} preload="auto" playsInline loop={true} muted={muted}>
        {/* <source src={`${loopVideo}#t=0.5`} type="video/mp4" /> */}
        <source src={`${videoSrc}#t=0.5`} type="video/mp4" />
      </video>
      {!playVideo && (
        <Icon onClick={handlePlay}>
          <AiFillPlayCircle className="icon" />
        </Icon>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 90%;
  video,
  img {
    position: absolute;
    z-index: 0;
    width: 50vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: width 3s ease-out;
  }
  @media (min-width: 768px) {
    video {
      width: 250px;
      transition: width 1s ease-out;
    }
  }
  video.fullscreen {
    transition: width 1s ease-in;
    width: 100%;
  }
`

const Icon = styled.span`
  display: inline;
  position: absolute;
  color: transparent;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  opacity: 1;

  .icon {
    color: var(--bg-colour);
    opacity: 0.8;
    font-size: 3rem;
  }
`

export default connect(mapStateToProps)(Video)
