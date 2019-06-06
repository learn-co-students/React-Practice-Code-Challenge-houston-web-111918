import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    startDisplay: 0,
    wallet: 100
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

  eatSushi = (s) => {
    if (this.state.wallet >= s.price ) {
      this.setState({
        sushis: this.state.sushis.map( (sushi) => {
          if (sushi.id === s.id) { 
            return {...sushi, eaten: true} 
          } else {
            return sushi
          }
        })
      }, () => this.chargePlate(s) )
    }
  }

  chargePlate = (s) => {
    this.setState({
      wallet: this.state.wallet - s.price
    })
  }

  render() {
    let eatenSushis = this.state.sushis.filter( sushi => sushi.eaten )
  
    return (
      <div className="app">
        <SushiContainer  sushis={this.sushiDisplay()} onMoreSushi={this.onMoreSushi} eatSushi={this.eatSushi}/> 
        <Table eatenSushis={eatenSushis} wallet={this.state.wallet}/>
      </div>
    );
  }
}

export default App;