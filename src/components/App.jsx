import React from 'react';
import {
  BrowserRouter as Router,

  Route
} from "react-router-dom";
import './App.scss';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Results from './Results';
import History from './History';
import About from './About';
import Help from './Help';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: null
    }; 
    this.handleResults = this.handleResults.bind(this);
  }

  handleResults(data){
    this.setState({data});

    console.log('original data!!', this.state.data);
  }

  render(){
    return (
      <Router>
      <div>
        <Header />
        <Route exact path="/RESTy">

        <Form results={this.handleResults} />
        <Results results={this.state.data}/>
        </Route>
       
        <Route path="/about" exact component={About} />
        <Route path="/help" exact component={Help} />
        <Route path="/history" results={this.state.data} exact component={History}/>
        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;




