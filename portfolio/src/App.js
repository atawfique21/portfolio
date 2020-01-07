import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
