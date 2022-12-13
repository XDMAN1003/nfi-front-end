import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import logo from "../assets/test.jpg"

export default function TitleWithLogo() {

const styles = {
    titleText: {
        fontFamily: "Ceviche One",
        color: "#043871",
    }
}
  return (
    <Grid container spacing={4} sx={{marginTop: "10vh"}}>
      <Grid item xs={3}></Grid>
      <Grid item xs={2}>
        <img src={logo} alt="Logo" width="100%" />
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h1" color="initial" sx={{marginTop: "-25px"}} style={styles.titleText}>
          Get the wallet
        </Typography>
        <Typography variant="h3" color="initial" sx={{marginTop: "-35px"}} style={styles.titleText}>Use Metamask to help you</Typography>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  )
}
