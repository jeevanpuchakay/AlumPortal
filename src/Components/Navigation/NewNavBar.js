import React, { Component } from 'react'
import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../../nav.css'



export default class NewNavBar extends Component {
    render() {
        return (

            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Alumni Portal</h3>
                </div>

                <ul className="list-unstyled components">
                    <p>Alumni Cell IIT Indore</p>
                    <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Messages</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <a href="#">Director</a>
                            </li>
                            <li>
                                <a href="#">DOAA</a>
                            </li>
                            <li>
                                <a href="#">AlumniCoOrd</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Branchwise Students</a>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                            <li>
                                <a href="#">EE</a>
                            </li>
                            <li>
                                <a href="#">CSE</a>
                            </li>
                            <li>
                                <a href="#">MEC</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>

        )
    }
}
