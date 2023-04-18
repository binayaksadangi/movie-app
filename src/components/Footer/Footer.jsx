import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import classes from './Footer.module.css'
const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.footerHeading}>&#169; Filmograph 2023</div>
      <div>
        <a href="https://github.com/binayaksadangi" target='blank' className={classes.link}>
          <GitHubIcon />
        </a>
      </div>
    </div>
  )
}

export default Footer