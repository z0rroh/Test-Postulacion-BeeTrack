import React, { Component } from 'react';
import NewContactForm from './NewContactForm'

class NewContact extends Component {

  constructor(props){
    super(props);
    this.state={
      showForm: false
    }
    this.displayForm = this.displayForm.bind(this);
  }

  // Esta funcion cambia el estado showForm para mostrar o quitar el overlay con el formulario de añadir un nuevo usuario
  displayForm(){
    let showForm = this.state.showForm
    this.setState({
      showForm: !showForm
    })
  }

  render() {
    const {showForm} = this.state;
    return (
      <div className="NewContactContainer col">
        <div className="container">
          <div className="row justify-content-end">
            <button
              onClick={this.displayForm}
              type="button"
              className="btn col-xl-4">
              Nuevo Contacto
            </button>
          </div>
          {
            showForm && <NewContactForm addNewUser={this.props.addNewUser} displayForm={this.displayForm}/>
          }
        </div>
      </div>
    );
  }

}

export default NewContact;
