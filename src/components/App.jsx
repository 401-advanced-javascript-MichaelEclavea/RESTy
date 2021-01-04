import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
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
import Fortune from './Fortune';

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
        {/* <Route path="/"/> */}
        <Header />
        <Form results={this.handleResults} />
        <Fortune/>
        <Results results={this.state.data} />
      
        <Switch>
        <Route path="/about" exact component={About} />
        <Route path="/help" exact component={Help} />
        <Route path="/history" exact component={History}/>
        </Switch>
        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;




