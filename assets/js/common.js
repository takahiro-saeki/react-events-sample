/*
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import judge from './reducers'
import App from './components/App'

let store = createStore(judge)

render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById('app')
)
*/
/*
import React, {Component} from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
class Test extends Component {
  constructor(props) {
    super(props);
  }
  check() {
    console.log(store.getState())
  }

  addState() {
    store.dispatch({type: 'INCREMENT'})
  }

  render() {
    return (
      <main>
        <p onClick={this.addState}>state追加</p>
        <p onClick={this.check}>チェック</p>
        <Counters
          onIncrement={() => store.dispatch({type: 'INCREMENT'})}
          onDecrement={() => store.dispatch({type: 'DECREMENT'})}
          onAction={() => store.dispatch(ActionBtn('test'))}
          />
        <div>{() => this.props.action}</div>
        <div>{this.props.data}</div>
      </main>
    )
  }
}

class Counters extends Component {
  render() {
    return (
      <section>
        <div onClick={this.props.onIncrement}>＋</div>
        <div onClick={this.props.onDecrement}>ー</div>
        <div onClick={this.props.onAction}>アクション</div>
      </section>
    )
  }
}

const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
    return state + 1
    case 'DECREMENT':
    return state - 1
    case 'ACTION_BTN':
    return action.data
  }
}

function ActionBtn(data) {
  return {type: 'ACTION_BTN', data}
}

const store = createStore(counter)
render(
  <Provider store={store}>
    <Test />
  </Provider>,
  document.getElementById('app')
)
*/
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'
import STYLE from '../css/style.css';

const store = createStore(counter)
const rootEl = document.getElementById('app')

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState().test}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
      onBurst={() => store.dispatch({ type: 'BURST' })}
      onData={() => store.dispatch({ type: 'USER_DATA' })}
    />,
    rootEl
  )
}

render()
store.subscribe(render)
