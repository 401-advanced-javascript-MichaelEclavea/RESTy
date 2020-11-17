import React from 'react';

import './Header.scss';

let date = new Date();
let time = date.getHours();

let day = new Date().toLocaleDateString();
// let seconds = new Date().toLocaleTimeString();
// console.log(seconds[6]+seconds[7]);

class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            seconds: 1
        };
    }
    
    tick(){
        this.setState(state =>({
            seconds: state.seconds + 1 
        }));
    }
    
    componentDidMount(){
        this.interval = setInterval(() => this.tick(), 1000);
    }
    
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    
    render(){

  if(time < 12){
    return (
    <div id="header-container">
        <h1>Good Morning!</h1> 
        <h2>{day} Seconds:{this.state.seconds}</h2>
    </div>
    );
  }
  else if(time < 18){
    return (
        <div id="header-container">
            <h1>Good Afternoon!</h1> 
            <h2>{day} Seconds:{this.state.seconds}</h2>
        </div>
        );
      }
  else if(time < 24){
      if(this.state){
          return (
              <div id="header-container">
                  <h1>Good Evening!</h1> 
                  <h2>{day} Seconds: {this.state.seconds}</h2>
              </div>
              );
            }

      }
    }
}


export default Header;

