import React from 'react'
import root from '../../index'

export default function Count() {
  //React.useRef = React.createRef
  const inputContainer = React.useRef()

  //对React.useState进行解构赋值,拿到初始值和更改函数
  const [sum,setSum] = React.useState(0)

  function add(){
    //setSum(sum+3)
    setSum((sum)=>{return sum+3})
  }

  function death(){
    root.unmount()
  }

  function show(){
    alert(inputContainer.current.value)
  }

  /* 
    组件挂载时调用一次React.useEffect
    当React.UseEffect有第二个参数数组时，该函数可以监听数组内的状态是否改变
    当React.UseEffect没有第二个参数时，该函数监听状态是否改变
    当React.UseEffect的第二个参数数组为空时，即什么也不监听
 */
  React.useEffect(()=>{
    const timer = setInterval(()=>{
      setSum(sum => sum+3)
    },1000)

    //≈componentWillUnmount
    return ()=>{
      clearInterval(timer)
    }
  },[])

  return (
    <div>
        <h2>当前求和为:{sum}</h2>
        <button onClick={add}>点我+3</button>
        <button onClick={death}>点我卸载组件</button>
        <input type="text" ref={inputContainer}/>
        <button onClick={show}>点我提示输入</button>
      </div>
  )
}

