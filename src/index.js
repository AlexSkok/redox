import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { async_inc, changeTheme, decrement, increment } from './redux/actions'
import { rootReducer } from './redux/rootReducer'
import './styles.css'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
)

addBtn.addEventListener('click', () => {
  store.dispatch(increment())
})
subBtn.addEventListener('click', () => {
  store.dispatch(decrement())
})
asyncBtn.addEventListener('click', () => {
  store.dispatch(async_inc())
})

themeBtn.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('light') ? 'dark' : 'light'
  store.dispatch(changeTheme(newTheme))
})

store.subscribe(() => {
  const state = store.getState()
  const arrBtn = [addBtn, subBtn, themeBtn, asyncBtn]

  counter.textContent = state.counter
  document.body.className = state.theme.value
  arrBtn.forEach((btn) => (btn.disabled = state.theme.disabled))
})
store.dispatch({ type: 'INIT_APP' })
