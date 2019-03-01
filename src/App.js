import React, { Component } from "react";

import "./App.css";
import Bit from "./Bit/Bit";
import NumericDisplay from './NumericDisplay/NumericDisplay';

class App extends Component {
  state = {
    byte: [0, 0, 0, 0, 0, 0, 0, 0]
  };

  handleBitClick = index => {    
    let byte = [...this.state.byte];
    byte[index] ^= 1;
    this.setState({byte});
  };

  render() {
    let byte = (
      <div>
        {this.state.byte.map((bit, index) => (
          <Bit key={index} value={bit} bitClicked={() => this.handleBitClick(index)} />
        ))}
      </div>
    );

    return (
      <div className="App">
        <NumericDisplay leading="HEX" byte={this.state.byte} hex={true}/>
        <NumericDisplay leading="DEC" byte={this.state.byte} hex={false}/>
        <div className="byte-display">
          {byte}        
        </div>
      </div>
    );
  }
}

export default App;
