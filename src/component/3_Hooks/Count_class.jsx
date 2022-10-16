import React, { Component } from 'react'
import root from '../../index'

export default class Count extends Component {
  state = {
      sum:0
  }
  inputContainer = React.createRef()

  add = ()=>{
    const {sum} = this.state
    this.setState({sum:sum+3})
  }

  death = ()=>{
    root.unmount()
  }

  show = ()=>{
    alert(this.inputContainer.current.value)
  }

  componentDidMount(){
    this.timer = setInterval(()=>{
      const {sum} = this.state
    this.setState({sum:sum+3})
    },1000)
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  render() {
    const {sum} = this.state
    return (
      <div>
        <h2>当前求和为:{sum}</h2>
        <button onClick={this.add}>点我+3</button>
        <button onClick={this.death}>点我卸载组件</button>
        <input type="text" ref={this.inputContainer}/>
        <button onClick={this.show}>点我提示输入</button>
      </div>
    )
  }
}
