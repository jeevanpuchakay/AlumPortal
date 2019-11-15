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
               <img src="https://i.imgur.com/qDJMbSw.jpg" style={{marginLeft:'22rem',height:'30rem',width:'30rem'}} alt="Vivek" />
           </Col>   
           </Row>
           </Container>
           <div  style={{zIndex:'3',position:'absolute',marginLeft:'24rem',marginTop:'52rem'}}>
           <Container>
           <Row><text style={{fontSize:'2rem',fontFamily:'arial'}}>{pa1}</text></Row>
           <Row style={{marginTop:'3rem'}}><text style={{fontSize:'2rem',fontFamily:'arial'}}>{pa2}</text></Row>
           <Row style={{marginTop:'3rem'}}><text style={{fontSize:'2rem',fontFamily:'arial'}}>{pa3}</text></Row>
           <Row style={{marginTop:'3rem'}}><text style={{fontSize:'2rem',fontFamily:'arial'}}>{pa4}</text></Row>
           <Row style={{marginTop:'3rem'}}><text style={{fontSize:'2rem',fontFamily:'arial'}}>{pa5}</text></Row>
           <Row style={{marginTop:'3rem'}}><text style={{fontSize:'2rem',fontFamily:'arial'}}>{pa6}</text></Row>
           <Row style={{marginTop:'1rem'}}><text style={{fontSize:'2rem',fontFamily:'arial'}}>{pa7}</text></Row>
           <Row style={{marginTop:'1rem'}}><text style={{fontSize:'2rem',fontFamily:'arial'}}>{pa8}</text></Row>

     </Container>
           </div>
           <div style={{zIndex:'10',position:'absolute',marginTop:'150rem'}}>
           <Footer />
           </div>
            </div>
        )
    
}}

export default Faculty1;

//<Row>
 //          </Row>
 

 const pa1="Congratulations to our newest alumni, the Class of 2019! We are proud to count you among the growing number who call IIT Indore their alma mater. As you revel in your achievements, remember your alma mater, the momentous experience you had here, and how it molded you into what you are today."
const pa2="Your future accomplishments and the prosperity of IIT Indore are now inextricably intertwined. We will need your support to flourish and continually enhance the worth of the degree that you are awarded upon graduation."
const pa3="As you and IIT Indore both move forward together, I encourage you to stay connected to your alma mater through the alumni cell and its activities"
const pa4="The Alumni cell is dedicated to strengthen the link between IIT Indore and its alumni, to enhance our institute's development by providing opportunities for both the alumni as well as the students, to usher you back to the campus to meet fellow alumni and relive the nostalgic moments. On your part, we hope that you will continue to walk the journey with IIT Indore for generations to come."

const pa5="We wish you all the best in all your future endeavors. Continue to make IIT Indore proud!"
const pa6="With warm regards,"
const pa7="Alumni Coordinator"
const pa8="IIT Indore"