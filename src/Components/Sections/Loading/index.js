import React from 'react'
import styled from 'styled-components'

const Loading = () => {
  const NUM_OF_ROWS = 3

  let arr = Array.from('x'.repeat(NUM_OF_ROWS))

  return (
    <Wrapper>
      {arr.map((el, index) => {
        const delay = Math.round((Math.random() * 5000 * (index + 2)) / 2 + 1000)
        console.log('delay', delay)
        return <Dot offset={index} delay={delay} key={Math.random() * 10000} className="dot-fire"></Dot>
      })}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 80px;
  gap: 1rem;
  overflow: hidden;
`
const Dot = styled.div`
  position: relative;
  left: -9999px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #000000;
  color: #000000;
  box-shadow: 9999px 22.5px 0 -5px #000000;
  /* animation: dotFire 1.5s infinite linear; */
  animation: dotFire infinite linear;
  animation-duration: ${(props) => props.delay + 'ms'};
  /* animation-delay: ${(props) => props.delay * Math.round(Math.random() * 2) + 's'}; */
  animation-delay: -0.85s;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #000000;
    color: #000000;
  }

  &::before {
    box-shadow: 9999px 22.5px 0 -5px #000000;
    /* animation: dotFire 1.5s infinite linear; */
    animation: dotFire infinite linear;
    animation-duration: ${(props) => props.delay + 'ms'};
    animation-delay: -1.85s;
  }

  &::after {
    box-shadow: 9999px 22.5px 0 -5px #000000;
    /* animation: dotFire 1.5s infinite linear; */
    animation: dotFire infinite linear;
    animation-duration: ${(props) => props.delay + 'ms'};
    animation-delay: -2.85s;
  }

  @keyframes dotFire {
    1% {
      box-shadow: 9999px 22.5px 0 -5px #000000;
    }
    50% {
      box-shadow: 9999px -5.625px 0 2px #000000;
    }
    100% {
      box-shadow: 9999px -22.5px 0 -5px #000000;
    }
  }
`
export default Loading
