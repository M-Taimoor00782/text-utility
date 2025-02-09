import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router';


const Navbar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.About}</Link>
            </li>
          </ul>
          <div className="bg-secondary p-3 m-2 rounded-circle color" onClick={props.changedark}></div>
          <div className="bg-body p-3 m-2 rounded-circle color" onClick={props.changeWhite} ></div>
          <div className="bg-dark p-3 m-2 rounded-circle color" onClick={props.changeBlack}></div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
          <div className={`text-${props.mode === "light"? "dark":"light"} px-3 fs-2 pointer`} onClick={props.toggle} >
          <i className={`fa-solid fa-${props.mode === "light" ? "moon":"sun"}`}></i>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string,
  About: PropTypes.string
}


Navbar.defaultProps = {
  title: 'set title here',
  About: 'set about here'
}