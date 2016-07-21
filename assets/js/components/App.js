import React, {Component} from 'react'
import {changeFlag} from '../actions/index'
import ArrowTest from './ArrowTest'

export default class App extends Component {
  sam() {
    console.log(changeFlag('test'))
    console.log(getState())
  }
  render() {
    return (
      <main>
        <div onClick={this.sam}>テスト</div>
        <ArrowTest arrow="テスト！"/>
      </main>
    )
  }
}
