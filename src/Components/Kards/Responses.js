import React, { Component } from 'react'
import {Card} from 'react-mdl';



export default class Responses extends Component {
    constructor(props){
        super(props);
        this.state={
            question:props.q,
            answer:props.a
        }
    }
    render() {
        return (
            <div>
            <Card shadow={5} style={{marginLeft:'320px',marginTop: '10px',width:'75%',overflow:'auto'}}>
            <text style={{fontSize:'30px',marginLeft: '30px',marginTop: '10px',}}>
               {this.state.question} 
            </text>
            <text style={{fontSize:'24px',marginLeft:'30px',marginTop: '10px',}}>
               {this.state.answer} 
            </text>
        </Card>
            </div>
        )
    }
}
