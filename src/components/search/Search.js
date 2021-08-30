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
            showSuggestions: false
        }
    }

    capitalize = (given_input) => {
        return (given_input.substring(0, 1).toUpperCase() + given_input.substring(1, given_input.length))
    }

    render() {
        return (
            <>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" value={this.state.input} onChange={(event) => { this.setState({ input: event.target.value, showSuggestions: true }) }} placeholder="Search" aria-label="Search" />

                    <button className="btn btn-outline-success" type="submit" onClick={(event) => {
                        event.preventDefault();
                        this.props.processSearch(this.state.input);
                    }}>
                        <Link style={{ textDecoration: "none", color: "black" }} to={(this.state.input.toLowerCase() in { science: "", technology: "", sports: "", business: "", entertainment: "", health: "" }) ? `/${this.state.input}` : `/pageNotFound`}>Search</Link>
                    </button>
                </form>
                <ul className={`list-group ${(this.state.showSuggestions)?'showSuggestions':'hideSuggestions'}`}>
                    {JSONDATA.filter((val)=>{
                        if (this.state.input === ""){
                            return val
                        }
                        else if (val.category.toLowerCase().includes(this.state.input)) {
                            return val
                        }
                    }).map((val) => {
                        return (<li className="list-group-item"><Link style={{color: "black", textDecoration: "none"}} to={`/${val.category}`}>{this.capitalize(`${val.category}`)}</Link></li>)
                    })}
                </ul>
            </>
        )
    }
}

export default search
