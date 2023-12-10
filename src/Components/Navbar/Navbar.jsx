import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';


const Navbar = (props) => {
  const [isChecked, setIsChecked] = useState(true);
  const switchChangeHandler = ()=>{
    setIsChecked(!isChecked);
    {props.ModeHandler()}
  }
  const style = {
    backgroundColor: isChecked ? "green" : "gray",
    color: isChecked ? "white" : "black",
    border: "none",
    boxShadow: "none"
  };

    const changeModeStatement = () => {
      if(props.Mode === "dark"){
        return("Enable Light Mode");
      }else{
        return("Enable Dark Mode");
      }
    }
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg  navbar-${props.Mode} text-${props.Mode === "dark" ? "light" : "dark"}`}
        style={{backgroundColor:"transparent"}}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">
                  {props.homeText}
                </Link> */}
                <a className="nav-link active" aria-current="page" href="#">
                  {props.homeText}
                </a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/About/About">
                  {props.aboutText}
                </Link> */}
              {/* </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2 bg-dark text-light"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                // defaultChecked
                checked={isChecked}
                style={style}
                onChange={switchChangeHandler}
              />
              <label
                className={`form-check-label `}
                htmlFor="flexSwitchCheckChecked"
                
              >{changeModeStatement()}
                
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
//concept of proptypes learnt


Navbar.prototype = {title: PropTypes.string.isRequired,//isrequired is used when you dont want to leave the prop empty. If it will be empty this will return an error
                    homeText: PropTypes.string,
                    aboutText: PropTypes.string
                };

//concept of default props


Navbar.defaultProps = {title:'Title',
                    homeText:'Home Here',
                    aboutText:'About Us'
                };


export default Navbar
