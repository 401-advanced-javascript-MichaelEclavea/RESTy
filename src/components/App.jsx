import React from 'react';
import './App.scss';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Results from './Results';
import History from './History';

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
      <div>
        <Header />
        <Form results={this.handleResults} />
        <History />
        <Results results={this.state.data} />
        <Footer />
      </div>
    );
  }
}

export default App;




