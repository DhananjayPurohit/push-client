import React,{useState, useEffect, useRef} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


export default function GenerateForm() {

  const [subs, setSubs]=useState(localStorage.getItem("subs"))
  const [k,setK]=useState(0);
  useEffect(()=>{
    setSubs(localStorage.getItem("subs"))
    if (subs===null)
    {
      setK(k+1)
      console.log(k)
    }
  },[k])
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Subscription object
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Typography key={k} style={{wordBreak:"break-all"}}>
        {subs}
        </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}