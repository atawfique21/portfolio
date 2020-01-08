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
        <div className="content-wrapper">
          <p>This is where the content goes.</p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
