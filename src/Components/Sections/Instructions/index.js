import React, { useEffect } from 'react'
import styled from 'styled-components'
import PlayBtn from '../ControlBar/PlayBtn'
import { useInView } from 'react-intersection-observer'
import Fade from 'react-reveal/Fade'

const Instructions = ({ data, handleShowControlBar }) => {
  const text = data

  const [ref, inView] = useInView({
    threshold: 0
  })

  useEffect(() => {
    if (inView) {
      handleShowControlBar()
    }
  }, [inView])

  const buttonStyles = {
    opacity: 1,
    transition: 'all 1s'
  }

  return (
    <Wrapper>
      {text.map((step, index) => {
        return (
          <Fade bottom key={index}>
            <p>{step}</p>
          </Fade>
        )
      })}
      <PlayBtn size={'5rem'} styles={buttonStyles} />
      <div className="bottom" ref={ref}></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 150vh;
  height: var(--instruction-page-height);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  padding: 0 2rem;
  text-align: center;

  div.bottom {
    background: blue;
    height: 10px;
    position: absolute;
    bottom: 0;
  }
`
export default Instructions
