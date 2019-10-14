import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
//import Card from '@material-ui/core/Card';
//import CardContent from '@material-ui/core/CardContent';
//import Typography from '@material-ui/core/Typography';
import {Card,CardTitle} from 'react-mdl';


const foto="https://media.gq.com/photos/55828b3f1177d66d68d5287c/master/pass/blogs-the-feed-how-i-met-your-mother-barney-stinson.jpg";


const Kard =(props) =>{
  return (
      <div>
          <Card shadow={5} style={{margin:'auto'}} height="140px">
            <img src={foto} alt="fato"  style={{width: 275, height: 275, borderRadius: 275/ 2, alignSelf:'center'}} />
            <CardTitle style={{color:'black',dispaly:'flex'}}>
                <text>{props.nameOnCard}</text>
                </CardTitle>
        </Card>
        </div>
       )
}

export default Kard;
