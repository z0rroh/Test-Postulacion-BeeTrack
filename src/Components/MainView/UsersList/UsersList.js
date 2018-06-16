import React, { PureComponent } from 'react';
import UserItem from './UserItem'
import axios from 'axios'

class UsersList extends PureComponent {


  render() {
    const {isFetching, users} = this.props;
    const usersListMap = users.map((user) =>{
      return (<UserItem key={user.id} user={user} removeUser={this.props.removeUser}/>) //Recorre la lista de usuarios, enviando cada elemento al componente UserItem
    })
    return (
      <div className="UsersListContainer col-xl-12">
        {
          isFetching ?
          (<div className="Loading">
            <h1>Loading ...</h1>
          </div>) :
          (<div className="container">
            <div className="row card-group">
              <div className="CardTitle card col-xl-4">
                <span>
                  Nombre
                </span>
              </div>
              <div className="CardTitle card col-xl-8">
                <span>
                  Descripción
                </span>
              </div>
            </div>
              {usersListMap}
          </div>)
        }
      </div>
    );
  }

}

export default UsersList;
