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
            <label htmlFor="name">Nazwa dania:</label><br />
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Wpisz nazwę dania"
              required
          />
            <br />
            <br /><label htmlFor="preparation_time">Czas przygotowania:</label> <br />
              <input
                  type="number"
                  name="preparation_time"
                  value={this.state.preparation_time}
                  placeholder="0"
                  required
                  />
              <br />
              <br /><label htmlFor="type">Typ dania</label><br />
              <select
                  name="type"
                  required>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="sandwich">Sandwich</option>
              </select>
              <br />
              <br />


              <button type="submit">Dodaj danie</button>
          </form>
        </div>
    )
  }

}


export default App;
