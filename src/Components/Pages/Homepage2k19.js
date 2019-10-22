import React, { Component } from 'react'

import NavigationForRest from '../Navigation/NavigationForRest'
import Divider from '@material-ui/core/Divider';
import HomeNavbar from '../Navigation/HomeNavbar'

const Background="https://image.shutterstock.com/image-photo/university-alumni-graduate-education-message-260nw-559783975.jpg";


export default class Homepage2k19 extends Component {
    render() {
        return (
            <div style={{marginTop:"0px",overflow:'visible',paddingTop:'0px'}}>
            <div  style={{paddingTop:'0px',zIndex:'3',position:'fixed',width:"100%"}}>
            <HomeNavbar/>
            </div>
            <div  style={{zIndex: "1",position:'absolute'}}>
            <NavigationForRest/>
            </div>
            <div style={{marginTop:"0px"}}>
            <img src={Background} alt="phoo"  style={{marginTop:'0px',marginLeft:'240px',alignSelf: 'center',width:'82%',height:'700px'}}/>
            </div>
            <div style={{marginLeft: '500px',alignSelf: 'center',position:'absolute',}}>
                <h1>
                    Yearbook 2k19
                </h1>
                <p>
                    message message message
                    <Divider/>
                    qoute quote quote
                </p>
            </div>
            </div>
        )
    }
}

//        
