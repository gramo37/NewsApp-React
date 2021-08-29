import React, { Component } from 'react'
import { Link } from "react-router-dom";


// import PropTypes from 'prop-types'

export class Navbar extends Component {
    // static propTypes = {

    // }

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">{this.props.title}</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className={`nav-link ${this.props.active === 'home'?'active':""}`} aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${this.props.active === 'science'?'active':""}`} to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${this.props.active === 'technology'?'active':""}`} to="/technology">Technology</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${this.props.active === 'sports'?'active':""}`} to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${this.props.active === 'business'?'active':""}`} to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${this.props.active === 'entertainment'?'active':""}`} to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${this.props.active === 'health'?'active':""}`} to="/health">Health</Link>
                                </li>

                            </ul>
                            {/* Dropdown element */}
                            {/* <div className="d-flex">
                                <div className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" style={{color: "black"}} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Country
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" id="in" onClick={this.props.selectCountry} to="/in/">India</Link></li>
                                        <li><Link className="dropdown-item" id="us" onClick={this.props.selectCountry} to="/">United States</Link></li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>

                    </div>
                </nav>


            </>
        )
    }
}

export default Navbar
