import React from 'react'
import {Card} from 'react-mdl';
import HomeNavbar from '../Navigation/HomeNavbar'
import NavigationForRest from '../Navigation/NavigationForRest'
import {Grid,Cell} from 'styled-css-grid';

import ToFriend from '../Data/ToFriend.json'
import Responses from '../Kards/Responses'

const questions={
    "D": "Your Message",
   "E": "The positions you held during your stay at IIT Indore",
   "F": "If you get a chance to meet your freshie self what advice would you give to him/her?",
   "G": "“I will always remember…”",
   "H": "One thing that you couldn't check off your bucket list-",
   "I": "You can bring any three of your classmates on a cross-country road trip in your family’s hatchback: who would you choose and why?",
   "J": "What is one outrageous thing you desperately want to try before you die?",
   "K": "Which semester was most fun and why? ",
   "L": "The biggest change you observed in yourself since coming to college? ",
   "M": "If you were made the Director of our college for 24 hours than what will you do?",
   "N": "What is the name of your Immediate friend circle/group?",
   "O": "The song that describes your college life in the best way:",
   "P": "What are your future plans:",
   "R": "Link (imgur.com)",
   "S": "Email Address",
   "T": "Personal Mail Address",
   "U": "Your Photograph to be included in the yearbook."
}
const foto="https://media.gq.com/photos/55828b3f1177d66d68d5287c/master/pass/blogs-the-feed-how-i-met-your-mother-barney-stinson.jpg";

console.log(ToFriend);
const friend=ToFriend;

const Kard =(props) =>{
    console.log(props.paas)
    var answers=props.paas;
    return (
        <div>
        <div style={{position:'fixed',top:'0',width:'100%',zIndex:'3'}}>
                <HomeNavbar/>
                </div>
            <div style={{position:'absolute',top:'0',zIndex:'2'}}>
            <NavigationForRest />
            </div>
        <Card style={{marginTop:'140px',marginLeft:'320px',width:'75%'}} height="140px" >
            <Grid columns={2} style={{width:'65%'}}>
                <Cell>
                <img src={answers["R"]||foto} alt="fato"  style={{width: 275, height: 275, borderRadius: 275/ 2, alignSelf:'left'}} />
                </Cell>
            <Cell style={{marginTop:'50px'}}>
            <text style={{fontSize:'35px'}}>
                    {answers["B"]}
                    <br />
                    {answers["A"]}
                    <br />
                    CSE
                </text>
            </Cell>
            </Grid>
        </Card>
        <div>
        {answers["D"]&&<Responses q={questions.D} a={answers["D"]} style={{width:'100px'}}/>}
        {answers["E"]&&<Responses q={questions.E} a={answers["E"]} style={{height:'auto'}}/>}
        {answers["F"]&&<Responses q={questions.F} a={answers["F"]} style={{height:'auto'}}/>}
        {answers["G"]&&<Responses q={questions.G} a={answers["G"]} style={{height:'100px'}}/>}
        {answers["H"]&&<Responses q={questions.H} a={answers["H"]} style={{height:'100px'}}/>}
        {answers["I"]&&<Responses q={questions.I} a={answers["I"]} style={{height:'100px'}}/>}
        {answers["J"]&&<Responses q={questions.J} a={answers["J"]} style={{height:'100px'}}/>}
        {answers["K"]&&<Responses q={questions.K} a={answers["K"]} style={{height:'100px'}}/>}
        {answers["L"]&&<Responses q={questions.L} a={answers["L"]} style={{height:'100px'}}/>}
        {answers["M"]&&<Responses q={questions.M} a={answers["M"]} style={{height:'100px'}}/>}
        {answers["N"]&&<Responses q={questions.N} a={answers["N"]} style={{height:'100px'}}/>}
        {answers["O"]&&<Responses q={questions.O} a={answers["O"]} style={{height:'100px'}}/>}
        {answers["P"]&&<Responses q={questions.P} a={answers["P"]} style={{height:'100px'}}/>}
        </div>
       <div style={{zIndex:'10'}}>
           {
               friend.map((pe)=>{
               return (pe["D"]===answers["A"])&&(
                   <div>
                <h1 style={{marginLeft:'320px'}}> Message from {pe["A"]}</h1>
              { pe["E"] &&<Responses q={fquestions.E} a={pe["E"]}/>}
              {pe["F"] &&<Responses q={fquestions.F} a={pe["F"]}/>}
              {pe["G"] && <Responses q={fquestions.G} a={pe["G"]}/>}
                  </div>
               )
           })
           }
       </div>
          </div>
         )
  }
  
  export default Kard;


const fquestions={
    "A": "Your Name",
    "B": "Roll Number",
    "C": "Your Friend's Name",
    "D": "His/Her Roll Number",
    "E": "Your Message",
    "F": "Nickname ;P",
    "G": "A theme song describing your friend / friendship"
  }

  /*
  {
               ToFriend.map((people,index)=>{
                   if(people.D===answers["A"]){
                       return <div>
                           hello
                           </div>
                   }
               })
           }*/