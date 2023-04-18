import React from 'react'
import { AppBar,Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import classes from './Header.module.css'
const Header = () => {
  const sxAppBar = {
    '&.MuiAppBar-root ':{
       boxShadow: 'none !important',
    },
    height: 62,
  }
  return (
   <>
    <AppBar position="sticky" color="primary" sx={sxAppBar}>
        <Grid container justifyContent="center" alignItems="center">
           <Link to='/' className={classes.link}><h2>Filmograph</h2></Link> 
        </Grid>
    </AppBar>
   </>
  )
}

export default Header