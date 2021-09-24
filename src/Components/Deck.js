import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

import { useSprings, animated, to as interpolate } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import cards from '../assets/index'

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 10 })
const from = (i) => ({ x: 0, rot: 0, scale: 2, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(10000px) rotateX(30deg) rotateY(${r / 1000}deg) rotateZ(${r}deg) scale(${s})`

function Deck() {
  const [deckCleared, setDeckCleared] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [cardFullscreen, setCardFullscreen] = useState({ index: -1, side: 'front' })
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, (i) => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
  console.log('cardFull', cardFullscreen)

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
      const side = cardFullscreen.index === 1 && cardFullscreen.side
      // const size = down ? '100vw' : '50vw'
      return { x, rot, scale, delay: undefined, config: { friction: 80, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (gone.size === cards.length) {
      setDeckCleared(true)
    }
    if (!down && gone.size === cards.length + 1) setTimeout(() => gone.clear() || set((i) => to(i)), 600)
  })

  const handleFullscreen = (i) => {
    const { index, side } = cardFullscreen
    console.log('cardFullscreen', cardFullscreen)
    // if !index and !side then give it index and side front
    if (index < 1) {
      setIsFullscreen(true)
      setCardFullscreen({ index: i, side: 'front' })
      return
    }
    // if index then side = front
    if (side === 'front') {
      setCardFullscreen({ ...cardFullscreen, side: 'back' })
      return
    }
    if (side === 'back') {
      setCardFullscreen({ index: -1, side: 'front' })
      setIsFullscreen(false)
      return
    }
    // if index and side already = front then side = back
    // if side = back then isFullscreen false
  }

  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <Wrapper className={deckCleared ? 'cleared' : undefined}>
      {props.map(({ x, y, rot, scale, size }, i) => (
        <animated.div
          className="card-container"
          key={i}
          style={{ x, y }}
          onDoubleClick={(e) => {
            e.preventDefault()
            handleFullscreen(i)
          }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <EachCard
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i]})`,
              touchAction: 'pan-y'
            }}
          />
        </animated.div>
      ))}
      {isFullscreen && (
        <ImageFullscreen
          onDoubleClick={() => handleFullscreen(cardFullscreen.index)}
          className={cardFullscreen.side === 'back' ? 'show-back' : undefined}>
          <div>
            <img
              src={cards[cardFullscreen.index]}
              alt="pretty picture"
              className={cardFullscreen.side === 'back' ? 'show-back' : undefined}
            />
          </div>
        </ImageFullscreen>
      )}
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
    /* overflow-x: hidden; */
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
    z-index: 9;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  div.card-container > div.card-each {
    background-color: white;
    background-size: auto 85%;
    background-repeat: no-repeat;
    background-position: center center;
    /* width: 100vw; */
    /* max-width: 200px; */
    /* width: ${(props) => (props.isDoubleClicked ? '100vw' : '50vw')}; */
    /* max-width: ${(props) => (props.isDoubleClicked ? '100vw' : '85vw')}; */
    /* height: 100vw; */
    /* max-height: 200px; */
    will-change: transform;
    border-radius: 10px;
    /* transform: scale(0.5); */
    /* overflow: hidden; */
    box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);
  }
  @media only screen and (min-width: 768px) {
    div.card-container > div.card-each {
      /* width: 85vw; */
      /* height: 85vw; */
      /* max-width: 500px; */
      /* max-height: 500px; */
    }
  }
`

const EachCard = styled(animated.div)`
  cursor: pointer;

  background-color: white;
  background-size: auto 95%;
  background-repeat: no-repeat;
  background-position: center center;
  width: 85vw;
  max-width: 200px;
  height: 85vw;
  max-height: 200px;
  /* transition: all 1s; */
  will-change: transform;
  border-radius: 10px;
  box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);
`

const ImageFullscreen = styled.div`
  box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90vw;
  height: 90vw;
  max-height: 100vh;
  background-color: white;
  z-index: 999999;
  border-radius: 10px;
  box-sizing: border-box;
  transition: transform 1s;
  img {
    box-sizing: border-box;
    width: 90%;
    margin: 5%;
    max-height: 95%;
    /* height: 300px; */
    transition: opacity 0.2s;
    transition-delay: 0.2s;
    /* transition: transform 1s ease, opacity 1s cubic-bezier(0.53, 0.02, 0.16, 0.96); */
    /* transition-delay: 1s; */
  }
  &.show-back {
    transform: scaleX(-1);
  }
  img.show-back {
    opacity: 0.1;
    filter: blur(2px);
  }
  div > img {
    overflow: hidden;
  }
`

export default Deck
