import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Homepage from './Components/Pages/Homepage'


export default class Organis extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Homepage}/>
            </div>
        )
    }
}

