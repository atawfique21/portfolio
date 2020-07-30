import React, { Component } from 'react'
import Project from './Project'


class Body extends Component {

  constructor(props) {
    super(props)

    this.state = {
      projects: [
        {
          name: "Word Sprint",
          description: "A Typing Game",
          img: "https://media.giphy.com/media/TKAi2uwEoiRwN48IIM/giphy.gif",
          url: "http://wordsprint.surge.sh/",
          languages: ["HTML", "CSS", "JavaScript", "Words API", "Event-Listeners"]
        },
        {
          name: "Better Boards",
          description: "A Trello Clone",
          img: "https://media.giphy.com/media/PmdRqMbGNkFz7AEFvA/giphy.gif",
          url: "http://betterboards.surge.sh/",
          languages: ["React", "BeautifulDND", "HTML", "CSS", "JavaScript"]
        },
        {
          name: "Resolve",
          description: "Social Resolutions Tracking App",
          img: "https://i.imgur.com/k5bV1Fi.png",
          url: "http://resolve.surge.sh/",
          languages: ["React", "Express", "PSQL", "HTML", "CSS", "JavaScript"]
        },
        {
          name: "Blend on The Water",
          description: "Resturant Website Redesign",
          img: "https://i.imgur.com/bRP9Abq.png",
          url: "http://blend.surge.sh/",
          languages: ['React', "React-Burger-Menu", "HTML", "CSS", "JavaScript"]
        },
        {
          name: "My Portfolio",
          description: "This Application",
          img: "https://media.giphy.com/media/f7Z0eJhyg86DVoZdee/giphy.gif",
          url: "./",
          languages: ["React", "HTML", "CSS", "JavaScript"]
        }
        // TODO: Potnetially add future projects just for more depth? AKA resturant one since we know what that one is so far.
        // TODO: Make paralax effect 
        // TODO: Make a droop shaadow class with interval that changes and glows differently, this might be too flashy though.
      ],
      typed: false,
      count: 0
    }
  }

  typeWriter = () => {
    let i = 0;
    let txt = ['solutions-oriented.', 'a learner.', 'an Entrepreneur.', "detail-oriented.", "business-minded.", "quality-driven.", "a creative."];
    let count = this.state.count;
    let speed = 95;
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
        let speed = 40;
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
        <div className="intro" id="intro">
          <h3><span role="img" alt="waving emoji">👋🏼</span> I'm Abir: a Software Engineer at ExigoSource & I'm <span id="typewriter"><span id="input"></span><span id="cursor">|</span></span></h3>
          <div className="emojis"><h4>🐆🚵🏽‍♂️🌮🎮🏝</h4></div>
        </div>
        <div className="section-header" id="workdiv">
          <h1 className='my-work-h1'>MY WORK</h1>
          <div className="projects-wrapper">
            {this.state.projects.map((project, key) =>
              <Project
                name={project.name}
                description={project.description}
                img={project.img}
                url={project.url}
                languages={project.languages}
                key={key}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Body;