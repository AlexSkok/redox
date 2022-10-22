import {
  ASYNC,
  DECREMENT,
  DISABLE_BTN,
  ENABLE_BTN,
  INCREMENT,
  THEME,
} from './types'

export function increment() {
  return { type: INCREMENT }
}
export function decrement() {
  return { type: DECREMENT }
}
export function disableBtn() {
  return { type: DISABLE_BTN }
}
export function enableBtn() {
  return { type: ENABLE_BTN }
}
export function changeTheme(newTheme) {
  return {
    type: THEME,
    payload: newTheme,
  }
}
export function async_inc() {
  return function (dispatch) {
    dispatch(disableBtn())
    setTimeout(() => {
      dispatch({ type: ASYNC })
      dispatch(enableBtn())
    }, 2000)
  }
}
