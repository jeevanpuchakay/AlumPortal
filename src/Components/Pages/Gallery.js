import React, { Component } from 'react'


import HomeNavbar from './../Navigation/HomeNavbar'

import NavigationForRest from './../Navigation/NavigationForRest'


import {Col,Row,Container } from 'react-bootstrap'


import Footer from './../Kards/Footer'

import load from './../Data/Gallery.json'

import GalleryKard from './../Kards/GalleryKard'

export default class Gallery extends Component {
    render() {
        return (
            <div>
            <div  style={{marginTop:'0',zIndex:'5',position:'fixed',width:"100%"}}>
            <HomeNavbar/>
            </div>
            <div  style={{zIndex: "4",position:'absolute'}}>
            <NavigationForRest/>
            </div>
            <Container style={{zIndex:'3',position:'absolute',marginLeft:'18rem',marginTop:'10rem'}}>
             <Col>
               <Row>
                   <Col sm></Col>
               <Col sm="auto">
           <h3 style={{textAlign:'center'}}>Gallery</h3>
           </Col>
           <Col sm></Col>
           </Row>
           </Col>
           </Container>
           <div style={{position:'absolute',marginTop:'12rem',marginLeft:'22rem'}}>
               <Container style={{zIndex:'5',position:'absolute'}}>
               <Row className="show-grid">
                  {
                      load.map((data,index)=>{
                          return(   
                   <Col sm style={{paddingTop:'5rem'}}>
                       <GalleryKard packet={data.A}/>
                   </Col>
                          )
                      })
                  }
                  </Row>
               </Container>
           </div>
           
           <div style={{zIndex:'2',position: 'absolute',paddingTop:'300rem'}}>
                <Footer/>
                </div>
            </div>
        )
    }
}
