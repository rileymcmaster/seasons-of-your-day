import React from 'react'
import styled from 'styled-components'
import Flash from './Flash'
import LongFade from './LongFade'

const FadeToFlash = ({ data }) => {
  return (
    <>
      <LongFade data={data} />
      <Flash data={data} />
    </>
  )
}

export default FadeToFlash
