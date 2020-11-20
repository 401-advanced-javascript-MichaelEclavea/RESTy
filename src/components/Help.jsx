import React from 'react';
import './Help.scss';

function Help(){
    return(
        <div id='help-box'>
        <h2 id='one'>Welcome to the help page.</h2>
        <p id='two'>This site is to help you search an API and pull back the data in JSON format. The data will be displayed in the text area. To start your search, click on the (searchAPI) link in the navbar. A form will pull up onto the page. Just enter the url and hit go. To view the history of your searches click the history tab.</p>
        </div>
    );
}


export default Help;