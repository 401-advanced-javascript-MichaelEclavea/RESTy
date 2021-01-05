import React, {useEffect, useState} from 'react';
import './History.scss';


let array = [];
let count = 0; 



function History(){
  const [history, setHistory] = useState([]);
    var url = JSON.parse(localStorage.getItem('url'));
    // var method = JSON.parse(localStorage.getItem('method'));
    let save = `${url}`;
    console.log('history', url);
    array.push(save);
    console.log('array', array);

    useEffect(() =>{
      setHistory(save);
      array.push(history);
    }, [history]);


    function clearHistory(){
      setHistory([]);
      array = [];
      console.log('cleared array', array);
    }
 return (
   <div>

    <button onClick={clearHistory}>Clear History</button>
     <div id="savedSearch">
     <h5>Search Results History</h5>
     <ul>
      {array.map((value) => {
      
        return <li key={count}>{count}. {value}</li>;

        }
      )}
     </ul>
       
     </div>
     </div>
 );

}

export default History;