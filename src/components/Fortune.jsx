const fortune = require('fortune-cookie');

function Fortune(){   

 return(
     <>
     <h2 style={{textAlign: 'center', marginTop: '10px'}}>Fortune: {fortune[1]}</h2>
     </>
 );

}

export default Fortune;