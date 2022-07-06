

import React, { Component } from 'react'

export default class ClasscomponectPassTwoProps extends Component {
  render() {
    return (
      <div>ClasscomponectPassTwoProps

          <h1>{this.props.text}</h1>
          <h1>{this.props.intro.age}</h1>
      </div>
    )
  }
}
