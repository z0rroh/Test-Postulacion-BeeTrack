import React, { Component } from 'react';

class Pagination extends Component {

  render() {
    return (
      <div className="row justify-content-end">
        <nav className="PaginationContainer">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" onClick={this.props.prevPage}>Anterior</a>
            </li>
            <li className="page-item">
              <a className="page-link" onClick={this.props.nextPage}>Siguiente</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

}

export default Pagination;
