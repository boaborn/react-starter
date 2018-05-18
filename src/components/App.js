import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import '../scss/style.scss'
import { Button } from 'react-bootstrap'
@observer
export default class App extends Component {
    @observable temp = 'hello '

    render() {

      return (
        <div className='container'>
          <h1 className='test'> My React App !!!{ this.temp }</h1>
        </div>
      )
    }
}
