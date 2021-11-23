import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Deck from '../Deck/index'
import { ReactComponent as TitleSVG } from '../../../assets/titletext.svg'
import useScrollBlock from '../../../hooks/useScrollBlock'

const Title = ({ data }) => {
  const [showCard, setShowCard] = useState(false)
  const [blockScroll, allowScroll] = useScrollBlock()

  useEffect(() => {
    blockScroll()
    setTimeout(() => {
      setShowCard(true)
      allowScroll()
    }, 1000)
  }, [])

  return (
    <Wrapper>
      {showCard && <Deck data={data} />}
      <TitleSVG fill="var(--primary-colour)" />
      <Instructions className={showCard ? 'show-text' : undefined}>
        <p className="first">Swipe a picture to discover what’s underneath</p>
        <p className="second">Double tap it to view it large</p>
      </Instructions>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  height: var(--full-height);
  margin-top: -5rem;

  @media (min-width: 768px) {
    & {
      margin-top: 0rem;
    }
  }
  svg {
    position: absolute;
    text-align: center;
    width: 70vw;
    max-width: 100%;
    max-width: var(--max-content-width);
  }
`

const Instructions = styled.div`
  position: absolute;
  bottom: 0;
  /* margin-bottom: 2rem; */
  max-width: var(--max-content-width);
  text-align: center;

  p {
    opacity: 0;
    transition: opacity 3s;
  }
  p.first {
    transition-delay: 500ms;
  }
  p.second {
    transition-delay: 1500ms;
  }

  &.show-text p {
    opacity: 1;
  }

  p ~ p {
    margin-top: 2rem;
  }
`
export default Title
