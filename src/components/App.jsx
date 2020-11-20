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

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: {}
    }; 
    this.handleResults = this.handleResults.bind(this);
  }

  handleResults(data){
    this.setState({ data: data });
    console.log(this.state.data);
  }

  render(){
    return (
      <Router>
      <div>
        <Route path="/">
        <Header />
        </Route>
        
        <Switch>
       
       
        <Route path="/form" exact>  <Form results={this.handleResults} /><Results results={this.state.data} />
        </Route>
        <Route path="/about" exact component={About} />
        <Route path="/help" exact component={Help} />
        <Route path="/history" exact><History /></Route>
        </Switch>
        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;




