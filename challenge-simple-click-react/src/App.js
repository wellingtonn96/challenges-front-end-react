import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      display: 0
    }
    
    this.changeValueDisplay = this.changeValueDisplay.bind(this)
  }


  changeValueDisplay(display = 0) {
    this.setState({
      display: display
    })
  }

  

  render(){
    let display = this.state.display
    return (
      <div className="page">
        <div className="header">
          <h1>React Clicker</h1>
        </div>
        <div className="content">
          <div className="display">
            <h1>{display}</h1>
          </div>
            <Button
              onClick={() => this.changeValueDisplay(display + 1)}
              className="button-plus"
            >
                <i className="fa fa-plus"></i>
            </Button>
            <Button 
              onClick={() => this.changeValueDisplay(display = 0)}
              className="button-refresh"
              >
                <i className="fa fa-retweet"></i>
              </Button>
            <Button 
              onClick={() => this.changeValueDisplay(display - 1)}
              className="button-minus"
              >
                <i className="fa fa-minus"></i>
            </Button>
        </div>
        </div>
    )
  }
}


const Button = ({ className, onClick, children}) => 
  <button
    className={className}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>


export default App;