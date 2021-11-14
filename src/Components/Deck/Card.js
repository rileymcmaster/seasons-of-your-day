import React, { useState } from 'react'
import styled from 'styled-components'
import { useSprings, animated, to as interpolate, useTransition } from 'react-spring'

const Card = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)
  return
}

const EachCard = styled(animated.div)`
  background-color: white;
  background-size: auto 90%;
  background-repeat: no-repeat;
  background-position: center center;
  width: 50vw;
  max-width: 500px;
  height: 50vw;
  max-height: 500px;
  will-change: transform;
  border-radius: 10px;
  box-shadow: 0 12.5px 50px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);
`

export default Card
