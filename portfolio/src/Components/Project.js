import React from 'react'

const Project = (props) => {
  return (
    <div className="project" key={props.key}>
      <h1>{props.name}</h1>
      <div className="img-button-cont">
        <img src={props.img} className="project-pictures"></img>
        <a href={props.url} target="_blank">See {props.name} Live!</a>
      </div>
      <div className="language-wrapper">
        <h3>CREATED WITH</h3>
        <div className="languages">
          {props.languages.map(lang =>
            <p className="language">{lang}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Project;