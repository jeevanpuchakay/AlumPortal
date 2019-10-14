import React, { Component } from 'react'
import NavigationForRest from '../../Navigation/NavigationForRest'
import StudentKard from '../../Kards/StudentKard'
import Cse21People from '../../Data/Cse21People.json'


import {Grid,Cell} from 'styled-css-grid';



const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);

export default class CSE2k19 extends Component {
    
    constructor(){
        super() 
          this.state = {
            data: Cse21People
          }}


    render() {
        return (
            <div>
            <NavigationForRest />
            <h1 style={{marginTop:'0px',marginLeft:'240px',alignSelf: 'center'}}>
            Computer science Engineering 2019
            </h1>  
            <ColoredLine color="black" />
            <div style={{marginTop:'0px',marginLeft:'240px',alignSelf: 'center',justifyContent: 'space-around',overflow: 'auto',}}>
            <Grid flow="columns" columns={3} style={{rowGap:"30px"}}>
                {
                    this.state.data.map(function(people,index){
                   return(
                    <Cell>
                        <StudentKard key={people.C} nameOnCard={people.B}/>
                    </Cell>
                   );
                
                })
                }
            </Grid>
                </div>

            </div>
        )
    }
}
