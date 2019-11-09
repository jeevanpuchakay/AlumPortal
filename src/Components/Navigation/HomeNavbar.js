import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav, Container} from 'react-bootstrap'
import './../../App.css'
//import {Grid} from 'styled-css-grid'


const logo="https://i.imgur.com/x6rronw.jpg?3";

export default class HomeNavbar extends Component {
    render() {
        return (
            <div style={{margin:'0px',width:'100%'}}>
            <Navbar className="navbar-color" style={{height:'7rem'}}>
          <img src={logo} alt="alumcell"/>
          <Container style={{overflow:'visible',marginLeft:'2rem'}}>
            <table>
          <text className="text-white" style={{margin:"0px",fontSize:'300%'}}>
          Yearbook portal
        </text>
        <br />
        <div style={{marginTop:'5%'}}>
        <text className="text-white" style={{margin:'0px',fontSize:'200%',}}>
          Alumni cell IIT Indore
        </text>
        </div>
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
