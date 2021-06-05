import React, {Component} from "react";
import './App.css';

class App extends Component {

  state={
    "diameter": 0,
    "name": "wpisz nazwę dania",
    "no_of_slices": 0,
    "preparation_time": 0,
    "type": "typ dania",
    "id":1,
  }

  render(){
    return (
        <div>
          <h2>Kreator MENU</h2>

          <form>
            <label htmlFor="name">Nazwa dania:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Wpisz nazwę dania"
              required
          />

              <button type="submit">Dodaj danie</button>
          </form>
        </div>
    )
  }

}


export default App;
