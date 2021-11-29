import React from 'react'
import styled from 'styled-components'

import Deck from '../Deck/index'
import Video from './Video'

const DeckAndVideo = ({ data }) => {
  return (
    <Wrapper>
      <Deck data={data} />
      <Video />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

export default DeckAndVideo
