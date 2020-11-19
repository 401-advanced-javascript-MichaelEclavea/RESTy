import React from 'react';
import './History.scss';


let array = [];

function History(){
    var url = JSON.parse(localStorage.getItem('url'));
    var method = JSON.parse(localStorage.getItem('method'));
    let save = `${method} = ${url} `;
    array.push(save);
    console.log('array', array);
 return (
     <div id="savedSearch">
     <h5>Search Results History</h5>
     <ul>
      {array.map((value, index) => {
        return <li key={index}>{value}</li>;
      })}
     </ul>
       
     </div>
 );

}

export default History;