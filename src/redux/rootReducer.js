import { combineReducers } from 'redux'
import {
  ASYNC,
  DECREMENT,
  DISABLE_BTN,
  ENABLE_BTN,
  INCREMENT,
  THEME,
} from './types'

function counterReducer(state = 0, action) {
  if (action.type === INCREMENT) {
    return state + 1
  } else if (action.type === DECREMENT) {
    return state - 1
  } else if (action.type === ASYNC) {
    return state + 2
  }
  return state
}
const initialThemeState = {
  value: 'light',
  disabled: false,
}

function themeReducer(state = initialThemeState, action) {
  switch (action.type) {
    case THEME:
      return { ...state, value: action.payload }
    case ENABLE_BTN:
      return { ...state, disabled: false }
    case DISABLE_BTN:
      return { ...state, disabled: true }
    default:
      return state
  }
}
export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
})
