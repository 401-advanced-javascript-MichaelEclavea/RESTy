import React from 'react';
import './Form.scss';

class Form extends React.Component{
    constructor(){
        super();
        this.state = {
            url: '',
        };
    }
    formSubmit = (event) => {
         this.setState ({
            url: event.target.value
        });
        console.log(this.state.url);
    }

    updateUrl = (event) => {
        let item = event.target.value;
        console.log(event.value);
         if(event.target.name === 'url'){
             alert(event.target.value);
         }
         return item;
    }
        render() {
            return (
                <div>
                    <form type="GET">
                           <label >URL:</label>
                           <input type="text" id="url" name="url"></input>
                           <input className="btn" type="submit" onClick = {this.updateUrl}></input>
                        </form>
                        <br/>
                        <form>
                            <button className="btn-rest" name="GET">GET</button>
                            <button className="btn-rest" name="POST">POST</button>
                            <button className="btn-rest" name="PUT">PUT</button>
                            <button className="btn-rest" name="DELETE">DELETE</button>
                    </form>
                    <br/><br/>
            <textarea name="textarea" id="textarea" cols="100" rows="20">{}</textarea>
                    
                </div>            
                    
            );
                
        }
    }


export default Form;



