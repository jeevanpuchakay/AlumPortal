import React, { Component } from 'react'




import { Link } from 'react-router-dom'

import { Container, Row, Col } from 'react-bootstrap'

export default class Footer extends Component {
    render() {
        return (
            <div>
            <div style={{ backgroundColor: '#3b5998' }}>
                    <h4 style={{ alignContent: 'center', display: 'flex', flexWrap: 'wrap', justifyContent: "center", color: 'white' }}>About Alumni Cell </h4>
                    <p style={{ color: 'white',fontSize:'1.5rem' }}>
                        {about2}
                    </p>
                    <Container>
                        <Row>
                            <Col>
                                <Row style={{color:'white'}}>
                                    Pages
                                </Row>
                            <Row style={{ marginTop: '0rem',fontSize:'1rem',color:'white' }}>
                                <Link to="/" style={{textDecoration:'none',color:'white'}}>
                                    Alumni Portal
                            </Link>
                            </Row>
                            <Row style={{ marginTop: '0rem',fontSize:'1rem',color:'white' }}>
                                <Link to="/" style={{textDecoration:'none',color:'white'}}>
                                   Magnum Opus
                            </Link>
                            </Row> 
                            <Row style={{ marginTop: '0rem',fontSize:'1rem',color:'white' }}>
                                <Link to="/" style={{textDecoration:'none',color:'white'}}>
                                    Alumni Cell
                            </Link>
                            </Row>                              
                           </Col>
                           <Col>
                                <Row style={{color:'white',fontSize:'1rem'}}>
                                    Contact Us
                                </Row>
                            <Row style={{ marginTop: '0rem',fontSize:'1rem',color:'white' }}>
                                Room No:511 Chromium Building(Pod1D)
                            </Row>
                            <Row style={{ marginTop: '0rem',fontSize:'1rem',color:'white' }}>
                                <Link to={website} style={{textDecoration:'none',color:'white'}}>
                                IIT Indore
                            </Link>
                            </Row> 
                            <Row style={{ marginTop: '0rem',fontSize:'1rem',color:'white' }}>
                                Mail :  coordinatoralumni@iiti.ac.in
                            </Row>  
                           </Col>
                       </Row>
                   </Container>
               </div >
               <div style={{ alignContent: 'center', display: 'flex', flexWrap: 'wrap', justifyContent: "center", color: 'black' }}>
                       Copyright @ Alumni Cell 
                   </div>
            </div>
        )
    }
}





//const about = "The yearbook portal is an initiative taken by the alumni cell to save the memories of all the students passing out of the campus. Historically, yearbooks were little more than picture books, often including literary works and art. With the explosion of desktop publishing in the last few decades, yearbooks have become even more journalistic, reflecting not only the design and photographic capabilities now available, but including coverage that showcases everything from reporting of events to first-person profiles";


const about2 = "Alumni Cell works to foster the relationship between Alumni and its institute. We organise our flagship event Magnum Opus and undertook various initiatives like Alumni Magazine, Yearbook Portal, Alumni Garden, etc. Magnum Opus will be organized on the 4th of January and Reunion will be organised on 5th of January. We look forward to taking up a lot many such initiatives such as the beginning of Alumni Chapters and more successions of Alumni Meet in future."


const website="http://www.iiti.ac.in/";