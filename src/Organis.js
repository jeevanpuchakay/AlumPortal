import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import Homepage from './Components/Pages/Homepage'
import Homepage2k19 from './Components/Pages/Homepage2k19'
import Faculty1 from './Components/Pages/Faculty1'
import Faculty2 from './Components/Pages/Faculty2'
import Faculty3 from './Components/Pages/Faculty3'
import CSE2k19 from './Components/Pages/Students.js/CSE2k19'
import EE2k19 from './Components/Pages/Students.js/EE2k19'
import MEC2k19 from './Components/Pages/Students.js/MEC2k19'
//import FacultyData from './Components/Data/FacultyData.json'
import Cse from './Components/Data/CSE.json'
import Ee from './Components/Data/EE.json'
import Mec from './Components/Data/MEC.json'
import Kard from './Components/Pages/Responses'

export default class Organis extends Component {
    render() {
        return (
            <div>
                <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route path="/Homepage2k19" component={Homepage2k19}/>
                <Route path="/Faculty1" component={Faculty1}/>
                <Route path="/Faculty2" component={Faculty2}/>
                <Route path="/Faculty3" component={Faculty3}/>
                <Route path="/CSE2k19" component={CSE2k19}/>
                <Route path="/EE2k19" component={EE2k19}/>
                <Route path="/MEC2k19" component={MEC2k19}/>
                </Switch>
                {Cse.map((people,index)=>{
                    return <Switch><Route path={"/"+people.A} key={index} render={(props)=> <Kard paas={people}/>}/></Switch>
                })}
                {Ee.map((people,index)=>{
                    return <Switch><Route path={"/"+people.A} key={index} render={(props)=> <Kard paas={people}/>}/></Switch>
                })}
                {Mec.map((people,index)=>{
                    return <Switch><Route path={"/"+people.A} key={index} render={(props)=> <Kard paas={people}/>}/></Switch>
                })}
            </div>
        )
    }
}

