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
  }

  toggleSoup = (event) => {
      var element = document.getElementById("mySOUP");
      element.classList.toggle("hidden");
  }
  togglePizza = (event) => {
      var element = document.getElementById("myPIZZA");
      element.classList.toggle("hidden");
  }
  toggleSandwich = (event) => {
        var element = document.getElementById("mySANDWICH");
        element.classList.toggle("hidden");
    }



handleChange = (event) => {
      console.log('this ma wartość:', this);
      this.setState({

          [event.target.name]:event.target.value,
          formError:null
      })
}


  render(){
    return (
        <div className="myStyle">
          <h2 className="App-header">MENU Creator</h2>

          <form>
            <label htmlFor="name">Dish Name:</label><br />
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Wpisz nazwę dania"
              required
          />
            <br />
            <br /><label htmlFor="preparation_time">Preparation Time:</label> <br />
              <input
                  type="time"
                  name="preparation_time"
                  step="2"
                  value={this.state.preparation_time}
                  onChange={this.handleChange}
                  placeholder="0"
                  required
                  />
              <br />
              <br />
              <br />
              <br />
<label htmlFor="type">Dish Type:</label><br/>
              <select name="type" onChange={this.handleChange} required>
                  <option onClick={this.togglePizza} value="pizza">Pizza</option>
                  <option onClick={this.toggleSoup} value="soup">Soup</option>
                  <option onClick={this.toggleSandwich} value="sandwich">Sandwich</option>
              </select>
<br/>
              <br/>
              <div id="mySOUP" className="hidden" ><label htmlFor="spicinest_scale">Spacinest scale</label><br/>
                  <input type="number" min="0" max="10" step="1" name="spicinest_scale" value={this.state.spicinest_scale} placeholder="spicinest" onChange={this.handleChange}/></div>

<br/>         <div id="mySANDWICH" className="hidden"><label htmlFor="slices_of_bread">Slices of bread</label><br/>
              <input type="number" min="0" name="slices_of_bread" value={this.state.slices_of_bread} placeholder="slices of bread" onChange={this.handleChange}/>
          </div><br/>
              <div id="myPIZZA" className="hidden"><label  htmlFor="no_of_slices">Number of Slices</label><br/>
              <input  type="number" min="0" name="no_of_slices" value={this.state.no_of_slices} placeholder="No of Slices" onChange={this.handleChange}/>
              <br/>
              <label  htmlFor="diameter">Diameter</label><br/>
              <input  type="number" step="any" name="diameter" min="0" value={this.state.diameter} placeholder="Diameter" onChange={this.handleChange}/>
          </div>
              <button type="submit">Add dish to menu</button>
          </form>
        </div>
    )
  }

}




export default App;
