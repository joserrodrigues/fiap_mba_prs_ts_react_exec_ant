import React, { Component } from 'react'
import HomeView from './HomeView'

type State = {
      count: number;
}

export default class HomeController extends Component<any, State> {
    constructor(props:any) {
        super(props)
        this.state = { 
            count: 0
        }
    }

    changeInfo = () => {
      
      this.setState({
        count: this.state.count + 1
      })
    }
  

  render() {
    return (
      <HomeView
        changeInfo={this.changeInfo}
        info={this.state.count} />
    )
  }
}