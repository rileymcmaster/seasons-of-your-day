import { playlistTimestamps } from 'assets'

const timestsampsLength = Object.keys(playlistTimestamps).length

const loadFromLocalStorage = () => {
  try {
    let localStorageTrackNum = JSON.parse(window.localStorage.getItem('trackNum'))
    if (localStorageTrackNum) {
      let newTrackNum = localStorageTrackNum < timestsampsLength ? localStorageTrackNum + 1 : 1
      window.localStorage.setItem('trackNum', newTrackNum)
      return newTrackNum
    }
    if (!localStorageTrackNum) {
      window.localStorage.setItem('trackNum', 1)
      return 1
    }
  } catch (err) {
    console.log('error loading from local storage', err)
    return undefined
  }
}

const initialState = {
  isMusicPlaying: false,
  volume: 100,
  trackNum: loadFromLocalStorage()
}

const isMusicPlayingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PLAY': {
      return {
        ...state,
        isMusicPlaying: !state.isMusicPlaying
      }
    }
    case 'INC_TRACK': {
      const newTrackNum = action.trackNum < timestsampsLength ? action.trackNum : initialState.trackNum
      window.localStorage.setItem('trackNum', newTrackNum)
      return {
        ...state,
        trackNum: newTrackNum
      }
    }
    default:
      return state
  }
}

export default isMusicPlayingReducer
