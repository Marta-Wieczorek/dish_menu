import React, {Component} from "react";
import './App.css';

class App extends Component {

  state={
    "diameter": 0,
    "name": "nazwa-dania",
    "no_of_slices": 0,
    "preparation_time": 0,
    "type": "typ dania",
    "id":1,
  }

  render(){
    return (
        <div>
          <h2>Kreator MENU</h2>
        </div>
    )
  }

}


export default App;
