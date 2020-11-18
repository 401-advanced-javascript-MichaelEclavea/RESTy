import React from 'react';



class Results extends React.Component{
    // constructor(props){
    //     super(props);

    // }
    render(){
       let data = this.props.results;
        return (
            <div> 
            <p>{data.name}</p>
            </div>
        );

    }
    
}

export default Results;

/* <textarea name="textbox" rows="10" cols="70" value={`Request:${this.state.method} URL:${this.state.url}}></textarea> */