import React from 'react';
import './Help.scss';

function Help(){
    return(
        <div style={{margin: 'auto', textAlign: 'center', marginTop: '40px', width: '40vw'}}>
            <h2 style={{fontSize: '2.2em'}}>Submit For Questions or Feedback</h2>
    <form action="mailto:usermike671@gmail.com" method="post" enctype="text/plain">
      <div>
        <label for="name">Name: 
          <input type="text" name="name" id="name" style={{marginLeft: '8px'}}/>
        </label>
      </div>
      <div>
        <label for="email">Email:
          <input type="text" name="email" id="email" style={{marginLeft: '8px', marginTop: '10px'}}/>
        </label>
      </div>
      <div>
        <label>Comments:</label>
        <br />
        <textarea name="comments" rows="12" cols="35" style={{ width: '39vw', resize: 'none'}} placeholder='Type your message...'></textarea>
      </div>
      <div>
        <input type="submit" name="submit" value="Send" style={{ width: 'auto', padding: '3px 5px', borderRadius: '6px', marginRight: '7px'}}/>
        <input type="reset" name="reset" value="Reset" style={{ width: 'auto', padding: '3px 5px', borderRadius: '6px'}}/>
      </div>
    </form>
        </div>
    );
}


export default Help;