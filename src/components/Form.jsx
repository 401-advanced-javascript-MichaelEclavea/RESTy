import React from 'react';
import './Form.scss';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            url: '',
            method: ''
        };
    }
    

    handleClick = (event) => {
        const eventMethod = event.target.value;
        this.setState({ method: eventMethod });
    }

    handleSubmit = (event) =>{
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
            <h3>Method: {this.state.method} </h3>
            <label>Url:</label><input type="text" />
            <button className="btn" onClick={this.handleClick} value="GET">GET</button>
            <button className="btn" onClick={this.handleClick} value="POST">POST</button>
            <button className="btn" onClick={this.handleClick} value="PUT">PUT</button>
            <button className="btn" onClick={this.handleClick} value="DELETE">DELETE</button>
            </form>
        );
    }

}

export default Form;
