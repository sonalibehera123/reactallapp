
import React, { Component } from 'react'

export default class Home extends Component {

constructor()
{
    super();
    this.state={

        name:"sonali",
        age:18

    }
}


  render() {
    return (
      <div>home
      <h1>{this.state.name}</h1>
      <h1>{this.state.age}</h1>

      <button onClick={()=>{this.setState({name:'sanu'})}}>click me</button>
      <button onClick={()=>{this.setState({age:20})}}
>click me age</button>
      </div>
    )
  }
}
