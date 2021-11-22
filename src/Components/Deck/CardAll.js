import React, { useState } from 'react'
import styled from 'styled-components'
import CardEach from './CardEach'

import { useSprings, animated, to as interpolate } from 'react-spring'
import { useDrag } from 'react-use-gesture'

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 10 })
const from = (i) => ({ x: 0, rot: 0, scale: 2, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1000px) rotateX(00deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

const CardAll = ({ cardsSmall, cardsLarge }) => {
  const [deckCleared, setDeckCleared] = useState(false)
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cardsSmall.length, (i) => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above

  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.4 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right

    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out

    set((i) => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = mx / 10 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return { x, rot, scale, delay: undefined, config: { friction: 80, tension: down ? 800 : isGone ? 200 : 500 } }
    })

    if (gone.size === cardsSmall.length) {
      gone.clear()
      setTimeout(() => {
        setDeckCleared(true)
      }, 500)
    }
  })

  return (
    <Wrapper className={deckCleared ? 'cleared' : undefined}>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className="card-container" key={i} style={{ x, y }}>
          <CardEach
            styles={{ transform: interpolate([rot, scale], trans), touchAction: 'pan-y' }}
            bind={bind(i)}
            imgSm={cardsSmall[i]}
            imgLg={cardsLarge[i]}
          />
        </animated.div>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  z-index: 100;

  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  &.card-container {
    position: absolute;
    z-index: 9;
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &.cleared {
    z-index: -1;
  }

  div.card-container {
    position: absolute;
    /* overflow: hidden; */
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: center;
    touch-action: none;
  }
`

export default CardAll
