import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Kard from '../Kards/Kardfor2k19'
import 'react-bootstrap'
import HomeNavbar from '../Navigation/HomeNavbar'

import { Link } from 'react-router-dom'

import {  Row } from 'react-bootstrap'


import Footer from './../Kards/Footer'

//import styled from 'styled-components';



export default class Homepage extends Component {
    render() {
        return (
            <div>
                <HomeNavbar />
                <p>
                    <table>
                        <h1 className="text-black text-center">Yearbook Portal </h1>
                        <p className="text-center" style={{ fontFamily: 'times', fontSize: '2rem' }}>
                            {about}
                        </p>
                    </table>
                </p>
                <Row>
                    <Link to="/Homepage2k19" style={{ textDecoration: 'none' }}>
                        <Kard />
                    </Link>
                </Row>
                <Footer/>
            </div >
        )
    }
}




const about = "The yearbook portal is an initiative taken by the alumni cell to save the memories of all the students passing out of the campus. Historically, yearbooks were little more than picture books, often including literary works and art. With the explosion of desktop publishing in the last few decades, yearbooks have become even more journalistic, reflecting not only the design and photographic capabilities now available, but including coverage that showcases everything from reporting of events to first-person profiles";


//const about2 = "Alumni Cell works to foster the relationship between Alumni and its institute. We organise our flagship event Magnum Opus and undertook various initiatives like Alumni Magazine, Yearbook Portal, Alumni Garden, etc. Magnum Opus will be organized on the 4th of January and Reunion will be organised on 5th of January. We look forward to taking up a lot many such initiatives such as the beginning of Alumni Chapters and more successions of Alumni Meet in future."


//const website="http://www.iiti.ac.in/";