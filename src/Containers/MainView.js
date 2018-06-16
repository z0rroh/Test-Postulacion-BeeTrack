import React, { Component } from 'react';
import SearchBar from '../Components/MainView/SearchBar/SearchBar'
import NewContact from '../Components/MainView/NewContact/NewContact'
import UsersList from '../Components/MainView/UsersList/UsersList'
import Pagination from '../Components/MainView/Pagination/Pagination'
import axios from 'axios'

class MainView extends Component {

  constructor(props){
    super(props);
    this.state = {
      isFetching: false,
      users: [],
      filter: "",
      currentPage: 1,
      maxItemsPage: 5
    }
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.searchFilter = this.searchFilter.bind(this);
    this.addNewUser = this.addNewUser.bind(this);
    this.removeUser = this.removeUser.bind(this);
  }

  async componentDidMount(){
    // Iniciamos un proceso de carga hasta recibir los datos desde la api
    this.setState({
      isFetching: true
    })
    // esperamos la respuesta de la funcion sincronica fetchUsers para luego modificar los estados
    const response = await this.fetchUsers();
    this.setState({users: response, isFetching: false});
  }

  // Creamos una funcion sincronica para obtener los usuarios desde la api
  async fetchUsers(){
    try{
      //Realizamos la peticion HTTP a la api pidiendo todos los usuarios almacenados
      const response = await axios.get('http://localhost:3000/api/users')
      return response.data;
    }
    catch(err){
      //En caso de algun error en la peticion, mostramos el error por consola
      console.log("Se a producido un error,",err);
    }
  }
  // Funcion para recibir el texto
  searchFilter(text){
    // Recibimos parametro de texto introducido por el usuario y seteamos el estado para filtrar
    // Ademas como poseemos una nueva lista de usuarios volvemos a la pagina inicial
    this.setState({filter: text, currentPage: 1});
  }
  //Funcion que añade inmediatamente al estado 'users' un nuevo usuario agregado desde el componente NewContact
  addNewUser(user){
    let newState = this.state.users;
    newState.push(user)
    this.setState({users: newState})
  }
  //Funcion que quita el un usuario espesifico de la lista de usuarios luego de ser removido del servidor en el componente UserItem
  removeUser(userToRemove){
    let newState = this.state.users;
    var index = newState.indexOf(userToRemove);
    newState.splice(index, 1);
    this.setState({users: newState})
  }
  // Funcion para retroceder a la pagina anterior, se entrega por props al compoente Searchbar
  prevPage(){
    const { currentPage } = this.state;
    //Preguntamos si la pagina actual es mayor a la primera, de ser asi retrocedemos una pagina
    if(currentPage > 1){
      this.setState({currentPage: currentPage - 1 })
    }
  }
  // Funcion para avanzar a la siguiente pagina, se entrega por props al compoente Searchbar
  nextPage(){
    const { currentPage, maxItemsPage, users } = this.state;
    //Calculamos el numero total de paginas segun el numero de usuario y los usuarios que se desean mostrar por pagina
    let numberPages = Math.ceil(users.length/maxItemsPage); //A la division aplicamos la funcion match.ceil para poder redondear el resultado
    //Preguntamos Si el valor de la pagina actual es menor que el numero total paginas calculado en el paso anterior
    // Y Si la pagina actual es distinto del numero total de paginas, avanzamos una pagina
    if(currentPage !== numberPages && currentPage < numberPages){
      this.setState({currentPage: currentPage + 1})
    }
  }

  render() {
    const {users, isFetching, filter, currentPage, maxItemsPage } = this.state;
    // Array con todos los usuarios filtrados segun la barra de busqueda
    let usersFilter = users.filter((user)=>{
      return user.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    })
    // Logica para calcular el numero de usuarios a mostrar por pagina
    const indexOfLast = currentPage * maxItemsPage;
    const indexOfFirst = indexOfLast - maxItemsPage;
    const currentUsers = usersFilter.slice(indexOfFirst, indexOfLast);

    return (
      <div className="MainViewContainer col-xl-12">
        <div className="container">
          <div className="row">
            <div className="HeaderContainer col-xl-12">
              <div className="container">
                <div className="row">
                  <SearchBar
                    searchFilter={this.searchFilter}/>
                  <NewContact addNewUser={this.addNewUser}/>
                </div>
              </div>
            </div>
            <UsersList
              removeUser={this.removeUser}
              users={currentUsers}
              isFetching={isFetching}/>
          </div>
          <Pagination
            prevPage={this.prevPage}
            nextPage={this.nextPage}/>
        </div>

      </div>
    );
  }

}

export default MainView;
