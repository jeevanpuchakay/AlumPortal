import React from 'react'
import { makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
//import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FacultyData from '../Data/FacultyData.json'
import BranchData from '../Data/Branches.json'
import {Link} from 'react-router-dom'



const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}))


export default function NavigationForRest() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={1}
        classes={{
          paper: classes.drawerPaper,
        }}
        style={{paddingTop: '10rem'}}
      >
      <Divider/>
      <a href="/Homepage2k19" style={{textDecoration: 'none',marginTop:'7.5rem'}}>
      <text style={{textDecorationStyle:'solid',fontSize:'30px',}}>
      Yearbook 2K19
      </text>
      </a>
      <text style={{fontSize:'20px'}}>
          Contents
      </text>
       <List>
          {
            FacultyData.map((text,index) =>(
            <Link to={text.B} style={{ textDecoration: 'none', }}>
            <ListItem>
           <ListItemText primary={text.A} styles={{color:'blue'}} />
           </ListItem>
           <Divider/>
            </Link>
            ))
          }
       </List>
       <Divider/>
       <text style={{fontSize:'20px',marginTop: '20px',}}>
          BranchWise Students
      </text>
      <List>
          {
            BranchData.map((text,index) =>(
            <a href={text.B} style={{ textDecoration: 'none', }}>
            <ListItem>
           <ListItemText primary={text.A} styles={{color:'blue'}} />
           </ListItem>
           <Divider/>
            </a>
            ))
          }
       </List>
      </Drawer>
    </div>
  );
}