import React, { Component } from 'react'
import B from './B'
import {MyContext} from './context'
import './index.css'

const {Provider} = MyContext
export default class A extends Component {
    state = {word:'hello',name:'A'}
  render() {
    const {name,word} = this.state
    return (
      <div className='a'>
        <h2>我是A组件</h2>
        <h4>我存储的word是{word}</h4>
        <Provider value={{name,word}}>
            <B/>
        </Provider>
      </div>
    )
  }
}





  