import React, { Component } from 'react'
import loading from '../../loading.gif';

export class Loading extends Component {
    render() {
        return (
            <div>
                <img src={loading} alt="Loading..."></img>
            </div>
        )
    }
}

export default Loading
