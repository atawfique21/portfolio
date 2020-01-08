import React, { Component } from 'react'

class Body extends Component {

  constructor(props) {
    super(props)

    this.state = {
      projects: [
        {
          project_name: "Word Sprint",
          project_img: "None",
          project_url: "http://wordsprint.surge.sh/",
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
      </div>
    )
  }
}

export default Body;