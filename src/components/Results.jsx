import React from 'react';
import JSONPretty from 'react-json-pretty';
import './Results.scss';


class Results extends React.Component{
    constructor(props){
        super(props);
        
    }
    
    render(){
        let data = this.props.results;
        console.log(data);

            return (
                <div id='json-container'> 
                <JSONPretty id="json-pretty" data={data}></JSONPretty>
                </div>
            );

 
       

    }
    
}

export default Results;

