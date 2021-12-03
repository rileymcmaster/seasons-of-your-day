const initialState = {
  mainContent: false,
  controlBar: false,
  endSection: false
}

const showSectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_MAIN_CONTENT':
      return { ...state, mainContent: true }
    case 'SHOW_CONTROL_BAR':
      return { ...state, controlBar: true }
    case 'SHOW_END_SECTION':
      return {
        ...state,
        endSection: true
      }
    default:
      return state
  }
}

export default showSectionsReducer
