import React, { Component } from 'react'
import './Forum.css'

export class Forum extends Component {
  render() {
    return (
      <ul>
        {this.props.coleccion.map((mensaje, index) => {
          return(
            <li key={index} className="text-success"> {mensaje}</li>
          )
        })}
      </ul>
    )
  }
}

export default Forum