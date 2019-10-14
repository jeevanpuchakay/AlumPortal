import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav, Container} from 'react-bootstrap'
import './../../App.css'
//import {Grid} from 'styled-css-grid'


export default class HomeNavbar extends Component {
    render() {
        return (
            <div>
            <Navbar className="navbar-color" style={{height:"80px"}}>
          <img src="https://i.imgur.com/ReBk5qo.jpg?2" alt="alumcell"/>
          <Container >
            <table>
          <h2 className="text-white">
          Alumni portal
        </h2>
        <h3 className="text-white">
          Alumni cell IIT Indore
        </h3>
        </table>
        </Container>
        <Nav className="ml-auto">
          <a class="nav-item nav-link text-white" href="/">
          Link1
          </a>
          <a class="nav-item nav-link text-white" href="/">
          Link2
          </a>
          <a class="nav-item nav-link text-white" href="/">
          Link3
          </a>
        </Nav>
        </Navbar> 
            </div>
        )
    }
}
