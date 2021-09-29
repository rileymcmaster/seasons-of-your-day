import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { soloOverlay1 } from '../assets/index'

const Flash = () => {
  const [isInView, setIsInView] = useState(false)

  const [ref, inView] = useInView({
    threshold: 0
  })

  useEffect(() => {
    if (inView) {
      setIsInView(true)
    }
  }, [inView])
  return (
    <Wrapper inView={inView}>
      <FlashDiv isInView={isInView}></FlashDiv>
      <img src={soloOverlay1} className={isInView ? 'image-overlay' : undefined} />
      <div className="bottom" ref={ref}></div>
    </Wrapper>
  )
}
const FlashAnimation = keyframes`
0%{opacity: 0}
2%{opacity: 1}
100%{opacity: 0}
`

const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  background-color: black;
  position: relative;
  display: flex;

  div.bottom {
    position: absolute;
    bottom: 0;
  }

  img {
    opacity: 0;
    transition: opacity 5s, box-shadow 5s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0);
    width: 500px;
    max-width: 90vw;
  }
  img.image-overlay {
    opacity: 1;
    width: 500px;
    max-width: 90vw;
    margin: auto;
    mix-blend-mode: difference;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 100px rgba(255, 255, 255, 0.5);
  }
`

const FlashDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  background-color: white;
  opacity: 0;
  animation: ${({ isInView }) =>
    isInView
      ? css`
          ${FlashAnimation} 10s ease-out forwards
        `
      : undefined};
  width: 100%;
  height: 100%;
`

export default Flash
