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
        <Counters onIncrement={
            () =>
            store.dispatch({
              type: 'INCREMENT'
            })
          }
          onDecrement={() =>
              store.dispatch({
                type: 'DECREMENT'
              })}
          actionTest={() =>
            store.dispatch(testAction('引数'))
          }/>
        <div>{() => this.props.action}</div>
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
              <div onClick={this.props.actionTest}>アクションテスト</div>
            </section>
          )
        }
      }

      const counter = (state = {}, action) => {
        switch(action.type) {
          case 'INCREMENT':
          return state.count = state.count + 1
          case 'DECREMENT':
          return state.count = state.count - 1
          case 'ACTION':
          return state.action = action.action
        }
      }

      const testAction = action => {
        return {
          type: 'ACTION',
          action: action
        }
      }

      const store = createStore(counter)
      render(
        <Provider store={store}>
          <Test />
        </Provider>,
        document.getElementById('app')
      )
