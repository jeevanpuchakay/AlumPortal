import React, { Component } from 'react'
import NavigationForRest from '../../Navigation/NavigationForRest'
import StudentKard from '../../Kards/StudentKard'
import MEC from '../../Data/MEC.json'
import HomeNavbar from '../../Navigation/HomeNavbar'
import {Link} from 'react-router-dom'


import { Container,Col,Row } from 'react-bootstrap'

import {Grid,Cell} from 'styled-css-grid';

import Footer from './../../Kards/Footer'

//import Kard from '../Responses'
/*
//<hr style={{backgroundColor:'black',color:'black',height:'3px',zIndex:'6'}}/>
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
/*

            <div  style={{position:'absolute',zIndex:'10',marginLeft:'240px',top:'100px'}} >
            <ColoredLine color="black"/>
            </div>
            
            */

export default class MEC2k19 extends Component {
    
    constructor(){
        super() 
          this.state = {
            data: MEC
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
            <Container style={{zIndex:'3',position:'absolute',marginTop:'10rem',marginLeft:'44rem'}}>
               <Col>
               <Row>
           <h3 style={{textAlign:'center'}}>Mechanical Branch</h3>
           </Row>
           </Col>
           </Container>
           <div style={{paddingTop:'16rem',marginLeft:'18rem'}}>
           <Grid flow="columns" columns={3} style={{rowGap:"30px",alignSelf: 'center',justifyContent: 'space-around',width:'100%'}}>
                {
                    this.state.data.map(function(people,index){
                   return(
                   <div>
                   <Link to={"/"+people.A} pass={people} style={{textDecoration:'none'}}>
                   <Cell>
                        <StudentKard key={people.A} nameOnCard={people.B} pc={people.R}/>
                    </Cell>
                   </Link>
                   </div>
                   );
                
                })
                }
            </Grid>
               </div>
           <div style={{zIndex:'2',position: 'absolute',}}>
                <Footer/>
                </div>
            </div>
        )
    }
}

//render={(props)=> <Kard paas={people}/>}


/*
<div style={{zIndex:'3',position:'absolute',marginLeft:'18rem',marginTop:'10rem'}}>
            <text style={{marginLeft:'190px'}}>
            Mechanical Engineering 2019
            </text>  
            </div>

            */


            /*


             <Grid flow="columns" columns={3} style={{rowGap:"30px",alignSelf: 'center',justifyContent: 'space-around',width:'100%'}}>
                {
                    this.state.data.map(function(people,index){
                   return(
                   <div>
                   <Link to={"/"+people.A} pass={people} style={{textDecoration:'none'}}>
                   <Cell>
                        <StudentKard key={people.A} nameOnCard={people.B} pc={people.R}/>
                    </Cell>
                   </Link>
                   </div>
                   );
                
                })
                }
            </Grid>


            */