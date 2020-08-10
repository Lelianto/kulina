import React from 'react';
import $ from "jquery";
import '../../App.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
  grow: {
		flexGrow: 1,
    backgroundColor: 'white',
    position: 'fixed',
    zIndex: '200',
    marginTop: '50px'
	},
	shadowNone: {
		boxShadow: 'none !important'
  },
  circleBox: {
    color: 'black',
    display: 'inline',
    padding: '0px 20px'
  },
}));

$(document).ready(function(){
  document.getElementById('center').scrollIntoView({ inline: 'center' });
});

const DatePicker = (props) => {
  let dates = props.listDate
  const classes = useStyles();
  if (dates.length === 0) {
    return (
      <div>

      </div>
    )
  } else {
    return (
      <div>
        <AppBar position="static" className={[classes.grow, classes.shadowNone].join(' ')}>
          <Grid container>
          <ul className='paddingZero'>
            {
              dates.map((date, index)=>(
                <span>
                  {
                    index===7?
                    <li onClick={()=>props.handleChoosenDate(date)} className={classes.circleBox} id='center'>
                        {date.date}
                    </li>
                    :
                    <li onClick={()=>props.handleChoosenDate(date)} className={classes.circleBox}>
                      {date.date}
                    </li>
                  }
                </span>
              ))
            }
          </ul>
          </Grid>
        </AppBar>
      </div>
    );
  }
}

export default DatePicker