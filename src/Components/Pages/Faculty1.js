import React, { Component } from 'react'
import NavigationForRest from '../Navigation/NavigationForRest'
import HomeNavbar from './../Navigation/HomeNavbar'


import { Container,Col,Row } from 'react-bootstrap'

import Footer from './../Kards/Footer'


//const Background="https://image.shutterstock.com/image-photo/university-alumni-graduate-education-message-260nw-559783975.jpg"

class Faculty1 extends Component {
    render(){
        return (
            <div>
            <div  style={{margin:'0',zIndex:'5',position:'fixed',width:"100%"}}>
            <HomeNavbar/>
            </div>
            <div  style={{zIndex: "1",position:'absolute'}}>
            <NavigationForRest/>
            </div>
           <Container style={{zIndex:'3',position:'absolute',marginLeft:'18rem',marginTop:'10rem'}}>
              <Row>
              <Col sm>
           </Col>
               <Col sm="auto">
           <h3>Message From Alumni Coordinator</h3>
           </Col>
           <Col sm>
           </Col>
           </Row>
           <Row>
               <Col sm="auto">
               <img src="https://i.imgur.com/qDJMbSw.jpg" style={{marginLeft:'22rem'}} alt="Vivek" />
           </Col>
           
           </Row>
           </Container>
           <div style={{zIndex:'10',position:'absolute',marginTop:'80rem'}}>
           <Footer />
           </div>
            </div>
        )
    
}}

export default Faculty1;

//<Row>
 //          </Row>