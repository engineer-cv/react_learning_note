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

    // 插插实现方式一:通过children
    // return (
    //   <div>
    //     <TabControl titles={titles}>
    //       {/* 这里的三个span会被依次放入TabControl的props里的children里面 */}
    //       <span>左边</span>
    //       <span>中间</span>
    //       <span>右边</span>
    //     </TabControl>
        
    //   </div>
    // )

    // 插槽实现方式二:通过props
    const leftContent = <button>左边</button>
    const centerContent = <span>中间的内容</span>
    const rightContent = <u>右边</u>
    return (
      <div>
        <TabControl leftSlot={leftContent} centerSlot={centerContent} rightSlot={rightContent}/>
      </div>
    )
  }
}

export default App