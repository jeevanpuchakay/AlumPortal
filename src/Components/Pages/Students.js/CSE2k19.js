import React, { Component } from 'react'
import NavigationForRest from '../../Navigation/NavigationForRest'
import StudentKard from '../../Kards/StudentKard'
import Cse from '../../Data/CSE.json'
import HomeNavbar from '../../Navigation/HomeNavbar'
import {Link} from 'react-router-dom'

import {Grid,Cell} from 'styled-css-grid';

//import Kard from '../Responses'

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

export default class CSE2k19 extends Component {
    
    constructor(){
        super() 
          this.state = {
            data: Cse
          }}
    render() {
        return (
            <div>
                <div style={{position:'fixed',top:'0',width:'100%',zIndex:'3'}}>
                <HomeNavbar/>
                </div>
            <div style={{position:'absolute',top:'0',zIndex:'2'}}>
            <NavigationForRest />
            </div>
            <div style={{marginTop:'0px',marginLeft:'240px',position:'absolute',top:'90px',zIndex:'1'}}>
            <h1 style={{marginLeft:'190px'}}>
            Computer science Engineering 2019
            </h1>  
            </div>
            <div  style={{position:'absolute',zIndex:'10',marginLeft:'240px',top:'100px'}} >
            <ColoredLine color="black"/>
            </div>
            
            <div style={{marginTop:'240px',marginLeft:'240px',zIndex:'2'}}>
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

            </div>
        )
    }
}

//render={(props)=> <Kard paas={people}/>}