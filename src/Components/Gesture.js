import React, { useRef } from 'react'
import styled from 'styled-components'

import { useSprings, animated, to as interpolate, useSpring } from 'react-spring'
import { useDrag, useGesture } from 'react-use-gesture'

import useDoubleClick from 'use-double-click'

const Gesture = () => {
  const theRef = useRef()

  useDoubleClick({
    onSingleClick: (e) => {
      console.log(e, 'singleclick')
    },
    onDoubleClick: (e) => {
      console.log(e, 'doubleclick')
    },
    ref: theRef,
    latency: 250
  })

  const [{ x }, api] = useSpring(() => ({ x: 0 }))
  const bind = useDrag(
    ({ active, elapsedTime, down, movement: [mx, my], tap, dragging, velocity, touches }) => {
      let isIt = false
      //   console.log('isit', isIt)
      if (down) {
        isIt = true

        // console.log('isIt 2', isIt)
      }
      if (active) {
        isIt = true
        // console.log('isIt3', isIt)
      }
      console.log('taps', tap)
      //   console.log('touches', touches)
      //   console.log('filtertaps', filterTaps)
      //   console.log('elapsedTime', elapsedTime)
      //   if (tap) alert('tap!')
      //   console.log('dragging', dragging)
      //   console.log('velocity', velocity)
      //   if (dragging && velocity < 0.01) {
      // console.log('slow')
      //   }
      api.start({ x: down ? mx : 0, y: down ? my : 0 })
    },
    { filterTaps: true }
  )

  return (
    <animated.div {...bind()} ref={theRef} style={{ x }}>
      <Square>hi</Square>
    </animated.div>
  )
}

const Square = styled.div`
  width: 200px;
  height: 200px;
  background-color: blue;
`
export default Gesture
