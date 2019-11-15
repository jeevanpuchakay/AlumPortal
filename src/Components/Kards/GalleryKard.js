import React, { Component } from 'react'

import {Card} from 'react-mdl';

export default class GalleryKard extends Component {
    constructor(props){
        super(props);
        this.state={
            data:props.packet
        }
        console.log(this.state.data)
    }
    render() {
        return (
            <div>
            <Card shadow={5} style={{margin:'auto',height:'25rem',width:'25rem'}}>
            <img src={this.state.data||foto} alt="fato"  style={{ alignSelf:'center',height:'25rem',width:'25rem'}} />
        </Card>
            </div>
        )
    }
}


const foto="https://media.gq.com/photos/55828b3f1177d66d68d5287c/master/pass/blogs-the-feed-how-i-met-your-mother-barney-stinson.jpg";
