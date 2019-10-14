import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import HomeNavbar from './Components/Navigation/HomeNavbar'

import Organis from './Organis'

//  >
    
//import NavigationForRest from './Components/Navigation/NavigationForRest'


export default class App extends Component {
  render() {
    return (
      <div>
        <div>
      <HomeNavbar/>
      </div>
        <Organis/>
      </div>
    )
  }
}


//http://iiti.ac.in/home/photo_gallery#gallery-2