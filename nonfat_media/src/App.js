import React, {Component} from 'react';
// import './App.css';
import Navgation from './components/Navigation';
import Breakdowns from './components/Breakdowns'

class App extends Component{
  state = {
      "projects": [
        {
          "added": 1485174060,
          "title": "BELLEVILLE COP",
          "type": "Feature Film",
          "castingDirector": "Lori Wyman",
          "startDate": 1492560000
        },
        {
          "added": 1485145920,
          "title": "WATER BY THE SPOONFUL",
          "type": "Theatre",
          "castingDirector": "Natalia Macker",
          "startDate": 1491177600
        },
        {
          "added": 1485147480,
          "title": "MARCO",
          "type": "Feature Film",
          "castingDirector": "Christina Jo'Leigh",
          "startDate": 1486425600
        },
        {
          "added": 1485139860,
          "title": "IN THE CUT - THE JAY FOUNDATION #305",
          "type": "Episodic",
          "castingDirector": "Phaedra Harris",
          "startDate": 1486944000
        },
        {
          "added": 1485142740,
          "title": "MOVIE NIGHT",
          "type": "Webisode",
          "castingDirector": "Samantha Schwartzman",
          "startDate": 1487203200
        }
      ]
  }
  render(){
    return(
      <div>
        <Navgation/>
        <div className="container">
          <div className="nfm-header">
            <h1>Open Breakdowns</h1>
          </div>
          <Breakdowns breakdowns={this.state.projects}/>
        </div>
      </div>

    );
  }
}

export default App;
