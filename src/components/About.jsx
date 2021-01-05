import React from 'react';
import './About.scss';

function About(){
    return (
        <div id='help-box'>
        <h2 id='one'>About RESTy</h2>
        <fieldset style={{ padding: '30px 30px'}}>
        <p id='two'>This site is a simple tool you can use to quickly search an API and get back the data in JSON format. The data will be displayed in the text area. To start your search just enter the url and hit go. If a valid api address was entered, you will see the results in the text box. To view the history of your searches click the history tab.</p>
        </fieldset>
        </div>
    );
}

export default About;