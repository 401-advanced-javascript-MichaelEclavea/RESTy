import React from 'react';
import './Form.scss';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.renderUrl = this.renderUrl.bind(this);
        this.renderSubmit = this.renderSubmit.bind(this);
    }
    renderUrl(event){
        this.renderUrl({value: event.target.value});
        event.preventDefault();
    }

    renderSubmit(event){
        alert('event has occurred: ' + this.state.value);
        alert(event);
        alert(event.target.value);
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit = {this.renderUrl}>
            <label>
                Url:
                <input type="text"/>
            </label>
            <input type="submit" value="Submit" onClick={this.renderUrl}/>
            </form>
        );
    }

}

export default Form;
