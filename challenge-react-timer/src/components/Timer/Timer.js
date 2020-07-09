import React, { Component } from 'react';

import Time from '../../lib/Time'
import InputTimer from './InputTimer'
import Button from './Button'
import Display from './Display'

class Timer extends Component {

    constructor(props) {
      super(props);
      this.state = {
        valueInSeconds: '',
        status: true
      }
      this.setValueInSeconds = this.setValueInSeconds.bind(this)
      this.startTimer = this.startTimer.bind(this)
      this.resetTimer = this.resetTimer.bind(this)
      this.intervalTimer = this.intervalTimer.bind(this)
      this.stopTimer = this.stopTimer.bind(this)
    }
  
  
    setValueInSeconds(event) {
      this.setState({
        valueInSeconds: event.target.value
      })
    }
  
    startTimer(valueInSeconds) {
      this.setState({
        status: false
      })
      this.intervalTimer(valueInSeconds)
    }
  
    intervalTimer(valueInSeconds){
      this.interval = setInterval(() => {
        if (this.state.valueInSeconds !== 0) {
          this.setState({
            valueInSeconds: valueInSeconds--
          })
        } else {
          clearInterval(this.interval)
        }
      },1000)
    }
  
    resetTimer() {
      clearInterval(this.interval)
      this.setState({
        valueInSeconds: '',
        status: true
      })
    }
  
    stopTimer(valueInSeconds){
      this.setState({
        valueInSeconds: valueInSeconds,
        status: true
      })
      clearInterval(this.interval)
    }
  
    render(){
  
      const time = new Time()
  
      let buttonPlayPause = null
  
      let inputTimer = (
        <InputTimer onChange={this.setValueInSeconds} value={this.state.valueInSeconds}/>
      )
      
      let display = (
        <Display>{time.convertValue(this.state.valueInSeconds)}</Display>
      )

      if (this.state.status){
        buttonPlayPause = (
        <Button 
          className="button-play"
          onClick={() => this.startTimer(this.state.valueInSeconds)}
          >
          <i className="fa fa-play"></i>
        </Button>
        )
      }
      
      if (!this.state.status){
        buttonPlayPause = ( 
        <Button 
          className="button-pause"
          onClick={() => this.stopTimer(this.state.valueInSeconds)}
        >
          <i className="fa fa-stop"></i>
        </Button>
        
        )
        inputTimer = null
        display =  (
          <Display className="display">
            {time.convertValue(this.state.valueInSeconds)}
          </Display>
        )

        if(this.state.valueInSeconds <= 10 && this.state.valueInSeconds !== 0) {
          if(this.state.valueInSeconds % 2 === 0){
            display =  (
              <Display className="display-alert">
                {time.convertValue(this.state.valueInSeconds)}
              </Display>
            ) 
          }
        }
      }

  
      return (
          <div className="timer">
            {display}
            {inputTimer}
            {buttonPlayPause}
            <Button
              className="button-reload"
              onClick={() => this.resetTimer()}
            >
              <i className="fa fa-refresh"></i>
            </Button>
          </div>
      )
    }
  }

  export default Timer