import React from 'react'
import styled from 'styled-components'

const Credits = () => {
  return (
    <>
      <Wrapper className="scroll-snap">
        <p>
          This project is a mix of emotions. Places you can see yourself but more importantly, it’s dedicated to the first people of
          “kanata”.
        </p>
        <div className="list">
          <p>SnPink’tn nation</p>
          <p>Tla’amin nation </p>
          <p>Skwxwú7mesh nation </p>
          <p>Tsleil-Waututh Nation </p>
          <p>Musquem Nation </p>
        </div>
        <p>respect to your land</p>
      </Wrapper>
      <Wrapper>
        <div className="credit">
          <p>photos by</p>
          <p>brad hill</p>
        </div>
        <div className="credit">
          <p>website by</p>
          <p>riley mcmaster</p>
        </div>
        <div className="credit">
          <p>words and music by</p>
          <p>mazzy star</p>
        </div>
        <div className="credit">
          <p>2021</p>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
  max-width: var(--max-content-width);
  height: 100vh;
  height: var(--full-height);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 2rem;
  .list {
    margin: 2rem 0;
  }
  p {
    font-size: 1rem;
    width: 80%;
    margin: 0 auto;
    color: white;
  }
  .credit p:first-child {
    margin-bottom: -0.5rem;
  }
  div.credit ~ div.credit {
    margin-top: 2rem;
  }
`
export default Credits
