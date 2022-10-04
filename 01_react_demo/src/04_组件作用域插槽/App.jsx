import React, { Component } from 'react'
import TabControl from './TabControl'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      titles: ["推荐", "热门", "排行"],
      index: 0
    }
  }
  changeIndex(index) {
    this.setState({ index })
  }
  render() {
    const { titles,index } = this.state
    return (
      <div>
        <TabControl titles={titles} tabClick={index => {this.changeIndex(index)}} Slot={item => <button>{item}</button>}/>
        <div>{titles[index]}</div>
      </div>
    )
  }
}

export default App