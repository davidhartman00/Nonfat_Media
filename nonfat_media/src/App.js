import React, {Component} from 'react';
import './App.css';
import Navgation from './components/Navigation';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component{
  render(){
    return(
      <div>
        <Navgation/>
        <div className="container">
          <h1>STUFF HERE</h1>
        </div>
      </div>

    );
  }
}

export default App;
