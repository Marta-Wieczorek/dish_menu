import React, {Component} from "react";
import './App.css';

let dish = 'pizza';

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

  conditional_input;

    AdditionalProperties() {
        if (dish === "pizza") {
            // console.log('pizza');

            return (<input type="number" name="no_of_slices" value={this.state.no_of_slices} placeholder="ilość kawałków" required/>);
        } if (dish === "soup" ){
            // console.log('soup');
            return <input type="range" name="spicinest_scale" value={this.state.spicinest_scale} placeholder="ostrość" required/>;
        }if (dish === "sandwich" ){
            // console.log('sandwich');
            return <input type="number" name="slices_of_bread" value={this.state.slices_of_bread} placeholder="ilość kromek"/>;
        }
    }

  // toggleSoup = (event) => {
  //     var element = document.getElementById("mySOUP");
  //     element.classList.toggle("hidden");
  // }
  // togglePizza = (event) => {
  //     var element = document.getElementById("myPIZZA");
  //     element.classList.toggle("hidden");
  // }
  // toggleSandwich = (event) => {
  //       var element = document.getElementById("mySANDWICH");
  //       element.classList.toggle("hidden");
  //   }



handleChange = (event) => {
      // console.log('event: ', event);
      // console.log('target: ', event.target);
      // console.log('value: ', event.target.value);
      this.setState({

          [event.target.name]:event.target.value,
          formError:null
      })
    dish = event.target.value;
}


  render(){
        this.conditional_input=this.AdditionalProperties();
        console.log(this.conditional_input);
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
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="sandwich">Sandwich</option>
              </select>
              <br/>
              <br/>
              {this.conditional_input}
{/*              <div id="mySOUP" className="hidden" ><label htmlFor="spicinest_scale">Spacinest scale</label><br/>*/}
{/*                  <input type="number" min="0" max="10" step="1" name="spicinest_scale" value={this.state.spicinest_scale} placeholder="spicinest" onChange={this.handleChange}/></div>*/}

{/*<br/>         <div id="mySANDWICH" className="hidden"><label htmlFor="slices_of_bread">Slices of bread</label><br/>*/}
{/*              <input type="number" min="0" name="slices_of_bread" value={this.state.slices_of_bread} placeholder="slices of bread" onChange={this.handleChange}/>*/}
{/*          </div><br/>*/}
{/*              <div id="myPIZZA" className="hidden"><label  htmlFor="no_of_slices">Number of Slices</label><br/>*/}
{/*              <input  type="number" min="0" name="no_of_slices" value={this.state.no_of_slices} placeholder="No of Slices" onChange={this.handleChange}/>*/}
{/*              <br/>*/}
{/*              <label  htmlFor="diameter">Diameter</label><br/>*/}
{/*              <input  type="number" step="any" name="diameter" min="0" value={this.state.diameter} placeholder="Diameter" onChange={this.handleChange}/>*/}
{/*          </div>*/}
              <button type="submit">Add dish to menu</button>
          </form>
        </div>
    )
  }

}




export default App;
