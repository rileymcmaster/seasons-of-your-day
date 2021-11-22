import React, { useEffect, useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { useInView } from 'react-intersection-observer'
import useScrollBlock from '../hooks/useScrollBlock'
import ImageLoader from './utils/ImageLoader'

const Flash = ({ data }) => {
  const [isInView, setIsInView] = useState(false)
  const [blockScroll, allowScroll] = useScrollBlock()

  const { imagesSmall, imagesLarge } = data

  const imgSmall = imagesSmall[0]
  const imgLarge = imagesLarge[0]

  const [ref, inView] = useInView({
    threshold: 0
  })

  useEffect(() => {
    if (inView) {
      setIsInView(true)
    }
  }, [inView])

  useEffect(() => {
    if (isInView) {
      // stop the user's ability to scroll while the image appears
      // TODO - comment this back in :)
      // blockScroll()
      setTimeout(() => {
        allowScroll()
      }, 8000)
    }
  }, [isInView])

  const styles = {}

  return (
    <Wrapper inView={inView}>
      <FlashDiv isInView={isInView}></FlashDiv>
      <ImageContainer className={isInView ? 'image-overlay' : undefined}>
        <ImageLoader imgSmall={imgSmall} imgLarge={imgLarge} styles={styles} />
      </ImageContainer>
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
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 500px;
  height: 500px;
  max-width: 90vw;
  max-height: 90vw;
  margin: auto;

  opacity: 0;
  transition: opacity 5s, box-shadow 5s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0);

  &.image-overlay {
    opacity: 1;
    mix-blend-mode: difference;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 100px rgba(255, 255, 255, 0.5);
  }
`

const FlashDiv = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;

  opacity: 0;
  background-color: white;
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
