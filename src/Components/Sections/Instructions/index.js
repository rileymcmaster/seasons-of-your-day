import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, connect } from 'react-redux'
import { useInView } from 'react-intersection-observer'
import { showControlBar, showMainContent } from 'actions/showSections'

import PlayBtn from '../ControlBar/PlayBtn'
import Fade from 'react-reveal/Fade'

const mapStateToProps = ({ showSections }) => ({
  showSections
})

const Instructions = ({ data }) => {
  const text = data

  const dispatch = useDispatch()

  const [mainContentRef, mainInView] = useInView({
    threshold: 0
  })
  const [controlbarRef, controlbarInView] = useInView({
    threshold: 0
  })

  useEffect(() => {
    if (controlbarInView) {
      dispatch(showControlBar())
    }
  }, [controlbarInView])

  useEffect(() => {
    if (mainInView) {
      dispatch(showMainContent())
    }
  }, [mainInView])
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
      <div className="middle" ref={mainContentRef}></div>
      <div className="bottom" ref={controlbarRef}></div>
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

  div.middle {
    position: absolute;
    top: 20%;
    left: 0;
    height: 50px;
    width: 50px;
    background: blue;
    z-index: 99999;
  }
  div.bottom {
    position: absolute;
    bottom: 0;
  }
`
export default connect(mapStateToProps)(Instructions)
