import { combineReducers } from 'redux'

import music from './isMusicPlaying'
import showSections from './showSections'

export default combineReducers({ music, showSections })
