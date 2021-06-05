import React, {Component} from "react";
import './App.css';


class App extends Component {
  state={
    "name": "",
    "no_of_slices": 0,
    "preparation_time": 0,
    "type": "",
    "diameter":0,
    "spicinest_scale":0,
    "slices_of_bread":0,
      "selected":"true"
  }

  toggle = (event) => {
      var element = document.getElementById("mySOUP");
      element.classList.toggle("hidden");
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
              <br />
              <br />
              <br />

              <select name="type" onChange={this.handleChange} required>
                  <option value="pizza">Pizza</option>
                  <option onClick={this.toggle} value="soup">Soup</option>
                  <option selected value="sandwich">Sandwich</option>
              </select>
<br/>
              <br/>
              <input id="mySOUP" className="hidden" type="range" name="spicynest" value={this.state.spicinest_scale} placeholder="ostrość" required/>
<br/>         <input id="mySANDWICH" className="hidden" type="number" name="slices_of_bread" value={this.state.slices_of_bread} placeholder="ilość kromek"/>
              <br/>
              <input id="myPIZZA" className="hidden" type="number" name="no_of_slices" value={this.state.no_of_slices} placeholder="ilość kawałków" required/>
              <br/>

              <button type="submit">Dodaj danie</button>
          </form>
        </div>
    )
  }

}




export default App;
