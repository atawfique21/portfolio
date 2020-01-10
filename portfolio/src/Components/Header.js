import React from 'react'

const Header = (props) => {
  return (
    <div className="header">
      <h1>ABIR TAWFIQUE</h1>
      <h4>Software Engineer | 7+ Years Start-Up Experience</h4>
      <div className="nav">
        <button onClick={(e) => { props.onClick(e, "intro") }}>Intro</button>
        <button onClick={(e) => { props.onClick(e, "workdiv") }}>My Work</button>
      </div>
    </div >
  )
}

export default Header;