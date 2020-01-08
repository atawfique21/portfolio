import React, { Component } from 'react'
import Project from './Project'


class Body extends Component {

  constructor(props) {
    super(props)

    this.state = {
      projects: [
        {
          name: "Word Sprint",
          img: "../Resources/word.png",
          url: "./",
          languages: ["HTML", "CSS", "JavaScript", "Words API"]
        }
      ],
      typed: false,
      count: 0
    }
  }

  typeWriter = () => {
    let i = 0;
    let txt = ['an Avid Software Engineer.', "I'm business-minded.", 'a learner.', 'an Entrepreneur.', "I'm detail-oriented.", "I'm creative."];
    let count = this.state.count;
    let speed = 100;
    let currentcomponent = this;

    if (this.state.typed === false) {
      let typing = setInterval(function () {
        if (i < txt[count].length) {
          document.getElementById("input").innerHTML += txt[count].charAt(i);
          i++;
        }
        if (i >= txt[count].length) {
          count++
          if (count >= txt.length) {
            currentcomponent.setState({
              typed: true,
              count: 0
            })
          } else {
            currentcomponent.setState({
              typed: true,
              count
            })
          }
          clearInterval(typing)
        }
      }, speed);
    }
  }



  blinking = () => {
    setInterval(function () { document.getElementById("cursor").classList.toggle("zeroop"); }, 500)
  }

  removing = () => {
    let currentcomponent = this;
    let typeWriter = this.typeWriter

    if (this.state.typed === true) {
      setTimeout(() => {
        let txt = document.getElementById("input").innerHTML
        let i = txt.length;
        let speed = 30;
        function deleter() {
          if (i >= 0) {
            txt = txt.slice(0, txt.length - 1)
            document.getElementById("input").innerHTML = txt
            i--;
            setTimeout(deleter, speed);
          }
          if (i === 0) {
            currentcomponent.setState({
              typed: false
            })
            typeWriter()
          }
        }
        deleter()
      }, 1500)
    }
  }

  componentDidMount = () => {
    this.typeWriter()
    this.blinking()
  }

  componentDidUpdate = () => {
    this.removing()
  }

  render() {
    return (
      <div className="content-wrapper" >
        <div className="intro">
          <h3><span role="img" alt="waving emoji">👋🏼</span> I'm Abir: Lead of Operations at ExigoSource & <span id="typewriter"><span id="input"></span><span id="cursor">|</span></span></h3>
        </div>
        <div className="projects-wrapper">
          {this.state.projects.map((project, key) =>
            <Project
              name={project.name}
              img={project.img}
              url={project.url}
              languages={project.languages}
              key={key}
            />
          )}
        </div>
      </div>
    )
  }
}

export default Body;