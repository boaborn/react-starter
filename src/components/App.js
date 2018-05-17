import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from "mobx-react"
@observer
export default class App extends Component {
    @observable temp = 'hello '

    render(){
        return(
            <div>
                <h1> My React App !!!{this.temp}</h1>
            </div>
        )
    }
}