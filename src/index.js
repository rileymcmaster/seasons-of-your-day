import React, { useState, useEffect, useRef } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import App from './App'
import './styles.css'

const Index = () => {
  return <App />
}

render(<Index />, document.getElementById('root'))
