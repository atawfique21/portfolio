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

  smoothScroll = (e, elementId) => {
    e.preventDefault();
    let MIN_PIXELS_PER_STEP = 16;
    let MAX_SCROLL_STEPS = 30;
    let target = document.getElementById(elementId);
    let scrollContainer = target;
    do {
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    let targetY = 0;
    do {
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
    } while (target = target.offsetParent);

    let pixelsPerStep = Math.max(MIN_PIXELS_PER_STEP,
      (targetY - scrollContainer.scrollTop) / MAX_SCROLL_STEPS);

    let stepFunc = function () {
      scrollContainer.scrollTop =
        Math.min(targetY, pixelsPerStep + scrollContainer.scrollTop);

      if (scrollContainer.scrollTop >= targetY) {
        return;
      }

      window.requestAnimationFrame(stepFunc);
    };

    window.requestAnimationFrame(stepFunc);
  }

  render() {
    return (
      <div className="App" >
        <Header
          onClick={this.smoothScroll}
        />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
