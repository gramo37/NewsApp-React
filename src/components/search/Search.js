import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";

export class search extends Component {

    constructor() {
        super();
        this.state = {
            input: ""
        }
    }

    render() {
        return (
            <>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" value={this.state.input} onChange={(event) => { this.setState({ input: event.target.value }) }} placeholder="Search" aria-label="Search" />

                    <button  className="btn btn-outline-success" type="submit" onClick={(event) => {
                        event.preventDefault();
                        this.props.processSearch(this.state.input);
                    }}>
                        <Link style={{textDecoration: "none", color: "black"}} to={(this.state.input.toLowerCase() in {science: "", technology: "", sports: "", business: "", entertainment: "",health: ""}) ?`/${this.state.input}`:`/pageNotFound`}>Search</Link>
                        {/* <Link style={{textDecoration: "none", color: "black"}} to={`/${this.state.input}`}>Search</Link> */}
                    </button>
                </form>
            </>
        )
    }
}

export default search
