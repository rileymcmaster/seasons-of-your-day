import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { AiFillPlayCircle } from 'react-icons/ai'
import { loopVideo } from '../../../assets/index'

const Video = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const [fullscreenVideo, setFullScreenVideo] = useState(false)
  const [muteVideo, setMuteVideo] = useState(false)
  const scrollValue = useRef(0)
  const videoRef = useRef(null)

  const handlePlay = () => {
    setPlayVideo(true)
    setFullScreenVideo(true)
    let currentVideo = document.querySelector('video')
    currentVideo.play()
    document.addEventListener('scroll', handleMute)
  }

  //   useEffect(()=> {
  // if (fullscreenVideo) {
  //   window.addEventListener('scroll')
  // }
  //   }, [fullscreenVideo])

  const handleMute = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = winScroll / height
    console.log('scrolled', scrolled)
    setFullScreenVideo(false)
    setMuteVideo(true)
    let currentVideo = document.querySelector('video')
    currentVideo.muted = true
    // document.removeEventListener('scroll', handleMute)
  }

  return (
    <Wrapper ref={videoRef}>
      <video className={fullscreenVideo ? 'fullscreen' : undefined} preload="auto" playsInline loop={true}>
        <source src={`${loopVideo}#t=0.5`} type="video/mp4" />
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
  video {
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
    /* color: var(--bg-colour); */
    color: orange;
    font-size: 3rem;
  }
`

export default Video
