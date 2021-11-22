import React, { useState } from 'react'
import styled from 'styled-components'
import { animated } from 'react-spring'

const CardEach = ({ bind, styles, imgSm, imgLg }) => {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isBackside, setIsBackside] = useState(false)

  const size = {
    fullscreen: isFullscreen,
    backside: isBackside
  }

  const handleClick = () => {
    if (!isFullscreen) {
      setIsFullscreen(true)
    }
    if (isFullscreen && !isBackside) {
      setIsBackside(true)
    }
    if (isFullscreen && isBackside) {
      setIsFullscreen(false)
      setIsBackside(false)
      setImageLoaded(false)
    }
    return
  }

  const handleLoad = () => {
    setImageLoaded(true)
  }

  const binder = isFullscreen ? null : bind

  return (
    <EachCard
      onDoubleClick={handleClick}
      {...binder}
      style={styles}
      className={`${isFullscreen ? 'fullscreen' : undefined} ${isBackside ? 'show-back' : 'show-front'}`}
      size={size}>
      <img src={imgSm} style={{ opacity: imageLoaded ? 0 : 1 }} />
      {isFullscreen && (
        <img src={imgLg} onLoad={handleLoad} style={{ opacity: isFullscreen && !isBackside ? 1 : isFullscreen && isBackside ? 0.1 : 0 }} />
      )}
    </EachCard>
  )
}

const EachCard = styled(animated.div)`
  background-color: white;
  background-size: auto 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  max-width: 500px;
  height: 50vw;
  max-height: 500px;
  will-change: transform;
  border-radius: 10px;
  box-shadow: 0 12.5px 50px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);
  /* touch-action: pan-x; */
  transition: opacity 0.5s;

  &.fullscreen {
    width: 90vw;
    max-width: 800px;
    height: 90vw;
    max-height: 800px;
    transition: width 0.5s, height 0.5s;
  }

  img {
    width: 90%;
    user-select: none;
    pointer-events: none;
    position: absolute;
    filter: ${(props) => (props.size.backside ? 'blur(2px)' : 'blur(0px)')};
    transition: opacity 0.5s;
    box-shadow: 0 0 1px rgba(255, 255, 255, 0);
    will-change: transform;
  }
  &.show-back {
    transition: transform 1s;
    transform: scaleX(-1);
  }
  &.show-front {
    transform: scaleX(1);
  }
`

export default CardEach
