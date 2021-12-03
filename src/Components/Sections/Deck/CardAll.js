import React, { useState } from 'react'
import styled from 'styled-components'
import CardEach from './CardEach'

import { useSprings, animated, to as interpolate } from 'react-spring'
import { useDrag } from 'react-use-gesture'

// the card functionality was built off of a project by David Bismut
// https://codesandbox.io/s/cards-utgqg?from-embed

const to = (i) => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 10 })
const from = (i) => ({ x: 0, rot: 0, scale: 2, y: -1000 })
const trans = (r, s) => `perspective(1000px) rotateX(00deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

const CardAll = ({ cardsSmall, cardsLarge, notes }) => {
  const [deckCleared, setDeckCleared] = useState(false)
  const [gone] = useState(() => new Set())
  const [props, set] = useSprings(cardsSmall.length, (i) => ({ ...to(i), from: from(i) }))

  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 1.4
    const dir = xDir < 0 ? -1 : 1

    if (!down && trigger) gone.add(index)

    set((i) => {
      if (index !== i) return
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0
      const rot = mx / 10 + (isGone ? dir * 10 * velocity : 0)
      const scale = down ? 1.1 : 1
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
            note={notes?.[i]}
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

  &.cleared {
    z-index: -1;
  }

  div.card-container {
    position: absolute;
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: center;

    touch-action: none;
  }
`

export default CardAll
