import React, { Component } from 'react'
import NavigationForRest from '../../Navigation/NavigationForRest'
import Card from '@material-ui/core/Card';
//import Typography from '@material-ui/core/Typography';
//import Divider from '@material-ui/core/Divider';


import CardContent from '@material-ui/core/CardContent';
import {Grid,Cell} from 'styled-css-grid';
import KardForResponses from '../../Kards/KardForResponses'


const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);
const q="https://media.gq.com/photos/55828b3f1177d66d68d5287c/master/pass/blogs-the-feed-how-i-met-your-mother-barney-stinson.jpg";


const Sty={
    fontSize:"20px"
}


export default class Responses extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             chunk:this.props.pac
        }
    }
    
    render() {
        return (
            <div>
               <NavigationForRest>
            <div style={{marginTop:'0px',marginLeft:'240px'}}>
            <h1 style={{alignSelf: 'center'}}>
            Computer science Engineering 2019
            </h1>  
            <ColoredLine color="black" />
            <Card style={{maxWidth: '100%',marginLeft:'10px'}}>
            <CardContent>
            <Grid flow="columns" columns={3} style={{columnGap:'5px'}}>
            <Cell width='1'>
            <img src={q} alt="ran" style={{width: 275, height: 275, borderRadius: 275/ 2, alignSelf:'left'}}/>
            </Cell>
            <Cell width='2'>
           <text className={Sty} style={{fontWeight: 'bold',fontSize: "50px",marginTop:'200px',}}>
            Lizard
          </text>
          <br/>
          <text className={Sty} style={{fontWeight: 'bold',fontSize: "50px",marginTop:'200px',}}>
          RollNo
          </text>
          </Cell >
            </Grid>
            </CardContent>
            </Card>
            hello
            </div>
            </NavigationForRest>
            </div>
        )
    }
}
/*
if({this.state.chunk.F}){
                <KardForResponses question={questions.F} answer={this.state.chunk.F} />
            }
            */

const questions={
    "F":"Your Message",
   "G": "The positions you held during your stay at IIT Indore",
   "H": "If you get a chance to meet your freshie self what advice would you give to him/her?",
   "I": "“I will always remember…”",
   "J": "One thing that you couldn't check off your bucket list-",
   "K": "You can bring any three of your classmates on a cross-country road trip in your family’s hatchback: who would you choose and why?",
   "L": "What is one outrageous thing you desperately want to try before you die?",
   "M": "Which semester was most fun and why? ",
   "N": "The biggest change you observed in yourself since coming to college? ",
   "O": "If you were made the Director of our college for 24 hours than what will you do?",
   "P": "What is the name of your Immediate friend circle/group?",
   "Q": "The song that describes your college life in the best way:",
   "R": "What are your future plans:",
 }