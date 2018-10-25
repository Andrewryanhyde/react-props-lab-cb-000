import React from 'react'
import ReactDOM from 'react-dom'

export default class Spaceship extends React.component{
  render() {
    return {
      <p>{this.props.name}</p>
      <p>{this.props.speed}</p>
      <p>{this.props.hasRockets}</p>
      <p>{this.props.colors.join(', ')}</p>
    }
  }
}
