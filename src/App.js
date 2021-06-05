import React, {Component} from "react";
import './App.css';


// function AdditionalProperties(){
//     if (this.state.type.id == "pizza") {
//         return
//         <input type="number" name="no_of_slices" value={this.state.no_of_slices} placeholder="ilość kawałków" required/>;
//     } if (this.state.type.id == "soup" ){
//         return
//         <input type="range" name="spicynest" value={this.state.spicinest_scale} placeholder="ostrość" required/>;
//     }if (this.state.type.id == "sandwich" ){
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

handleChange = (event) => {
      this.setState({
          [event.target.name]:event.target.value,
          formError:null
      })
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
              onChange={this.handleChange}
              placeholder="Wpisz nazwę dania"
              required
          />
            <br />
            <br /><label htmlFor="preparation_time">Czas przygotowania:</label> <br />
              <input
                  type="number"
                  name="preparation_time"
                  value={this.state.preparation_time}
                  onChange={this.handleChange}
                  placeholder="0"
                  required
                  />
              <br />
              <br /><label htmlFor="type">Typ dania</label><br />

                  <input type="radio" id="pizza" name="type" value={this.state.type} onChange={this.handleChange} checked required/>
                  <label htmlFor="pizza">Pizza</label><br/>
                  <input type="radio" id="soup" name="type" value={this.state.type} onChange={this.handleChange}/>
                  <label htmlFor="soup">Soup</label><br/>
                  <input type="radio" id="sandwich" name="type" value={this.state.type} onChange={this.handleChange}/>
                  <label htmlFor="sandwich">Sandwich</label>
              <br />
              <br />
              {/*<AdditionalProperties />*/}

              <select name="type" onChange={this.handleChange}>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="sandwich">Sandwich</option>
              </select>

              <button type="submit">Dodaj danie</button>
          </form>
        </div>
    )
  }

}




export default App;
