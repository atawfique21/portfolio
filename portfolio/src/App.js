import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  // TODO: I need to find a way to make the "Avid Software Engineer change occasionally."

  render() {
    return (
      <div className="App" >
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
