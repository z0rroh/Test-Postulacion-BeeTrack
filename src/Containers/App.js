import React, { Component } from 'react';
import MainView from './MainView'

class App extends Component {

  render() {
    return (
    <div className="AppContainer">
      <div className="TittleContainer col-xl-12">
        <h1>
          <span className="Text1"> Test </span>
          <span className="Text"> Beetrack </span>
        </h1>
      </div>
      <div className="container">
        <div className="row">
          <MainView/>
        </div>
      </div>
    </div>

    );
  }

}

export default App;
