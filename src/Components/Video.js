import React, { useState } from 'react'
import styled from 'styled-components'
import { AiFillPlayCircle } from 'react-icons/ai'
import { BiVolumeMute, BiVolumeFull } from 'react-icons/bi'
import { loopVideo } from '../assets/index'

const Video = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const [fullscreenVideo, setFullScreenVideo] = useState(false)
  const [muteVideo, setMuteVideo] = useState(false)

  const handlePlay = () => {
    setPlayVideo(true)
    setFullScreenVideo(true)
    let currentVideo = document.querySelector('video')
    currentVideo.play()
    document.addEventListener('scroll', handleMute)
  }

  const handleMute = () => {
    setFullScreenVideo(false)
    setMuteVideo(true)
    let currentVideo = document.querySelector('video')
    currentVideo.muted = true
    document.removeEventListener('scroll', handleMute)
  }

  return (
    <Wrapper>
      <video className={fullscreenVideo ? 'fullscreen' : undefined} preload="auto" playsInline loop={true}>
        {/* <source src="https://res.cloudinary.com/bodyofwater/video/upload/v1631542854/Brad/Card1/Loopity_loop_dpe0rt.mp4" type="video/mp4" /> */}
        <source src={loopVideo} type="video/mp4" />
      </video>
      {!playVideo && (
        <Icon onClick={handlePlay}>
          <AiFillPlayCircle size={50} color={'blue'} />
        </Icon>
      )}
      {muteVideo && (
        <Icon className="mute">
          <BiVolumeMute size={50} color={'blue'} />
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
    width: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: width 1s ease-in;
  }
  video.fullscreen {
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
  &.mute {
    /* position: relative; */
    top: 80%;
    /* top: 80%; */
  }
`

export default Video
