import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { animated } from 'react-spring'
import useWindowSize from 'Components/hooks/useWindowSize'

const CardEach = ({ bind, styles, imgSm, imgLg, note }) => {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isBackside, setIsBackside] = useState(false)

  const isDesktop = useWindowSize().width >= 768

  const size = {
    fullscreen: isFullscreen,
    backside: isBackside,
    imageLoaded
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
      <img src={imgSm} className="img-small" />
      {isDesktop && isFullscreen && <img src={imgLg} className="img-large" onLoad={handleLoad} />}
      {note && <img className="note" src={note} style={{ filter: 'blur(0px) contrast(0.8) brightness(1)' }} />}
    </EachCard>
  )
}

const fadeIn = keyframes`
0% {opacity: 0}
  100% {opacity: 1}
  `

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
  touch-action: pan-x;
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
    filter: ${(props) => (props.size.backside ? 'blur(2px) contrast(.5) brightness(1.2)' : 'blur(0px) contrast(1) brightness(1)')};
    transition: opacity 0.2s;
    box-shadow: 0 0 1px rgba(255, 255, 255, 0);
    will-change: transform;
  }
  img.img-small {
    animation-name: ${fadeIn};
    animation-duration: 5s;
    z-index: 1;
    opacity: ${({ size: { backside } }) => (backside ? 0.1 : 1)};
  }
  img.img-large {
    z-index: 2;
    opacity: ${({ size: { imageLoaded, backside } }) => (imageLoaded && !backside ? 1 : imageLoaded && backside ? 0.1 : 0)};
  }
  img.note {
    z-index: 3;
    opacity: ${(props) => (props.size.backside ? 1 : 0)};
    transition: opacity 0s;
  }
`

export default CardEach
