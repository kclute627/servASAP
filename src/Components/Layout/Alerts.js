import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import {removeAlert} from '../../Actions/alertActions'
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    
    },
  }));

const Alerts = () => {
    const alerts = useSelector(state => state.alerts)  
    const classes = useStyles();
    const dispatch = useDispatch()


    return (
      <div className={classes.root}>

        
        {
            alerts.map(alert => {
               return <Alert severity={alert.alertType} key={alert.id} onClose={() => {dispatch(removeAlert(alert.id))}}> {alert.msg} </Alert>
            })
        }
        </div>
    )
}

export default Alerts
