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

    handleDishChange = (event) => {
        this.resetState();
        dish = event.target.value;
        this.handleChange(event);
    }

    handleChange = (event) => {
        this.setState({

            [event.target.name]:event.target.value,
            formError:null
        })
    }


    resetState = () => {
        this.setState({
            "no_of_slices": 0,
            "diameter":0,
            "spicinest_scale":0,
            "slices_of_bread":0,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/questions', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                        'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        }).then(responce => {
            console.log(responce)
        }).catch(error => {
            console.log(error)
        })
        this.setState({    "name": "",
            "no_of_slices": 0,
            "preparation_time": 0,
            "type": "",
            "diameter":0,
            "spicinest_scale":0,
            "slices_of_bread":0,});
    }

    AdditionalProperties() {
        if (dish === "pizza") {
            // console.log('pizza');

            return <div className="showed"><label  htmlFor="no_of_slices">Number of Slices</label><br/>
                <input  type="number" min="0" name="no_of_slices" value={this.state.no_of_slices} placeholder="No of Slices" onChange={this.handleChange}/>
                <br/>
                <label  htmlFor="diameter">Diameter</label><br/>
                <input  type="number" step="any" name="diameter" min="0" value={this.state.diameter} placeholder="Diameter" onChange={this.handleChange}/>
            </div>;
        } if (dish === "soup" ){
            // console.log('soup');
            return  <div className="showed" ><label htmlFor="spicinest_scale">Spacinest scale</label><br/>
                <input type="number" min="0" max="10" step="1" name="spicinest_scale" value={this.state.spicinest_scale} placeholder="spicinest" onChange={this.handleChange}/></div>
                ;
        }if (dish === "sandwich" ){
            // console.log('sandwich');
            return  <div className="showed"><label htmlFor="slices_of_bread">Slices of bread</label><br/>
                <input type="number" min="0" name="slices_of_bread" value={this.state.slices_of_bread} placeholder="slices of bread" onChange={this.handleChange}/>
            </div>;
        }
    }






  render(){
        this.conditional_input=this.AdditionalProperties();
        console.log(this.conditional_input);
    return (
        <div className="myStyle">
          <h2 className="App-header">MENU Creator</h2>

          <form onSubmit={this.handleSubmit}>
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
              <select name="type" onChange={this.handleDishChange} required>
                  <option value="pizza" >Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="sandwich">Sandwich</option>
              </select>
              <br/>
              <br/>
              {this.conditional_input}

<br/>

              <button type="submit">Add dish to menu</button>
          </form>
        </div>
    )
  }

}




export default App;
