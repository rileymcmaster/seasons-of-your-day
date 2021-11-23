import React from 'react'
import styled from 'styled-components'

import FullBleed from '../FullBleed/index'

const FullBleedGroup = ({ data }) => {
  const { photos, text } = data

  // already used the first two photos from the full bleed collection.
  // that's why it's starting at index+2

  return (
    <Wrapper id="group-wrapper">
      {text.map((phrase, index) => {
        return (
          <React.Fragment key={phrase}>
            <FullBleed data={photos[index + 2]} />
            <TextPage>
              <p>{phrase}</p>
            </TextPage>
          </React.Fragment>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: var(--max-content-width);
`

const TextPage = styled.div`
  margin: auto;
  padding: 0;
  height: 100vh;
  height: var(--full-height);
  display: flex;
  justify-content: center;
  align-items: center;
`

export default FullBleedGroup
