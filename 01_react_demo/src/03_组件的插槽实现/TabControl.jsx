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
    // const { titles } = this.props
    // const { currentIndex } = this.state
    // const { children } = this.props
    const { leftSlot, centerSlot, rightSlot } = this.props
    // 插插实现方式一:通过children
    // return (
    //   <div className='tab-control'>
    //     <div className='left'>{children[0]}</div>
    //     <div className='center'>{children[1]}</div>
    //     <div className='right'>{children[2]}</div>
    //   </div>
    // )

    // 插槽实现方式二:通过props
     return (
      <div className='tab-control'>
        <div className="lefr">{leftSlot}</div>
        <div className="center">{centerSlot}</div>
        <div className="right">{rightSlot}</div>
      </div>
    )
  }
}

export default TabControl