import React from 'react'
import { render } from 'react-dom'
import App from './Components/App'

import { Provider } from 'react-redux'
import configureStore from './store'

const store = configureStore()

const Index = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  )
}

render(<Index />, document.getElementById('root'))
