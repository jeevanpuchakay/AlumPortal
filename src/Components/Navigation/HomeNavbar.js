import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav, Container} from 'react-bootstrap'
import './../../App.css'
//import {Grid} from 'styled-css-grid'


const logo="https://i.imgur.com/x6rronw.jpg?3";
const home="http://www.iiti.ac.in/";

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
        <Nav className="ml-auto" style={{marginRight:'1rem'}}>
          <a class="nav-item nav-link text-white" href={home}>
         Home
          </a>
          <a class="nav-item nav-link text-white" href="/">
          Alumni Cell
          </a>
          <a class="nav-item nav-link text-white" href="/">
          Alumni Portal
          </a>
        </Nav>
        </Navbar> 
            </div>
        )
    }
}
