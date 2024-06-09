import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from "@material-ui/icons/Email"
import PhoneIcon from "@material-ui/icons/Phone"
import { Tooltip, } from '@material-ui/core'
import DownloadIcon from "@material-ui/icons/CloudDownload"
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Tooltip title="Download Resume" placement='top'>
            <a href='https://drive.google.com/file/d/14tsuJnLKTEcjPbgD5hkq2exRCrdWgu2W/view?usp=sharing' target="_blank">
            <DownloadIcon/></a>
            </Tooltip>
            
            <Tooltip title="simran.sekhon10@gmail.com" placement='top'>
              <a href='mailto:simran.sekhon10@gmail.com'><EmailIcon /></a>
            </Tooltip>
            
            <Tooltip title="+1-440-454-2391" placement='top'>
              <a href="tel:+14404542391"><PhoneIcon /></a>
            </Tooltip>
            
            <Tooltip title="LinkedIn Profile" placement='top'>
            <a href='https://www.linkedin.com/in/simran-sekhon-sam/' target="_blank"><LinkedInIcon /></a>
            </Tooltip>

            <Tooltip title="Github Profile" placement='top'>
            <a href='https://github.com/SimranSekhon12' target="_blank"><GitHubIcon /></a>
            </Tooltip>

        </div>
        <h3><i> Copyright &copy; 2024 simransekhon.com </i></h3>
        
    </div>
  )
}

export default Footer