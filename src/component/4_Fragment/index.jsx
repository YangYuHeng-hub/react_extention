import React, { Component, Fragment } from 'react'

export default class Demo extends Component {

    state = {
        persons:[
            {id:'001',name:'张三',age:18},
            {id:'002',name:'李四',age:19},
            {id:'003',name:'王五',age:20}
        ]
    }

    render() {
        return (
            this.state.persons.map((item)=>{
                return (
                    <Fragment key={item.id}>
                        <div>{item.name}</div>
                        <div>{item.age}</div>
                    </Fragment>
                )
            })
           
        )
  }
}
