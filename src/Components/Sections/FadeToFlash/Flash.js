import React, { useEffect, useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { connect } from 'react-redux'
import { showEndSection } from '../../actions/showSections'
import { useInView } from 'react-intersection-observer'
import useScrollBlock from '../../hooks/useScrollBlock'
import ImageLoader from '../../utils/ImageLoader'

import { AiOutlineDown } from 'react-icons/ai'

const mapStateToProps = ({ showSections }) => ({
  showSections
})

const mapDispatchToProps = (dispatch) => ({
  showEndSectionAction: () => dispatch(showEndSection())
})

const Flash = ({ data, showSections, showEndSectionAction }) => {
  const [isInView, setIsInView] = useState(false)
  const [blockScroll, allowScroll] = useScrollBlock()

  const [flashRef, inView] = useInView({
    threshold: 0
  })

  let { endSection } = showSections

  const { imagesSmall, imagesLarge } = data
  const imgSmall = imagesSmall[0]
  const imgLarge = imagesLarge[0]

  useEffect(() => {
    if (inView) {
      if (!isInView) {
        setIsInView(true)
        blockScroll()
        setTimeout(() => {
          allowScroll()
          showEndSectionAction()
        }, 8000)
      }
    }
  }, [inView])

  const styles = {
    top: '50%',
    transform: 'translateY(-50%)'
  }

  return (
    <Wrapper className="scroll-snap" inView={inView}>
      <FlashDiv isInView={isInView}></FlashDiv>
      <ImageContainer className={isInView ? 'image-overlay' : undefined}>
        <ImageLoader imgSmall={imgSmall} imgLarge={imgLarge} styles={styles} />
      </ImageContainer>
      {endSection && (
        <Icon>
          <AiOutlineDown />
        </Icon>
      )}
      <div className="bottom" ref={flashRef}></div>
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
  height: var(--deck-page-height);

  @media (min-width: 768px) {
    & {
      height: 100vh;
    }
  }

  overflow: hidden;
  background-color: black;
  position: relative;
  display: flex;

  div.bottom {
    position: absolute;
    bottom: 0;
    visibility: none;
    height: 1vh;
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
const fadeIn = keyframes`
0% {
  opacity: 0%
}
45% {
  opacity: 80%
}
55% {
  opacity: 80%
}
100% {
  opacity: 0%
}
`

const Icon = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  opacity: 0;
  transform: translate(0, -50%);
  svg {
    color: white;
    font-size: 2rem;
    filter: drop-shadow(2px -2px 5px rgba(255, 255, 255, 0.6)) drop-shadow(-2px -2px 5px rgba(255, 255, 255, 0.6))
      drop-shadow(0px 8px 10px rgba(255, 255, 255, 0.4));
  }
  animation: ${fadeIn} 4s infinite;
  animation-delay: 2s;
`

export default connect(mapStateToProps, mapDispatchToProps)(Flash)
