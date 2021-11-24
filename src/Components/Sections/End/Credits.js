import React from 'react'
import styled from 'styled-components'

const Credits = () => {
  return (
    <Wrapper className="scroll-snap">
      <p>
        This project is a mix of emotions. Places you can see yourself but more importantly, it’s dedicated to the first people of “kanata”.{' '}
      </p>
      <p>SnPink’tn nation</p>
      <p>Tla’amin nation </p>
      <p>Skwxwú7mesh nation </p>
      <p>Tsleil-Waututh Nation </p>
      <p>Musquem Nation </p>
      <p>respect to your land</p>
      <p>photos by</p>
      <p>brad hill</p>
      <p>website by</p>
      <p>riley mcmaster</p>
      <p>2021</p>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  height: 100vh;
  height: var(--full-height);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 2rem;
  p {
    font-size: 1rem;
    width: 80%;
    margin: 0 auto;
    color: white;
  }
  max-width: var(--max-content-width);
`
export default Credits
