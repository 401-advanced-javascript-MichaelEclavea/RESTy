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
    console.log(e.target);
    const url = e.target.url.value;

    const response = await fetch(url);
    const data = await response.json();
    // await this.setState({ data: data });
        this.props.results(data);
 
  }


    handleClick = (event) =>{
        const method = event.target.value;
        this.setState({ method: method });

    }

    render(){
        return (
            <div id="form">
            <form onSubmit={this.handleForm}>
            <fieldset>
            <label>Url:  {this.state.method}</label>
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