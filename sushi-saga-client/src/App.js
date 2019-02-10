import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    startDisplay: 0 
  }

  componentDidMount() {
  fetch(API)
  .then( res => res.json())
  .then( json => this.setState(
    {
      sushis: json.map( (sushi) => ({...sushi, eaten: false})) 
    }
  ))}

  sushiDisplay = () => {
    return this.state.sushis.slice(this.state.startDisplay, this.state.startDisplay+4)
  }

  onMoreSushi = () => {
    this.setState({
      startDisplay: this.state.startDisplay+4
    })
  }

  render() {
  
  
    return (
      <div className="app">
        <SushiContainer  sushis={this.sushiDisplay()} onMoreSushi={this.onMoreSushi}/> 
        <Table />
      </div>
    );
  }
}

export default App;