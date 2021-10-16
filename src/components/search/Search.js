import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";
import JSONDATA from './suggestions.json'
import './search.css'

export class search extends Component {

    constructor() {
        super();
        this.state = {
            input: "",
            showSuggestions: true
        }
    }

    capitalize = (given_input) => {
        return (given_input.substring(0, 1).toUpperCase() + given_input.substring(1, given_input.length))
    }

    render() {
        return (
            <>

            <div style={{display: "flex", flexDirection: "column"}}>

                <form className="d-flex">
                    <input className="form-control me-2" type="search" value={this.state.input} onChange={(event) => { 
                        this.setState({ input: event.target.value }) 
                        }} placeholder="Search" aria-label="Search" />

                    <button className="btn btn-outline-success" type="submit" onClick={(event) => {
                        event.preventDefault();  // This prevents page from refreshing
                    }}>
                        <Link style={{ textDecoration: "none", color: "black" }} to={(this.state.input.toLowerCase() in { science: "", technology: "", sports: "", business: "", entertainment: "", health: "" }) ? `/${this.state.input}` : `/pageNotFound`}>Search</Link>
                    </button>
                </form>

                <ul style={{position: "absolute", width: "97%",margin: "38px 0px", zIndex: 10}} className={`list-group mb-0 ${(this.state.showSuggestions)?'showSuggestions':'hideSuggestions'}`}>
                    {JSONDATA.filter((val)=>{
                        if (this.state.input === ""){
                            return ""
                        }
                        else if (val.category.toLowerCase().includes(this.state.input)) {
                            return val
                        }
                    }).map((val) => {
                        if (val !== ""){
                            return (<li className="list-group-item"><Link style={{color: "black", textDecoration: "none"}} to={`/${val.category}`}>{this.capitalize(`${val.category}`)}</Link></li>)
                        }
                    })}
                </ul>
            </div>
            </>
        )
    }
}

export default search
