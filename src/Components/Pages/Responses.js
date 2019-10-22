import React from 'react'
import {Card,CardText} from 'react-mdl';



const Kard =(props) =>{
    return (
        <div>
            <Card shadow={5} style={{margin:'auto'}} height="140px">
                <CardText>
                    {this.props.q}
                </CardText>
                <CardText>
                    {this.props.a}
                </CardText>
          </Card>
          </div>
         )
  }
  
  export default Kard;
