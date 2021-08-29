import React, { Component } from 'react'
import Navbar from '../navbar/Navbar'

export class PageNotFound extends Component {
    render() {
        return (
            <>
            <Navbar title="GramoNews" />
            <h1 className='text-center' style={{position: "absolute", top:"50%", transform:"translate(50%, 0%)"}}>Error : 404. Page not found.</h1>
            </>
        )
    }
}

export default PageNotFound
