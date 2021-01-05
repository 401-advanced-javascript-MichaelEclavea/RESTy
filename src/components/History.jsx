import React, {useEffect, useState} from 'react';
import './History.scss';


let array = [];
 



function History(){
  const [history, setHistory] = useState([]);
    var url = JSON.parse(localStorage.getItem('url'));
    // var method = JSON.parse(localStorage.getItem('method')); 
  
    function historyList (){
    array.push(url);

    setHistory(array);
  }

  useEffect(() =>{
   historyList();
  }, [useEffect]);

    function clearHistory(){
      localStorage.clear();
      setHistory([]);
      array = [];
      console.log('cleared array', array);
    }
 return (
   <div style={{textAlign: 'center', margin: 'auto'}}>

    <button onClick={clearHistory}>Clear History</button>
     <div id="savedSearch">
     <h5>Search Results History</h5>
     
     <ul>
      {history.map((value, idx) => {
        return <li key={idx}>{idx + 1}. {value}</li>;
        }
      )}
     </ul>
       
     </div>
     </div>
 );

}

export default History;