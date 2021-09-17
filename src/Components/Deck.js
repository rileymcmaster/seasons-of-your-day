import React, { useState } from 'react'
import styled from 'styled-components'

import { useSprings, animated, to as interpolate } from 'react-spring'
import { useDrag, useGesture } from 'react-use-gesture'

const cards = [
  'https://res.cloudinary.com/bodyofwater/image/upload/v1631049595/Brad/Card1/Photo_13_vzzog8.jpg',
  'https://res.cloudinary.com/bodyofwater/image/upload/v1631049594/Brad/Card1/Photo_16_egs712.jpg',
  'https://res.cloudinary.com/bodyofwater/image/upload/v1631049585/Brad/Card1/Photo_15_tdryx1.jpg',
  'https://res.cloudinary.com/bodyofwater/image/upload/v1631049583/Brad/Card1/Photo_14_rnccvt.jpg',
  'https://res.cloudinary.com/bodyofwater/image/upload/v1631049582/Brad/Card1/Photo_12_li7xan.jpg',
  'https://res.cloudinary.com/bodyofwater/image/upload/v1631049579/Brad/Card1/Photo_7_lr7fgm.jpg',
  'https://res.cloudinary.com/bodyofwater/image/upload/v1631049575/Brad/Card1/Photo_11_w6k8pp.jpg'
  // 'https://res.cloudinary.com/bodyofwater/image/upload/v1631049574/Brad/Card1/Photo_10_ypyfuc.jpg',
  // 'https://res.cloudinary.com/bodyofwater/image/upload/v1631049569/Brad/Card1/Photo_9_xxpupj.jpg',
  // 'https://res.cloudinary.com/bodyofwater/image/upload/v1631049566/Brad/Card1/Photo_8_dos0in.jpg',
  // 'https://res.cloudinary.com/bodyofwater/image/upload/v1631049559/Brad/Card1/Photo_2_fsvxoo.jpg',
  // 'https://res.cloudinary.com/bodyofwater/image/upload/v1631049551/Brad/Card1/Photo_1_cppna5.jpg',
  // 'https://res.cloudinary.com/bodyofwater/image/upload/v1631049549/Brad/Card1/Photo_5_pldhtl.jpg',
  // 'https://res.cloudinary.com/bodyofwater/image/upload/v1631049547/Brad/Card1/Photo_4_i40b1d.jpg',
  // 'https://res.cloudinary.com/bodyofwater/image/upload/v1631049542/Brad/Card1/Photo_6_miltbq.jpg',
  // 'https://res.cloudinary.com/bodyofwater/image/upload/v1631049541/Brad/Card1/Photo_3_ymcps5.jpg'
]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function Deck() {
  const [deckCleared, setDeckCleared] = useState(false)
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, (i) => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(
    ({ args: [index], down, movement: [mx, my], distance, direction: [xDir, yDir], velocity }) => {
      const trigger = velocity > 0.4 // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right

      if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      set((i) => {
        if (index !== i) return // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index)
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1 // Active cards lift up a bit
        return { x, rot, scale, delay: undefined, config: { friction: 80, tension: down ? 800 : isGone ? 200 : 500 } }
      })
      //
      // PROB THIS HERE
      //
      //
      if (gone.size === cards.length) {
        setDeckCleared(true)
        //   setShowVideo(true)
        //   setPlayVideo(true)
        // setFullscreenVideo(true)
      }
      if (!down && gone.size === cards.length + 1) setTimeout(() => gone.clear() || set((i) => to(i)), 600)
    },
    { filterTaps: true }
  )

  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <Wrapper className={deckCleared ? 'cleared' : undefined}>
      {props.map(({ x, y, rot, scale, width }, i) => (
        <animated.div className="card-container" key={i} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            className="card-each"
            {...bind(i)}
            style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }}
          />
        </animated.div>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  z-index: 100;
  /* position: fixed; */
  height: 100%;
  width: 100%;
  overflow: hidden;
  &.card-container {
    position: absolute;
    z-index: 9;
    /* width: 100vw; */
    /* height: 100vh; */
    overflow: hidden;
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &.cleared {
    z-index: -1;
  }
`

export default Deck
