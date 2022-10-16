import React, { Component } from 'react'

export default class Count extends Component {
    state = {
        sum:0
    }

    add = ()=>{
        
        //对象式的setState
        /* 
            const {sum} = this.state
            this.setState({sum:sum+1},()=>{
            console.log('sum', this.state.sum)
        }) */

        //函数式的setState
        //const {sum} = this.state
        //this.setState(()=>{return {sum:sum+1}})
        this.setState((state,props)=>{
            console.log('state', state)
            console.log('props', props)
            return {sum:state.sum+1}})
    }

    change = ()=>{
        this.setState({sum:99})
    }

  render() {
    const {sum} = this.state
    return (
      <div>
        <h2>当前求和为：{sum}</h2>
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.change}>点我更改为99</button>
      </div>
    )
  }
}
