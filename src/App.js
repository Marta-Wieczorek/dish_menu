import React, {Component} from "react";
import './App.css';

// const typ = document.getElementById("1");
//
// function AdditionalProperties(){
//     if (typ.value == "pizza") {
//         return
//         <input type="number" name="no_of_slices" value={this.state.no_of_slices} placeholder="ilość kawałków" required/>;
//     } if (typ.value == "soup" ){
//         return
//         <input type="range" name="spicynest" value={this.state.spicinest_scale} placeholder="ostrość" required/>;
//     }if (typ.value == "sandwich" ){
//         return
//         <input type="number" name="slices_of_bread" value={this.state.slices_of_bread} placeholder="ilość kromek"/>;
//     }
// }


class App extends Component {
  state={
    "name": "",
    "no_of_slices": 0,
    "preparation_time": 0,
    "type": "",
    "diameter":0,
    "spicinest_scale":0,
    "slices_of_bread":0,
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

                  <input type="radio" id="1" name="type" value="pizza"/>
                  <label htmlFor="pizza">Pizza</label><br/>
                  <input type="radio" id="1" name="type" value="soup"/>
                  <label htmlFor="soup">Soup</label><br/>
                  <input type="radio" id="1" name="type" value="sandwich"/>
                  <label htmlFor="sandwich">Sandwich</label>
              <br />
              <br />
              {/*<AdditionalProperties />*/}

              <button type="submit">Dodaj danie</button>
          </form>
        </div>
    )
  }

}




export default App;
