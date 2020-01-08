import React, { Component } from 'react'

class Body extends Component {

  constructor(props) {
    super(props)

    this.state = {
      projects: [
        {
          name: "Word Sprint",
          img: "None",
          url: "http://wordsprint.surge.sh/",
          languages: ["HTML", "CSS", "JavaScript", "Words API"]
        }
      ]
    }
  }

  render() {
    return (
      <div className="content-wrapper" >
        <div className="intro">
          <h3><span role="img" alt="waving emoji">👋🏼</span> I'm Abir: Lead of Operations at ExigoSource & an <span id="se">Avid Software Engineer</span></h3>
        </div>
        <div className="projects">
          {this.state.projects.map((project, key) => {
            <Project
              name={project.name}
              img={project.img}
              url={project.url}
              languages={projects.languages}
              key={key}
            />
          })}
        </div>
      </div>
    )
  }
}

export default Body;