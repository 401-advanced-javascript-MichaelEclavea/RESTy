import React from 'react';

import './Header.scss';

let date = new Date();
let time = date.getHours();

let day = new Date().toLocaleDateString();

let realTime = new Date().toLocaleTimeString();

class Header extends React.Component{
    constructor(){
        super();
        this.state = {
           realTime: 0
        };
    }

    render(){

  if(time < 12){
    return (
    <div id="header-container">
        <h1>Good Morning!</h1> 
        <h2>{day} {realTime}</h2>
    </div>
    );
  }
  else if(time < 18){
    return (
        <div id="header-container">
            <h1>Good Afternoon!</h1> 
            <h2>{day} {realTime}</h2>
        </div>
        );
      }
  else if(time < 24){
      if(this.state){
          return (
              <div id="header-container">
                  <h1>Good Evening!</h1> 
                  <h2>{day} {realTime}</h2>
              </div>
              );
            }

      }
    }
}


export default Header;

