import React, { Component } from 'react'
import NavigationForRest from '../../Navigation/NavigationForRest'
import StudentKard from '../../Kards/StudentKard'
import Cse from '../../Data/CSE.json'
import HomeNavbar from '../../Navigation/HomeNavbar'
import {Link} from 'react-router-dom'


import Footer from './../../Kards/Footer'
import { Container,Col,Row } from 'react-bootstrap'
//import Kard from '../Responses'

//<hr style={{backgroundColor:'black',color:'black',height:'3px',zIndex:'6'}}/>
/*
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2,
        }}
    />
);
*/
export default class CSE2k19 extends Component {
    
    constructor(){
        super() 
          this.state = {
            data: Cse
          }}
    render() {
        return (
            <div>
            <div  style={{marginTop:'0',zIndex:'5',position:'fixed',width:"100%"}}>
            <HomeNavbar/>
            </div>
            <div  style={{zIndex: "1",position:'absolute'}}>
            <NavigationForRest/>
            </div>
            <Container style={{zIndex:'3',position:'absolute',marginLeft:'18rem',marginTop:'10rem'}}>
              <Col>
               <Row>
                   <Col sm></Col>
               <Col sm="auto">
           <h3 style={{textAlign:'center'}}>Computer Science Branch</h3>
           </Col>
           <Col sm></Col>
           </Row>
           </Col>
           </Container>
           <div style={{paddingTop:'16rem',marginLeft:'16rem',marginRight:'0rem'}}>
           <Container>
               <Row className="show-grid">
                {
                    this.state.data.map(function(people,index){
                   return(
                   <Link to={"/"+people.A} pass={people} style={{textDecoration:'none'}}>
                   <Col sm style={{padding:'1.5rem',}}>
                        <StudentKard key={people.A} nameOnCard={people.B} pc={people.R}/>
                    </Col>
                   </Link>
                  
                   );
                
                })
                }
                </Row>
            </Container>
               </div>
           <div style={{zIndex:'2',position: 'absolute',}}>
                <Footer/>
                </div>

            </div>
        )
    }
}

//render={(props)=> <Kard paas={people}/>}