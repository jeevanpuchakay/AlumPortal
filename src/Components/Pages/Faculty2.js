import React, { Component } from 'react'
import NavigationForRest from '../Navigation/NavigationForRest'
import HomeNavbar from './../Navigation/HomeNavbar'


import { Container,Col,Row } from 'react-bootstrap'

import Footer from './../Kards/Footer'





//const Background="https://image.shutterstock.com/image-photo/university-alumni-graduate-education-message-260nw-559783975.jpg"

class Faculty2 extends Component {
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
               <Col>
               <Row>
           <h3 style={{display:'flex',marginLeft:'20rem'}}>Message From Team</h3>
           </Row>
           </Col>
           </Container>
           <div  style={{zIndex:'3',position:'absolute',marginLeft:'24rem',marginTop:'18rem'}}>
           <Container>
               <Row><text style={{fontSize:'2rem',fontFamily:'arial'}}>{pa1}</text></Row>
               <Row><text style={{fontSize:'2rem',fontFamily:'arial'}}>{pa2}</text></Row>
               <Row><text style={{fontSize:'2rem',fontFamily:'arial'}}>{pa3}</text></Row>
               <Row><text style={{fontSize:'2rem',fontFamily:'arial'}}>{pa4}</text></Row>
               <Row><text style={{fontSize:'2rem',fontFamily:'arial'}}>{pa5}</text></Row>
               <Row><text style={{fontSize:'2rem',fontFamily:'arial'}}>{pa6}</text></Row>
               <Row><text style={{fontSize:'2rem',fontFamily:'arial'}}>{pa7}</text></Row>
               <Row><text style={{fontSize:'2rem',fontFamily:'arial'}}>{pa8}</text></Row>
               <Row><text style={{fontSize:'2rem',fontFamily:'arial'}}>{pa9}</text></Row>
     </Container>
           </div>
           <div style={{zIndex:'10',position:'absolute',marginTop:'80rem'}}>
           <Footer />
           </div>
            </div>
        )
    
}}

export default Faculty2;


const pa1="Since six of the batches have already graduated from the Institute, we are on the verge"
const pa2="of developing a solid Alumni network whose roots lie within their Alma Mater. To fulfil"
const pa3="this, we have launched schemes like Alumni Smart Card which serves as a solemn proof"
const pa4="that we decorate our Alumni. We have also worked together to launch the official Alumni"
const pa5="Portal of IIT Indore which encourages those associated to be part of the network. Also,"
const pa6="we made attempts like preparing a Canvas unique to a batch with their imprints and"
const pa7="remarks. Our most laborious and enthralling task altogether has been working on the"
const pa8="Alumni Magazine. The yearbook portal will be made available for every batch hereafter "
const pa9="and will be a tradition of the alumni cell. We are very excitedly present you the yearbook portal." 