import React from 'react';
import { Link } from "react-router-dom";
import './Header.scss';

let date = new Date();
let time = date.getHours();
let current = new Date().toLocaleTimeString();
let currentTime = current.slice(0, 4);

const styleLink = {
  textDecoration: 'none',
};

class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            seconds: currentTime
        };
    }
    
    tick(){
        this.setState(() =>({
            seconds: currentTime
        }));
    }
    
    componentDidMount(){
        this.interval = setInterval(() => this.tick(), 60000);
    }

    render(){

  if(time < 12){
    return (
    <div id="header-container">
             <nav>
          <ul>
            <li>
            <Link to="/RESTy" style={styleLink}>Home</Link>
            </li>
            <li>
              <Link to="/about" style={styleLink}>About</Link>
            </li>
            <li>
              <Link to="/help" style={styleLink}>Help</Link>
            </li>
            <li>
              <Link to="/history" style={styleLink}>History</Link>
            </li>
          </ul>
        </nav>
        <h1>Good Morning!</h1> 
        <h2>{new Date().toLocaleDateString()} {currentTime}am</h2>
    </div>
    );
  }
  else if(time < 18){
    return (

        <div id="header-container">
         <nav>
          <ul>
            <li>
            <Link to="/RESTy" style={styleLink}>Home</Link>
            </li>
            <li>
              <Link to="/about" style={styleLink}>About</Link>
            </li>
            <li>
              <Link to="/help" style={styleLink}>Help</Link>
            </li>
            <li>
              <Link to="/history" style={styleLink}>History</Link>
            </li>
          </ul>
        </nav>
        
            <h1>Good Afternoon!</h1> 
            <h2>{new Date().toLocaleDateString()} {currentTime}pm</h2>
        </div>
        );
      }
  else if(time < 24){
      if(this.state){
          return (
              <div id="header-container">
                       <nav>
          <ul>
            <li>
            <Link to="/RESTy" style={styleLink}>Home</Link>
            </li>
            <li>
              <Link to="/about" style={styleLink}>About</Link>
            </li>
            <li>
              <Link to="/help" style={styleLink}>Help</Link>
            </li>
            <li>
              <Link to="/history" style={styleLink}>History</Link>
            </li>
          </ul>
        </nav>
                  <h1>Good Evening!</h1> 
                  <h2>{new Date().toLocaleDateString()} {currentTime}pm</h2>
              </div>
              );
            }

      }
    }
}


export default Header;

