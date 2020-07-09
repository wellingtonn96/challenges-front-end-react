import React, { Component } from 'react';
import Header from './Header'
import Clock from './Clock'

class App extends Component {

    constructor(){
      super();
      
      this.state = {
        title: 'React Clock'
      }
    }
  
    render(){
  
        return (
        <div>
          <Header title={this.state.title}/>
          <Clock />
        </div>
      )
    }
  }
  
  export default App;