import React, {Component} from 'react';
import './App.css';
import Navgation from './components/Navigation';
import Breakdowns from './components/Breakdowns'

class App extends Component{
  render(){
    return(
      <div>
        <Navgation/>
        <div className="container">
          <h1>STUFF HERE</h1>
          <Breakdowns/>
        </div>
      </div>

    );
  }
}

export default App;
