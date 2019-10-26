import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Kard from '../Kards/Kardfor2k19'
import 'react-bootstrap'
import HomeNavbar from '../Navigation/HomeNavbar'

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <HomeNavbar />
                <p>
                <table>
                    <h1 className="text-black text-center">Yearbook Portal </h1>
                    <p className="text-center">
                        Founded in 1807, John Wiley & Sons, Inc. has been a valued source of knowledge and understanding
                    </p>
                    <p className="text-center">
                    'Navbar' is defined but never used 
                    </p>
                    <p className="text-center">
                    'NavItem' is defined but never used
                    </p>
                </table>
                </p>
               <a href="/Homepage2k19" style={{textDecoration:'none'}}>
               <Kard/>
               </a>
            </div>
        )
    }
}
