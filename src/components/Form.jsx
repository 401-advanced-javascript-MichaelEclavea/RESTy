import React from 'react';
import './Form.scss';



class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            url: '',
            method: '',    
            data: {}
        };
    }

    handleForm = async (e) => {
    e.preventDefault();
    if(e){
        const method = this.state.method; 
        const url = e.target.url.value;
        localStorage.setItem(`url`, JSON.stringify(e.target.url.value));
        localStorage.setItem(`method`, JSON.stringify(this.state.method));
        const response = await fetch(url);
        const data = await response.json();
        this.props.results(data);
    }
    return e;
  }


    handleClick = (event) =>{
        const method = event.target.value;
        this.setState({ method: method });

    }

    render(){
        const style = {
            color: 'black'
        };
        return (
            <div id="form">
            <form onSubmit={this.handleForm}>
            <fieldset>
            <label style={style}>URL: {this.state.method}</label>
            <input name="url" type="text" />
            <button id="go" type="submit">Go</button>   
            </fieldset>
            </form>
            
            <div id="btn-container"></div>
            <button className="btn" onClick={this.handleClick} value="GET">GET</button>
            <button className="btn" onClick={this.handleClick} value="POST">POST</button>
            <button className="btn" onClick={this.handleClick} value="PUT">PUT</button>
            <button className="btn" onClick={this.handleClick} value="DELETE">DELETE</button>
            </div>
        );
    }

}

export default Form;