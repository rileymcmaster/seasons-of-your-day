import React, { useState } from 'react'
import styled from 'styled-components'

import { Transition } from 'react-transition-group'
import { useSprings, animated, to as interpolate, useTransition } from 'react-spring'
import { useDrag } from 'react-use-gesture'

import { FaTruckMonster } from 'react-icons/fa'

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 10 })
const from = (i) => ({ x: 0, rot: 0, scale: 2, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(10000px) rotateX(00deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

const Deck = ({ cardsSmall, cardsLarge }) => {
  const [deckCleared, setDeckCleared] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [cardFullscreen, setCardFullscreen] = useState({ index: -1, side: 'front' })
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cardsSmall.length, (i) => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above

  const transition = useTransition(isFullscreen, {
    from: { width: '50vw', height: '50vw' },
    enter: { width: '80vw', height: '80vw', opacity: 1 },
    leave: { opacity: 0, width: '50vw', height: '50vw' },
    config: isFullscreen
      ? {
          tension: 150,
          friction: 30
        }
      : {
          tension: 300,
          friction: 30
        }
  })

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
      const scale = isFullscreen ? 0 : down ? 1.1 : 1 // Active cards lift up a bit

      return { x, rot, scale, delay: undefined, config: { friction: 80, tension: down ? 800 : isGone ? 200 : 500 } }
    })

    if (gone.size === cardsSmall.length) {
      gone.clear()
      setTimeout(() => {
        setDeckCleared(true)
      }, 500)
    }
    // if (!down && gone.size === cardsSmall.length) setTimeout(() => gone.clear() || set((i) => to(i)), 6000)
  })

  const handleFullscreen = (i) => {
    const { index, side } = cardFullscreen

    if (index < 0) {
      setIsFullscreen(true)
      setCardFullscreen({ index: i, side: 'front' })
      return
    }
    if (side === 'front') {
      setCardFullscreen({ ...cardFullscreen, side: 'back' })
      return
    }
    if (side === 'back') {
      setIsFullscreen(false)
      setTimeout(() => {
        setCardFullscreen({ index: -1, side: 'front' })
      }, 100)
      return
    }
  }

  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <Wrapper className={deckCleared ? 'cleared' : undefined}>
      {props.map(({ x, y, rot, scale }, i) => (
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
              opacity: isFullscreen && cardFullscreen.index === i ? 0 : 1,
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cardsSmall[i]})`,
              touchAction: 'pan-y'
            }}
          />
        </animated.div>
      ))}
      {transition((style, item) =>
        item ? (
          <ImageFullscreen
            style={style}
            onDoubleClick={() => handleFullscreen(cardFullscreen.index)}
            className={`item ${cardFullscreen.side === 'back' ? 'show-back' : 'show-front'}`}>
            <div>
              <img
                src={cardsLarge[cardFullscreen.index]}
                alt="pretty picture"
                className={cardFullscreen.side === 'back' ? 'show-back' : 'show-front'}
              />
              {cardFullscreen.side === 'back' && (
                <span>
                  <FaTruckMonster size="40" />
                </span>
              )}
            </div>
          </ImageFullscreen>
        ) : (
          ''
        )
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
    /* cursor: pointer; */
  }
`

const EachCard = styled(animated.div)`
  background-color: white;
  background-size: auto 90%;
  background-repeat: no-repeat;
  background-position: center center;
  width: 50vw;
  max-width: 500px;
  height: 50vw;
  max-height: 500px;
  will-change: transform;
  border-radius: 10px;
  box-shadow: 0 12.5px 50px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);
`

const ImageFullscreen = styled(animated.div)`
  box-shadow: 0 12.5px 50px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -2rem;

  width: 95vw;
  height: 95vw;
  max-width: 800px;
  max-height: 800px;

  transition: transform 1s;
  background-color: white;
  z-index: 999999;
  border-radius: 10px;
  box-sizing: border-box;

  img {
    box-sizing: border-box;
    width: 90%;
    max-width: 800px;
    margin: 5%;
    max-height: 95%;
    transition: opacity 0.2s;
    transition-delay: 0.2s;
    opacity: 1;
  }
  &.show-back {
    transform: scaleX(-1);
  }
  &.show-front {
    transform: scaleX(1);
  }
  img.show-back {
    opacity: 0.1;
    filter: blur(2px);
  }
  div > img {
    overflow: hidden;
  }
  span {
    opacity: 0;
    position: absolute;
    bottom: 0;
    left: 50%;
  }
`

export default Deck
