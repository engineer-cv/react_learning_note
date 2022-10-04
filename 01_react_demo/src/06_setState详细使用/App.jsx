import React, { Component } from 'react'
import { flushSync } from 'react-dom'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      message:'你好啊',
      count: 0
    }
  }
  changeMessage() {
    //setState更多用法
    //1:基本使用
    //setState里面传入的对象,与state合并.Object.assign(this.state,newState)
    const newState = {
      message: "aaa"
    }
    // this.setState(newState) 

    //2:传入一个回调函数
    //当我们使用回调函数的时候,可以在回调函数中,编写新的state的逻辑
    // 当前的回调函数,获取之前的state和props的值

    // this.setState((state,props) => {
    //   console.log("state",state);
    //   return newState
    // })
    
    // 3:setState在react中是一个异步调用
    // 如果希望在数据更新之后,获取到最新的值,并且对最新的值进行一些逻辑操作时
    // 那么可以在setState中传入第二个参数(callback)
    // 传入的callback会在数据合并(Object.assign(this.state,newState))之后,立即调用
    // this.setState(newState,() => {
    //   console.log(this.state.message);
    // }) 
    // console.log("----------",this.state.message);
    flushSync(() => {
      this.setState({
        message:'aaa'
      })
    })
    console.log("对最新的state进行操作",this.state.message);
  }
  changeCount() {
    this.setState({
      count: this.state.count + 10
    })
  }
  
  render() { 
    const { message, count } = this.state
    return (
      <div>
        <h2>{message}</h2>
        <button onClick={() => this.changeMessage()}>改变文本</button>
        <h2>当前计数{count}</h2>
        <button onClick={() => this.changeCount()}></button>
      </div>
    )
  }
}

export default App