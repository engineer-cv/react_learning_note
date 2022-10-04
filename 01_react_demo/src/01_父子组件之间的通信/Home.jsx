import React, { Component } from 'react'

export class Home extends Component {
  addClick(count) {
    this.props.addCount(count)
  }
  render() {
    return (
      <div>
        {/* 绑定事件,并且将数据作为入参传递出去 */}
        <button onClick={e => {this.addClick(1)}}>+1</button> 
        <button onClick={e => {this.addClick(5)}}>+5</button>
        <button onClick={e => {this.addClick(10)}}>+10</button>
      </div>
    )
  }
}

export default Home
