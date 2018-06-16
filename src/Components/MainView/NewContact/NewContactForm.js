import React, { Component } from 'react';
import axios from 'axios'

class NewContactForm extends Component {

  constructor(props){
    super(props);
    this.state={
      photo:"",
      name:"",
      description:""
    }
    this.onChange = this.onChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  //Si se presiona la tecla ESC cambia el estado showForm del componente NewContact, lo que permite salir del overlay
  handleKeyPress(e){
    if(e.keyCode === 27) {
      this.props.displayForm();
    }
  }
  //Escucha si se ingresa la tecla ESC y ejecuta la funcion handleKeyPress
  componentDidMount() {
     document.addEventListener('keydown', this.handleKeyPress);
  }
  //Setea los estados segun nombre y valor
  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  //Funcion asyncronia que se ejecuta al presionar el boton Guardar para añadir un nuevo usuario
  async onSubmit(e){
     e.preventDefault();
     let newUser = Object.assign({}, this.state);
     const user = await this.saveUser(newUser);
     this.props.addNewUser(user)
     this.props.displayForm();
  }
  //Funcion asyncronia que guarda en la api el usuario ingresado en el formulario
  async saveUser(user){
    try{
      const response = await axios.post('http://localhost:3000/api/users',user, {headers: {'Content-Type': 'application/json'}});
      return response.data;
    }
    catch(err){
      console.log(err);
    }
  }

  render() {
    const {photo,name,description} = this.state;
    return (
      <div className="NewContactFormContainer col">
        <div className="NewContactFormModal col-xl-4">
          <div className="NewContactFormTitle">
            <h1>Agregar nuevo contacto</h1>
          </div>
          <form>
            <div className="ElementsContainer form-group">
              <label>URL Imagen de perfil</label>
              <input
                required
                name="photo"
                onChange={this.onChange}
                type="text"
                className="form-control"
                placeholder="Ej: https://imagen.com"
                value={photo}/>
            </div>
            <div className="ElementsContainer form-group">
              <label>Nombre</label>
              <input
                required
                name="name"
                onChange={this.onChange}
                type="text"
                className="form-control"
                placeholder="Ej: Juanito Morales"
                value={name}/>
            </div>
            <div className="ElementsContainer form-group">
              <label>Descripción</label>
              <textarea
                required
                name="description"
                onChange={this.onChange}
                type="text"
                className="form-control"
                placeholder="Ej: Funcionario responsable . . ."
                value={description}/>
            </div>
            <div className="SubmitContainer">
              <button
                onClick={this.onSubmit}
                className="btn btn-primary">Guardar</button>
              <small
                className="form-text text-muted">Puedes cerrar este formulario presionado la tecla ESC</small>
            </div>
          </form>
        </div>
      </div>
    );
  }

}

export default NewContactForm;
