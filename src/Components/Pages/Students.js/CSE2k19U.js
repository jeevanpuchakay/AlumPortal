import React, { Component } from 'react'
import NavigationForRest from '../../Navigation/NavigationForRest'
import StudentKard from '../../Kards/StudentKard'
import Cse from '../../Data/CSE.json'
import NewNavBar from '../../Navigation/NewNavBar'
import { Route, Link } from 'react-router-dom'


import { Grid, Cell } from 'styled-css-grid';

import Kard from '../Responses'

import $ from 'jquery';
import 'font-awesome/css/font-awesome.css';

//<hr style={{backgroundColor:'black',color:'black',height:'3px',zIndex:'6'}}/>
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2,
        }}
    />
);

export default class CSE2k19U extends Component {

    constructor() {
        super()
        this.state = {
            data: Cse
        }
    }

    sidebarToggle() {
        $('#sidebar').toggleClass('active');
    }

    render() {
        return (

            <div className="wrapper">

                <NewNavBar />

                {/* <!-- Page Content  --> */}
                <div id="content">

                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">

                            <button type="button" id="sidebarCollapse" className="btn btn-info" onClick={this.sidebarToggle}>
                                <i className="fa fa-align-left"></i>
                                <span> Toggle Sidebar</span>
                            </button>
                        </div>
                    </nav>

                    <h2>Computer science Engineering 2019</h2>

                    {/* <div className="line"></div> */}

                    <Grid flow="row dense" columns={3}>
                        {
                            this.state.data.map(function (people, index) {
                                return (
                                    <div>
                                        <Link to={"/" + people.A} pass={people}>
                                            <Cell>
                                                <StudentKard key={people.A} nameOnCard={people.B} pc={people.R} />
                                            </Cell>
                                        </Link>
                                    </div>
                                );

                            })
                        }
                    </Grid>


                </div>
            </div>

        )
    }
}

//render={(props)=> <Kard paas={people}/>}