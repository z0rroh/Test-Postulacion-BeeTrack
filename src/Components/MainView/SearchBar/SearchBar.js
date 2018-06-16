import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state={
      text: "",
    }
    this.onChange = this.onChange.bind(this)
  }
  // Cambia el estado 'texto' y ejecuta la funcion searchfilter enviada desde el componente padre MainView
  onChange(e){
    this.setState({text: e.target.value.substr(0,20)})
    this.props.searchFilter(e.target.value)
  }

  render() {
    return (
      <div className="SearchBarContainer col">
          <form className="col-xl-8 form-inline my-2 my-lg-0">
            <input
              onChange={this.onChange}
              value={this.state.text}
              className="form-control col-xl-12"
              placeholder="Buscar Contacto . . ."
              aria-label="Search"/>
          </form>
      </div>
    );
  }

}

export default SearchBar;
