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
           <Container style={{zIndex:'3',position:'absolute',marginLeft:'18rem',marginTop:'10rem'}}>
               <Col>
               <Row>
           <h3 style={{alignContent: 'center',justifyContent:'center',display:'flex'}}> YearBook 2K19 Batch</h3>
           </Row><Row>
           <img src={Picture} alt="all" />
           </Row>
           </Col>
           </Container>
          
           <div style={{zIndex:'10',position:'absolute',marginTop:'80rem'}}>
           <Footer />
           </div>
            </div>
        )
    }
}

//        
