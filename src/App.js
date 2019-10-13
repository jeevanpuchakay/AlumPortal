import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import HomeNavbar from './Components/Navigation/HomeNavbar'

import Organis from './Organis'

export default class App extends Component {
  render() {
    return (
      <div>
        <HomeNavbar/>
        <Organis/>
      </div>
    )
  }
}


//http://iiti.ac.in/home/photo_gallery#gallery-2