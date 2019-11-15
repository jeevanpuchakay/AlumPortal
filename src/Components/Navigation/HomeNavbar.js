import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav, Container} from 'react-bootstrap'
import './../../App.css'
//import {Grid} from 'styled-css-grid'


const logo="https://i.imgur.com/rPWEd9x.jpg";
const home="http://www.iiti.ac.in/";

export default class HomeNavbar extends Component {
    render() {
        return (
            <div style={{margin:'0px',width:'100%'}}>
            <Navbar className="navbar-color" style={{height:'7rem'}}>
          <img src={logo} alt="alumcell" style={{height:'7rem',width:'8rem'}}/>
          <Container style={{overflow:'visible',marginLeft:'2rem',height:'7rem'}}>
            <table>
          <text className="text-white" style={{marginTop:'.5rem',fontSize:'2rem'}}>
          Yearbook portal
        </text>
        <div><br/></div>
        <text className="text-white" style={{fontSize:'1.5rem',}}>
         Alumni cell IIT Indore
        </text>
        
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
