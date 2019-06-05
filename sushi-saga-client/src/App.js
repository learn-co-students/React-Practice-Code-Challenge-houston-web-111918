import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

let update = (array, id, value) => {
  return array.map(el => {
      if(el.id === id){
        return {...el, ...value}
    } else {
      return el
    }
  })
}

class App extends Component {

  state = {
    sushi: [],
    index: 0,
    balance: 100
  }
  
  
  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(res => {
      this.setState({
        sushi: res
      })
      
    })
    .then(res => {
      this.state.sushi.map(s=>(
        s.eaten = false
      ))
    })
  }
  
  eat = (sushi) => {
    if(this.state.balance >= sushi.price){
    this.setState({
      balance: this.state.balance - sushi.price,
      sushi: update(this.state.sushi, sushi.id, {eaten: true})
    })
  }
  }

  more = (ci) =>{
    console.log('ci', ci)
    this.setState({
      index: ci + 4
    })

  }

  render() {
    // console.log(this.state.index+4)
    console.log(this.state.sushi.filter(s => s.eaten === true))
    return (
      
      <div className="app">
        <SushiContainer sushi={this.state.sushi.slice(this.state.index,this.state.index+4)} eat={this.eat} more={this.more}/>
        
        <Table
        sushi={this.state.sushi.filter(s => s.eaten === true)} balance={this.state.balance}/>
      </div>
    );
  }
}

export default App;