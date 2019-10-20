import React, { Component } from 'react'
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';


export default class KardForResponses extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             q:this.props.question,
             a:this.props.answer
        }
    }
    
    render() {
        return (
            <div>
                        if(){
                             <Card style={{maxWidth: '100%',marginLeft:'10px',marginTop:'15px'}}>
                        <CardContent>
                        <text>
                        {this.state.q}
                        </text>
                        <br/>
                        <text>
                        {this.state.a}
                        </text>
                        </CardContent>
            </Card>
                         }
            </div>
        )
    }
}

