import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function InputForm() {

  const [vapid, setVapid]=useState("");

  const [url, setUrl]=useState("");

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      Add public VAPID key & Server URL
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="vapidkey"
            name="vapidkey"
            label="Public VAPID key"
            multiline
            fullWidth
            value={vapid}
            onChange={(event) => {setVapid(event.target.value); localStorage.setItem("Vapid",event.target.value) }}
            autoComplete="Public VAPID key"
            helperText={vapid === "" ? 'Empty!' : ' '}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="serverurl"
            name="serverurl"
            label="Server URL (Post request endpoint)"
            fullWidth
            value={url}
            onChange={(event) => {setUrl(event.target.value); localStorage.setItem("Url",event.target.value) }}
            autoComplete="Server URL"
            helperText={url === "" ? 'Empty!' : ' '}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}