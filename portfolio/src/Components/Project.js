import React from 'react'

const Project = (props) => {
  return (
    <div className="project" key={props.key}>
      <h1>{props.name}</h1>
      <h4>{props.img}</h4>
      <a href={props.url}>See {props.name} Live!</a>
      <div className="language-wrapper">
        {props.languages.map(lang =>
          <p className="language">{lang}</p>
        )}
      </div>
    </div>
  )
}

export default Project;