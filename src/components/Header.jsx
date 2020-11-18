import React from 'react';

import './Header.scss';

let date = new Date();
let time = date.getHours();

class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            seconds: 0
        };
    }
    
    tick(){
        this.setState(state =>({
            seconds: state.seconds 
        }));
    }
    
    componentDidMount(){
        this.interval = setInterval(() => this.tick(), 1000);
    }
    

    
    render(){

  if(time < 12){
    return (
    <div id="header-container">
        <h1>Good Morning!</h1> 
        <h2>{new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</h2>
    </div>
    );
  }
  else if(time < 18){
    return (
        <div id="header-container">
            <h1>RESTy</h1>
            <h1>Good Afternoon!</h1> 
            <h2>{new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</h2>
        </div>
        );
      }
  else if(time < 24){
      if(this.state){
          return (
              <div id="header-container">
                  <h1>Good Evening!</h1> 
                  <h2>{new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</h2>
              </div>
              );
            }

      }
    }
}


export default Header;

