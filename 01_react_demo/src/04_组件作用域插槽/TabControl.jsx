import React, { Component } from 'react'
import './tabcontrol.css'

export class TabControl extends Component {
  constructor() {
    super()
    this.state = {
      currentIndex: 0
    }
  }

  itemClick(index) {
    console.log(index);
    this.setState({ currentIndex: index})
    this.props.tabClick(index)
  }

  render() {
    const { titles, Slot } = this.props
    const { currentIndex } = this.state
    return (
      <div className='tab-control'>
        {titles.map( (title,index) => {
          return (
            <div className={`tab-item`} onClick={e => this.itemClick(index)}>
              {/* <span className={`item  ${currentIndex === index ? 'active' : ''}`}>{title}</span> */}
              {Slot(title)}
            </div>
          )
        })}
      </div>
    )
  }
}

export default TabControl