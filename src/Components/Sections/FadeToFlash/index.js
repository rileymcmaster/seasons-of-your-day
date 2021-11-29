import React from 'react'
import styled from 'styled-components'
import Flash from './Flash'
import LongFade from './LongFade'

const FadeToFlash = ({ data }) => {
  return (
    <Wrapper>
      <LongFade data={data} />
      <Flash data={data} />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  scroll-snap-type: mandatory;
`
export default FadeToFlash
