import './HomeworkSection.css';
import Message from './elements/Message';
import Forum from './elements/Forum';
import React from 'react';
import Modal from 'react-modal';

const estilo = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '50%',
    // height: '50%',
    overflow: 'hidden',
    transform: 'translate(-50%, -50%)'
  }
}

class HomeworkSection extends React.Component {

  constructor() {
    super();

    this.state = {
      arrayDatos: [],
      abierto: false,
      tarea: ''
    }
  }

  handleSubmit = (message) => {
    // Con el valor recibido lo agregamos al estado
    this.setState(
      { arrayDatos: this.state.arrayDatos.concat(message) }
    );
  }

  abrirModal = (e) => {
    this.setState({ abierto: true });
  }

  cerrarModal = (e) => {
    this.setState({ abierto: false });
  }

  handleChange = (e) => {
    this.tarea = e.target.value;
  }

  updateHomework = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div className='container1'>
          <h2 id='hw'>HOMEWORK</h2>
          <p className='homeworkCard'>{this.tarea}</p>
          <div className='d-grid gap-2'>
            <button type="button" className="btn btn-lg btn-outline-light btnTarea" onClick={this.abrirModal}>Añadir tarea</button>
          </div>
          <Modal
            appElement={document.getElementById('root')}
            isOpen={this.state.abierto}
            style={estilo} >
            <form onSubmit={this.updateHomework}>
              <textarea type="text" name="tarea" className='tarea' onChange={this.handleChange} />
            </form>
            <input type='button' className='btn btn-lg btn-outline-danger align-items-center' onClick={this.cerrarModal} value='Cancelar' /> &nbsp;
            <input type='submit' className='btn btn-lg btn-outline-success align-items-end' onClick={this.cerrarModal} value="Añadir" />
          </Modal>
        </div>
        <div className='container2'>
          <h2>FORO</h2>
          <Forum coleccion={this.state.arrayDatos} />
          <Message onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default HomeworkSection;