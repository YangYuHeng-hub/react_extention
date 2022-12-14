import React, { Component } from 'react'
import {MyContext} from './context'

const {Consumer} = MyContext

/* export default class C extends Component {
    static contextType = MyContext
    render() {
        const {name,word} = this.context
      return (
        <div className='c'>
          <h2>我是C组件</h2>
          <h4>我收到{name}给我的话是{word}</h4>
        </div>
      )
    }
  }  */

export default function C(){
    return (
        <div className='c'>
          <h2>我是C组件</h2>
          <Consumer>
            {
                ({name,word})=><h4>我收到{name}给我的话：{word}</h4>
                
            }
          </Consumer>
        </div>
    )
  }