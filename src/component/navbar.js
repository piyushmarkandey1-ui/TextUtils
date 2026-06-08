import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
         <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
     
<Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
              </li>
                 <li className="nav-item">
                    <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
                 </li>
              </ul>
           
            <div className={`form-check form-switch ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="switchCheckDefault"
                onChange={props.toggleMode}
                checked={props.mode === 'dark'}
              />
              <label className="form-check-label" htmlFor="switchCheckDefault">
                {props.mode === 'dark' ? 'Disable Dark Mode' : 'Enable Dark Mode'}
              </label>
              <button className="btn btn-danger mx-1" onClick={() => props.changeTheme("red")}>
  Red
</button>

<button className="btn btn-success mx-1" onClick={() => props.changeTheme("green")}>
  Green
</button>

<button className="btn btn-primary mx-1" onClick={() => props.changeTheme("blue")}>
  Blue
</button>

<button className="btn btn-dark mx-1" onClick={() => props.changeTheme("dark")}>
  Dark
</button>

<button className="btn btn-light mx-1" onClick={() => props.changeTheme("light")}>
  Light
</button>
           </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  aboutText: 'About text here',
};
