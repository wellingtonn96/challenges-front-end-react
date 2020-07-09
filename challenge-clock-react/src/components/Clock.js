import React, { Component } from 'react';
import DateTime from '../lib/DateTime'
import Painel from './Painel'
import Display from './Display'

class Clock extends Component {

    constructor(props){
      super(props);
      
      this.state = {
        date: new Date(),
        isVisible: true
      }
  
      this.updateHours = this.updateHours.bind(this)
      this.dateIsVisible = this.dateIsVisible.bind(this)
    }
  
    updateHours() {
      setInterval(() => {
        this.setState({
          date: new Date()
        })
      }, 1000)
    }
  
    componentDidMount(){
      this.updateHours()
    }
  
    dateIsVisible(){
      const isVisible = this.state.isVisible
      this.setState({
        isVisible: !isVisible
      })
    }
  
    render(){
  
        let date = null
  
        if(this.state.isVisible) {
          date = ( 
            <p className="date">{DateTime.toDateString(this.state.date)}</p>
            )
        }
  
        return (
          <div>
            <Display onClick={this.dateIsVisible}/>
            <Painel DateTime={DateTime} date={date}/>
          </div>
      )
    }
  }

  export default Clock;