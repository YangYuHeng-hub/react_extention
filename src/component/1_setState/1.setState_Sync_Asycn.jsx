import React, { Component } from 'react'

export default class Count extends Component {
    state = {
        sum:0
    }
    //add是由react控制的事件回调，所以其中的setState更新状态的动作是异步的
    add = ()=>{
        const {sum} = this.state;
        this.setState({sum:sum+1})
        console.log('add sum:',this.state.sum)
    }
    //componentDidMount是由react控制的生命周期钩子，所以其中的setState更新状态的动作是异步的
    componentDidMount(){
        const {sum} = this.state;
        this.setState({sum:sum+1})
        console.log('ComponentDidMount sum:', this.state.sum)
    }

  render() {
    const {sum} = this.state
    return (
      <div>
        <h2>当前求和为：{sum}</h2>
        <button onClick={this.add}>点我+1</button>
      </div>
    )
  }
}
