import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import InputForm from './InputForm';
import GenerateForm from './GenerateForm';
import { subscribeUser } from './subscription';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Made with ♡ by '}
      <Link color="inherit" href="https://www.linkedin.com/in/dhananjaypurohit/">
        Dhananjay Purohit
      </Link>{' '}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

const steps = ['VAPID key & Server URL', 'Generated Subscription object'];

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (localStorage.getItem('Vapid')!==null && localStorage.getItem('Url')!==null)
    {
    setActiveStep(activeStep + 1);
    subscribeUser();
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
    localStorage.clear();
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.title} noWrap>
            Push Notifications demo
          </Typography>
          <Button color="inherit" href="https://github.com/DhananjayPurohit/push-client/" target="_blank">Github</Button>
          <Button color="inherit" href="https://medium.com/@dhananjaypurohit7/build-a-server-for-sending-web-push-notifications-42367d9fafa8" target="_blank">Docs</Button>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Check push notification server
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
              <React.Fragment>
                {activeStep===0 ? <InputForm/> : <GenerateForm/>}
                <div className={classes.buttons}>
                {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={activeStep === steps.length - 1 ? subscribeUser : handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Send' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}