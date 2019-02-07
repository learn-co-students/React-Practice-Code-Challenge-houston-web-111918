import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    currentIndex: 0,
    balance: 100
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(sushi => this.setState({sushi}))
      .then(() => this.getTheSushi())
  }

  getTheSushi = () => {
    return this.state.sushi.slice(this.state.currentIndex, this.state.currentIndex + 4)
  }

  resetVisibility = () => {
    this.setState({
      currentIndex: this.state.currentIndex + 4
    })
  }

  handleSushiClick = (clickedSushi) => {
    if(this.state.balance - clickedSushi.price >= 0) {
      this.setState({
        balance: this.state.balance - clickedSushi.price,
        sushi: this.state.sushi.map(sushi => {
          if(sushi.id === clickedSushi.id) {
            return {...sushi, eaten: true}
          }
          return sushi
        })
      })
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer resetVisibility={this.resetVisibility} handleSushiClick={this.handleSushiClick} sushi={this.getTheSushi()} />
        <Table balance={this.state.balance} sushi={this.state.sushi.filter(sushi => sushi.eaten)} />
      </div>
    );
  }
}

export default App;
