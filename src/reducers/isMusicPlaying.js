const initialState = {
  isMusicPlaying: false,
  volume: 100,
  track: 0
}

const fadeVolume = (volume) => {
  let newVol = volume
  const interval = 100

  if (volume >= 100) {
    const decVol = setInterval(() => {
      newVol -= 10
      console.log('dec', newVol)
      if (newVol <= 0) {
        clearInterval(decVol)
      }
    }, interval)
  }

  if (volume <= 0) {
    const incVol = setInterval(() => {
      newVol += 10
      console.log('inc', newVol)
      if (newVol >= 100) {
        clearInterval(incVol)
      }
    }, interval)
  }
  return newVol
}

// console.log('vol', fadeVolume(100))

const isMusicPlayingReducer = (state = initialState, action) => {
  // console.log('state', state)
  // console.log('action', action)
  switch (action.type) {
    case 'PLAY': {
      return {
        isMusicPlaying: !state.isMusicPlaying,
        volume: 100
      }
    }

    default:
      return state
  }
}

export default isMusicPlayingReducer
