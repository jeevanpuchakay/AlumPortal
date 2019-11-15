import React, { Component } from 'react'

import NavigationForRest from '../Navigation/NavigationForRest'
//import Divider from '@material-ui/core/Divider';
import HomeNavbar from '../Navigation/HomeNavbar'



import { Container,Col,Row } from 'react-bootstrap'
//const Background="https://image.shutterstock.com/image-photo/university-alumni-graduate-education-message-260nw-559783975.jpg";
import Footer from './../Kards/Footer'

const Picture="https://i.imgur.com/vhbpQqY.jpg?3"
// from './../Data/_K6A9276.JPG'





export default class Homepage2k19 extends Component {
    render() {
        return (
            <div>
            <div  style={{margin:'0',zIndex:'5',position:'fixed',width:"100%"}}>
            <HomeNavbar/>
            </div>
            <div  style={{zIndex: "1",position:'absolute'}}>
            <NavigationForRest/>
            </div>
            <Container style={{zIndex:'3',position:'absolute',marginLeft:'18rem',marginTop:'7rem'}}>
              <Row>
              <Col>
               <Row>
                   <Col sm></Col>
               <Col sm="auto">
           <h3 style={{textAlign:'center'}}>YearBook 
               <br/>
               Class of 2K19</h3>
           </Col>
           <Col sm></Col>
           </Row>
           </Col>
              </Row>
              <Row>
              <img src={Picture} style={{height:'50rem',width:'90rem'}} alt="all" />
              </Row>
           </Container>
          
           <div style={{zIndex:'10',position:'absolute',marginTop:'80rem'}}>
           <Footer />
           </div>
            </div>
        )
    }
}

//        
