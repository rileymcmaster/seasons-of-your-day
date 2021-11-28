import React from 'react'
import { render } from 'react-dom'
import App from './App'

import { Provider } from 'react-redux'
import configureStore from './store'

const store = configureStore()

const Index = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

render(<Index />, document.getElementById('root'))
