import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Homepage from './Components/Pages/Homepage'
import Homepage2k19 from './Components/Pages/Homepage2k19'


export default class Organis extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Homepage}/>
                <Route path="/Homepage2k19" component={Homepage2k19}/>
            </div>
        )
    }
}

