import React, { Component } from 'react'
import NavigationForRest from '../Navigation/NavigationForRest'
import HomeNavbar from './../Navigation/HomeNavbar'

const Background="https://image.shutterstock.com/image-photo/university-alumni-graduate-education-message-260nw-559783975.jpg"

class Faculty1 extends Component {
    render(){
        return (
            <div>
            <div  style={{paddingTop:'0px',zIndex:'3',position:'fixed',width:"100%"}}>
            <HomeNavbar/>
            </div>
            <div  style={{zIndex: "1",position:'absolute'}}>
            <NavigationForRest/>
            </div>
                <img src={Background} alt="phoo"  style={{marginTop:'0px',marginLeft:'240px',alignSelf: 'center',width:'82%',height:'700px'}}/>
                <div style={{marginLeft: '500px',alignSelf: 'center',position:'absolute',}}>

                    <h1>
                        hello from Faculty1
                    </h1>
                </div>
            </div>
        )
    
}}

export default Faculty1;
