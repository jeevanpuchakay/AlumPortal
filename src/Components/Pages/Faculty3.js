import React, { Component } from 'react'
import NavigationForRest from '../Navigation/NavigationForRest'


const Background="https://image.shutterstock.com/image-photo/university-alumni-graduate-education-message-260nw-559783975.jpg"

class Faculty3 extends Component {
    render(){
        return (
            <div>
                <NavigationForRest/>
                <img src={Background} alt="phoo"  style={{marginTop:'0px',marginLeft:'240px',alignSelf: 'center',width:'82%',height:'700px'}}/>
                <div style={{marginLeft: '500px',alignSelf: 'center',position:'absolute',}}>

                    <h1>
                        hello from Faculty3
                    </h1>
                </div>
            </div>
        )
    
}}

export default Faculty3;
