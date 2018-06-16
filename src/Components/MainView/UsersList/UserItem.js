import React, { Component } from 'react';
import axios from 'axios'

class UserItem extends Component {

  constructor(props){
    super(props);
    this.state={
      isHover: false
    }
    this.onHover = this.onHover.bind(this);
    this.onClick = this.onClick.bind(this);
    this.leaveHover = this.leaveHover.bind(this);
  }

  // Funcion que cambia el estado isHover a 'verdadero' si el mouse se encuentra por encima del contenedor usuario
  onHover(){
    let isHover = this.state.isHover
    this.setState({isHover: true})
  }
// Funcion que cambia el estado isHover a 'falso' si el mouse se encuentra por fuera del contenedor usuario
  leaveHover(){
    let isHover = this.state.isHover
    this.setState({isHover: false})
  }
  //Funcion sincronica que espera a que se ejecute a la funcion deleteUser, luego ejecuta la funcion removeUser recibida por props desde el componente MainView
  async onClick(){
    const user = this.props.user;
    const response = await this.deleteUser(user);
    this.props.removeUser(user.id);
  }
  //Funcion sincronia que 'intenta' ejecutar la llamada HTTP a la api para borrar un usuario espesifico, segun su id
  async deleteUser(user){
    try{
      const response = await axios.delete("http://localhost:3000/api/users/"+user.id);
      return response.data;
    }
    catch(err){
      console.log(err);
    }
  }

  render() {
    const user = this.props.user;
    const isHover = this.state.isHover;
    return (
      <div
        onMouseEnter={this.onHover}
        onMouseLeave={this.leaveHover}
        key={user.id}
        className="row UserElementContainer card-group">
        <div className={isHover ? ("UserElement UserIsHover card col-xl-4") : ("UserElement card col-xl-4")}>
          <div className="UserElementImage col-xl-2">
            <img src={user.photo} alt="User_Avatar" className="rounded-circle"/>
          </div>
          <div className="UserElementName col-xl-10">
              <div className="row">
                <div className="col-xl-12">
                  <span>{user.name}</span>
                </div>
                <div className={isHover ? ("isHover col-xl-12") : ("isNoHovering col-xl-12") }>
                  <span onClick={this.onClick}>Eliminar</span>
                </div>
              </div>
          </div>
        </div>
        <div className="UserElementDescription card col-xl-8">
          <span>
            {user.description}
          </span>
        </div>
      </div>
    );
  }

}

export default UserItem;
