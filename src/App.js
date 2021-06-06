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
    "spiciness_scale":0,
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
            "spiciness_scale":0,
            "slices_of_bread":0,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://frosty-wood-6558.getsandbox.com:443/dishes', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                        'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.switchDish())
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
        this.setState({    "name": "",
            "no_of_slices": 0,
            "preparation_time": 0,
            "type": "",
            "diameter":0,
            "spiciness_scale":0,
            "slices_of_bread":0,});
    }

    AdditionalProperties() {
        if (dish === "pizza") {
            return <div className="showed"><label  htmlFor="no_of_slices">Number of Slices</label><br/>
                <input  type="number" min="1" name="no_of_slices" value={this.state.no_of_slices} placeholder="No of Slices" onChange={this.handleChange}/>
                <br/>
                <label  htmlFor="diameter">Diameter</label><br/>
                <input  type="number" step="any" name="diameter" min="0.01" value={this.state.diameter} placeholder="Diameter" onChange={this.handleChange}/>
            </div>;
        } if (dish === "soup" ){
            return  <div className="showed" ><label htmlFor="spiciness_scale">Spaciness scale</label><br/>
                <input type="number" min="1" max="10" step="1" name="spiciness_scale" value={this.state.spiciness_scale} placeholder="spiciness" onChange={this.handleChange}/></div>
                ;
        }if (dish === "sandwich" ){
            return  <div className="showed"><label htmlFor="slices_of_bread">Slices of bread</label><br/>
                <input type="number" min="1" name="slices_of_bread" value={this.state.slices_of_bread} placeholder="slices of bread" onChange={this.handleChange}/>
            </div>;
        }
    }

    switchDish = () =>{
        switch(dish) {
            case "pizza": return(
                {
                    "name":this.state.name,
                    "preparation_time":this.state.preparation_time,
                    "type":"pizza",
                    "no_of_slices":parseInt(this.state.no_of_slices),
                    "diameter":parseFloat(this.state.diameter)
                }
            )
            case "soup": return(
                {
                    "name":this.state.name,
                    "preparation_time":this.state.preparation_time,
                    "type":"soup",
                    "spaciness_scale":parseInt(this.state.spaciness_scale)
                }
            )
            case "sandwich": return(
                {
                    "name":this.state.name,
                    "preparation_time":this.state.preparation_time,
                    "type":"sandwich",
                    "slices_of_bread":parseInt(this.state.slices_of_bread)
                }
            )
            default:      return(
                <p>Choose type of dish!</p>
            )
        }
    }




  render(){
        this.conditional_input=this.AdditionalProperties();
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
              placeholder="enter dish name"
              required
          />
            <br />
            <br /><label htmlFor="preparation_time">Preparation Time:</label> <br />
              <input
                  type="time"
                  name="preparation_time"
                  step="2"
                  min="1"
                  value={this.state.preparation_time}
                  onChange={this.handleChange}
                  placeholder="1"
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
