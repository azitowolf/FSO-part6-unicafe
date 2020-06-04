import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }
  const ok = () => {
    store.dispatch({
      type: 'OK'
    }) 
  }

  const bad = () => {
    store.dispatch({
      type: 'BAD'
    }) 
  }

  const reset = () => {
    store.dispatch({
      type: 'RESET'
    }) 
  }

  const sum = () => {
    return Object.values(store.getState()).reduce((t, value) => t + value)
  }

  const average = () => {
    return (-1 * store.getState().bad + store.getState().good) / sum()
  }

  return (
    <div>
      <h2>Provide Feedback</h2>
      <button onClick={good}>good</button> 
      <button onClick={ok}>neutral</button> 
      <button onClick={bad}>bad</button>
      <button onClick={reset}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>neutral {store.getState().ok} </div>
      <div>bad {store.getState().bad}</div>
      <div>all {sum()}</div>
      <div>average {average()}</div>
      <div>percent positive {store.getState().good / sum()}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
