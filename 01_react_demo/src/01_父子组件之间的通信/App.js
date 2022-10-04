import React, { Component } from 'react'
import Home from './Home'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      counter:100
    }
  }
  changeCount(count) {
    this.setState({ counter:this.state.counter + count })
  }
  render() {
    const { counter } = this.state
    return (
      <div>
        <h2>{ counter }</h2>
        <Home addCount={ count => this.changeCount(count)}/>
      </div>
    )
  }
}

export default App
