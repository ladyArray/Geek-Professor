import React, { Component } from 'react'
import './Message.css'
import sendIcon from '../images/send32.png'

{/* <a href="https://www.flaticon.com/free-icons/send" title="send icons">Send icons created by Becris - Flaticon</a> */ }

export class Message extends Component {

  constructor() {
    super();

    this.state = {
      texto: ''
    }
  }

  guardarValor = e => {
    this.setState(
      { texto: e.target.value }
    )
  }

  onSubmit = e => {
    e.preventDefault()

    this.props.onSubmit(this.state.texto)

    this.setState({texto: ''})
  }

  render() {
    return (
      <div className="container">
          <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-10 d-flex align-items-center justify-content-center ">
              <textarea name="mensaje" placeholder="Escribe aquí tu duda..." className="form-control"
                value={this.state.texto} onChange={this.guardarValor} />
            </div>
            <div className="col-2 d-flex">
              &npsb; <input type="submit" className="btn btn-outline-light" value="Enviar" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Message